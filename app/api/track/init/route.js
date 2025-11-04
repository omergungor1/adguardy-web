import { NextResponse } from 'next/server';

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
};

// OPTIONS request (preflight)
export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

// POST /api/track/init
export async function POST(request) {
    try {
        const body = await request.json();

        const {
            tracking_id,
            ad_click_id,
            fingerprint_id,
            screen_width,
            screen_height,
            landing_page,
            referrer,
            fingerprint_data
        } = body;

        // Validation
        if (!tracking_id || !fingerprint_id) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400, headers: corsHeaders }
            );
        }

        // Session ID oluştur
        const sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;

        // Traffic source belirleme
        let trafficSource = 'direct';
        let isAdTraffic = false;

        if (ad_click_id) {
            trafficSource = 'google_ads';
            isAdTraffic = true;
        } else if (referrer) {
            const referrerUrl = new URL(referrer);
            const domain = referrerUrl.hostname;

            if (domain.includes('google.com') || domain.includes('bing.com')) {
                trafficSource = 'organic_search';
            } else if (domain.includes('facebook.com') || domain.includes('instagram.com')) {
                trafficSource = 'social_media';
            } else {
                trafficSource = 'referral';
            }
        }

        // TODO: Supabase'e kaydetme işlemi burada yapılacak
        // const { data, error } = await supabase.from('sessions').insert({...})

        console.log('Session created:', {
            sessionId,
            trackingId: tracking_id,
            isAdTraffic,
            trafficSource,
            landingPage: landing_page
        });

        return NextResponse.json(
            {
                success: true,
                session_id: sessionId,
                is_ad_traffic: isAdTraffic,
                traffic_source: trafficSource,
                skipped: false
            },
            { headers: corsHeaders }
        );

    } catch (error) {
        console.error('Track init error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500, headers: corsHeaders }
        );
    }
}


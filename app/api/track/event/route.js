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

// POST /api/track/event
export async function POST(request) {
    try {
        const body = await request.json();

        const {
            session_id,
            event_type,
            scroll_percent,
            click_x,
            click_y,
            target_element,
            target_href,
            target_text,
            page_url,
            event_data
        } = body;

        // Validation
        if (!session_id || !event_type) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400, headers: corsHeaders }
            );
        }

        // TODO: Supabase'e event kaydetme işlemi burada yapılacak
        // const { data, error } = await supabase.from('events').insert({...})

        console.log('Event tracked:', {
            sessionId: session_id,
            eventType: event_type,
            pageUrl: page_url
        });

        return NextResponse.json(
            { success: true },
            { headers: corsHeaders }
        );

    } catch (error) {
        console.error('Track event error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500, headers: corsHeaders }
        );
    }
}


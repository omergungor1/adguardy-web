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

// POST /api/track/end
export async function POST(request) {
    try {
        const body = await request.json();

        const { session_id } = body;

        // Validation
        if (!session_id) {
            return NextResponse.json(
                { success: false, error: 'Missing session_id' },
                { status: 400, headers: corsHeaders }
            );
        }

        // TODO: Supabase'de session'ı sonlandırma
        // const { error } = await supabase
        //   .from('sessions')
        //   .update({ 
        //     ended_at: new Date(),
        //     is_active: false 
        //   })
        //   .eq('session_id', session_id)

        console.log('Session ended:', session_id);

        return NextResponse.json(
            { success: true },
            { headers: corsHeaders }
        );

    } catch (error) {
        console.error('Track end error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500, headers: corsHeaders }
        );
    }
}


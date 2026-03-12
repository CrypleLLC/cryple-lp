import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const LOOPS_API_KEY = process.env.LOOPS_API_KEY;

    if (!LOOPS_API_KEY) {
      console.warn("LOOPS_API_KEY is not defined. Simulating success in development.");
      return NextResponse.json({ success: true, message: "Simulated success" });
    }

    // Call the Loops.so API to add the contact
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        source: 'Landing Page Waitlist',
        userGroup: 'Waitlist', // Optional: Tag them for future filtering
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      // Loops.so returns a specific error message if the email already exists
      if (errorData.message === 'Email is already in your audience.') {
        return NextResponse.json(
          { error: 'You are already on the list!' },
          { status: 409 }
        );
      }

      console.error('Loops API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Added to waitlist' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json(); // Get email from the request body

  // Read the credentials from your .env file
  const FORM_ID = process.env.CONVERTKIT_FORM_ID;
  const API_KEY = process.env.CONVERTKIT_API_KEY;

  // Prepare the form data to be submitted to ConvertKit's API
  const FORM_DATA = { api_key: API_KEY, email };

  if (!email) {
    return NextResponse.json({ error: "Email address is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(FORM_DATA),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || "Something went wrong." }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error submitting email to ConvertKit:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

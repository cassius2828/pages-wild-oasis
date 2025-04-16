import { supabase } from "@/lib/supabase";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Please make a POST request" });
  }

  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from("contact").insert([contactData]);
  if (error) {
    return res.status(500).json({
      success: false,
      message: "Could not send your message. Please try again.",
    });
  }

  res.status(200).json({
    success: true,
    message:
      "Thank you for your contact submission, we will get back to you shortly!",
  });
};

export default handler;

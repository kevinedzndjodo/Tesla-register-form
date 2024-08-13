import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://wgjixqvybwckxcrqscvu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnaml4cXZ5Yndja3hjcnFzY3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MDkxNjgsImV4cCI6MjAzOTA4NTE2OH0.QbNMqtynXBCJN0TXlwXgPwuWEdbi-lb2W2ouuS22d5w"; // Replace with your actual public anon key
const supabase = createClient(supabaseUrl, supabaseKey);

function initializeApp() {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    try {
      const { data, error } = await supabase.from("users").insert([
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: email,
        },
      ]);

      if (error) throw error;

      const successfulSubmit = document.querySelector("#validationMessage");
      successfulSubmit.textContent = "Form submitted successfully!";
      successfulSubmit.classList.add(
        "w-full",
        "h-12",
        "px-12",
        "py-3",
        "rounded-xl",
        "p-2",
        "text-l",
        "bg-green-500",
        "text-white",
        "flex",
        "justify-center",
        "items-center",
        "text-center",
        "font-medium"
      );

      form.reset(); // Clear the form after successful submission
    } catch (error) {
      const unsuccessfulSubmit = document.querySelector("#validationMessage");
      unsuccessfulSubmit.textContent =
        "An error occurred. Please try again later.";
      unsuccessfulSubmit.classList.add(
        "w-full",
        "h-12",
        "px-12",
        "py-3",
        "rounded-xl",
        "p-2",
        "text-l",
        "bg-red-500",
        "flex",
        "justify-center",
        "items-center",
        "text-white",
        "font-medium",
        "text-center"
      );
    }
  });
}

initializeApp();

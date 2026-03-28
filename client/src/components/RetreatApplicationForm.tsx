import { useState } from "react";
import { ChevronRight, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  // Step 1: Personal
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Step 2: Context
  age: string;
  childrenAges: string;
  occupation: string;

  // Step 3: The Real Questions
  currentChallenge: string;
  whyRetreat: string;
  commitment: string;

  // Step 4: Logistics
  dietaryRestrictions: string;
  mobilityNeeds: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  childrenAges: "",
  occupation: "",
  currentChallenge: "",
  whyRetreat: "",
  commitment: "",
  dietaryRestrictions: "",
  mobilityNeeds: "",
  additionalInfo: "",
};

export default function RetreatApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 2:
        return !!(formData.age && formData.childrenAges && formData.occupation);
      case 3:
        return !!(formData.currentChallenge && formData.whyRetreat && formData.commitment);
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      setError("");
    } else {
      setError("Please fill in all required fields to continue.");
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) {
      setError("Please complete all fields before submitting.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send form data to backend
      const response = await fetch("/api/retreat-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitted(true);
      setFormData(initialFormData);
      setStep(1);
    } catch (err) {
      setError("There was an error submitting your application. Please try again or email shaun@shauntucker.com.au");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="mb-6 flex justify-center">
          <CheckCircle size={64} className="text-emerald-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Application Received
        </h2>
        <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          Thank you for applying to The Unforgettable Retreat. Shaun personally reviews every application and will be in touch within 48 hours.
        </p>
        <p className="text-sm text-gray-500 mb-8" style={{ fontFamily: "var(--font-body)" }}>
          Check your email for confirmation. If you don't see it, check your spam folder.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                num <= step
                  ? "bg-amber-500 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Let's start with the basics.
              </h3>
              <p className="text-gray-400 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                We need to know who you are so we can follow up with you personally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+61 4XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
          </div>
        )}

        {/* Step 2: Context */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Tell us about your world.
              </h3>
              <p className="text-gray-400 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                This helps us understand where you're coming from and how we can best support you.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Age *
              </label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <option value="">Select your age range</option>
                <option value="25-30">25-30</option>
                <option value="30-35">30-35</option>
                <option value="35-40">35-40</option>
                <option value="40-45">40-45</option>
                <option value="45-50">45-50</option>
                <option value="50+">50+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Ages of Your Children *
              </label>
              <input
                type="text"
                name="childrenAges"
                value={formData.childrenAges}
                onChange={handleChange}
                placeholder="e.g., 3, 7, 11"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Occupation / What You Do *
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g., Founder, Director, Manager"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
          </div>
        )}

        {/* Step 3: The Real Questions */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                The real questions.
              </h3>
              <p className="text-gray-400 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                This is where we get honest. Your answers help us understand if the retreat is the right fit for you right now.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                What's your biggest challenge right now as a dad? *
              </label>
              <textarea
                name="currentChallenge"
                value={formData.currentChallenge}
                onChange={handleChange}
                placeholder="Be honest. What's keeping you up at night?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Why do you want to attend The Unforgettable Retreat? *
              </label>
              <textarea
                name="whyRetreat"
                value={formData.whyRetreat}
                onChange={handleChange}
                placeholder="What are you hoping will change?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                How committed are you to doing this work? *
              </label>
              <select
                name="commitment"
                value={formData.commitment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <option value="">Select your commitment level</option>
                <option value="exploring">Just exploring — not sure yet</option>
                <option value="interested">Interested — but still deciding</option>
                <option value="serious">Serious — I'm ready to commit</option>
                <option value="all-in">All in — I'm ready to change</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 4: Logistics & Additional Info */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Final details.
              </h3>
              <p className="text-gray-400 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                Help us make sure the retreat is set up perfectly for you.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="e.g., Vegan, Gluten-free, Nut allergy"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Any mobility or accessibility needs?
              </label>
              <input
                type="text"
                name="mobilityNeeds"
                value={formData.mobilityNeeds}
                onChange={handleChange}
                placeholder="Let us know if there's anything we should prepare for"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Anything else we should know?
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any other information that might be relevant"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <p className="text-sm text-amber-200" style={{ fontFamily: "var(--font-body)" }}>
                ✓ Every application is personally reviewed by Shaun. You'll hear back within 48 hours.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex gap-3">
            <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-200" style={{ fontFamily: "var(--font-body)" }}>
              {error}
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="flex-1 px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 px-6 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Next
              <ChevronRight size={18} />
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center mt-6" style={{ fontFamily: "var(--font-body)" }}>
          By submitting this application, you agree to be contacted by Shaun Tucker regarding your retreat application.
        </p>
      </form>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import {
  Save,
  X,
  User,
  Lock,
  Shield,
  LogOut,
  Baby,
  Users,
  Heart,
  Brain,
  UserCheck,
  Grid3X3,
  ChevronDown,
  ChevronUp,
  CodeSquare,
  Pencil,
  Trash,
  Sparkles,
  Plus,
  CheckCircle,
  Clock,
  FileText,
  Star
} from "lucide-react";
import Sidebar from "./Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSidebar } from './Sidebar';

const Forms = () => {
  const [forms, setForms] = useState([]);
  const [formType, setFormType] = useState("");
  const [showFormTypes, setShowFormTypes] = useState(true);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentFormId, setCurrentFormId] = useState(null);
  const [editingInCard, setEditingInCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [expandedSections, setExpandedSections] = useState({});
  const [isEdit,setIsEdit]=useState(false);
  const [selectedFormType, setSelectedFormType] = useState({});
  const [newField,setNewField]=useState({
     name:"",
     type:"",
     label:"",
     required:false,
  });
  const [showForm, setShowForm] = useState(false);

  const { clientId } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useSidebar();

  // Form type definitions (keeping your existing formTypes array)
   const formTypes = [
    {
      id: "child-intake",
      title: "Child Intake Form",
      description: "Comprehensive intake form for pediatric clients",
      icon: Baby,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      fields: [
        // Child Information Section
        {
          name: "childName",
          label: "Child's Full Name",
          type: "text",
          required: true,
          section: "Child Information",
        },
        {
          name: "dateOfBirth",
          label: "Date of Birth",
          type: "date",
          required: true,
          section: "Child Information",
        },
        {
          name: "age",
          label: "Current Age",
          type: "number",
          required: true,
          section: "Child Information",
          min: 0,
          max: 18,
        },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["Male", "Female", "Non-binary", "Prefer not to say"],
          required: true,
          section: "Child Information",
        },
        {
          name: "preferredName",
          label: "Preferred Name/Nickname",
          type: "text",
          required: false,
          section: "Child Information",
        },
        {
          name: "primaryLanguage",
          label: "Primary Language Spoken",
          type: "text",
          required: true,
          section: "Child Information",
        },
        {
          name: "otherLanguages",
          label: "Other Languages Spoken",
          type: "text",
          required: false,
          section: "Child Information",
        },

        // Parent/Guardian Information
        {
          name: "parentGuardian1Name",
          label: "Parent/Guardian 1 Full Name",
          type: "text",
          required: true,
          section: "Parent/Guardian Information",
        },
        {
          name: "parentGuardian1Relationship",
          label: "Relationship to Child",
          type: "select",
          options: [
            "Mother",
            "Father",
            "Grandmother",
            "Grandfather",
            "Aunt",
            "Uncle",
            "Legal Guardian",
            "Foster Parent",
            "Other",
          ],
          required: true,
          section: "Parent/Guardian Information",
        },
        {
          name: "parentGuardian1Phone",
          label: "Primary Phone Number",
          type: "tel",
          required: true,
          section: "Parent/Guardian Information",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          placeholder: "123-456-7890",
        },
        {
          name: "parentGuardian1Email",
          label: "Email Address",
          type: "email",
          required: true,
          section: "Parent/Guardian Information",
          placeholder: "example@email.com",
        },
        {
          name: "parentGuardian1Occupation",
          label: "Occupation",
          type: "text",
          required: false,
          section: "Parent/Guardian Information",
        },
        {
          name: "parentGuardian2Name",
          label: "Parent/Guardian 2 Full Name",
          type: "text",
          required: false,
          section: "Parent/Guardian Information",
        },
        {
          name: "parentGuardian2Relationship",
          label: "Relationship to Child",
          type: "select",
          options: [
            "Mother",
            "Father",
            "Grandmother",
            "Grandfather",
            "Aunt",
            "Uncle",
            "Legal Guardian",
            "Foster Parent",
            "Other",
          ],
          required: false,
          section: "Parent/Guardian Information",
        },
        {
          name: "parentGuardian2Phone",
          label: "Phone Number",
          type: "tel",
          required: false,
          section: "Parent/Guardian Information",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          placeholder: "123-456-7890",
        },
        {
          name: "parentGuardian2Email",
          label: "Email Address",
          type: "email",
          required: false,
          section: "Parent/Guardian Information",
          placeholder: "example@email.com",
        },

        // Contact Information
        {
          name: "homeAddress",
          label: "Home Address",
          type: "textarea",
          required: true,
          section: "Contact Information",
          placeholder: "Enter full street address, city, state, zip code",
        },
        {
          name: "emergencyContact1Name",
          label: "Emergency Contact 1 Name",
          type: "text",
          required: true,
          section: "Contact Information",
        },
        {
          name: "emergencyContact1Phone",
          label: "Emergency Contact 1 Phone",
          type: "tel",
          required: true,
          section: "Contact Information",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          placeholder: "123-456-7890",
        },
        {
          name: "emergencyContact1Relationship",
          label: "Relationship to Child",
          type: "text",
          required: true,
          section: "Contact Information",
        },
        {
          name: "emergencyContact2Name",
          label: "Emergency Contact 2 Name",
          type: "text",
          required: false,
          section: "Contact Information",
        },
        {
          name: "emergencyContact2Phone",
          label: "Emergency Contact 2 Phone",
          type: "tel",
          required: false,
          section: "Contact Information",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          placeholder: "123-456-7890",
        },

        // School Information
        {
          name: "schoolName",
          label: "School/Daycare Name",
          type: "text",
          required: false,
          section: "School Information",
        },
        {
          name: "gradeLevel",
          label: "Current Grade Level",
          type: "select",
          options: [
            "Pre-K",
            "Kindergarten",
            "1st Grade",
            "2nd Grade",
            "3rd Grade",
            "4th Grade",
            "5th Grade",
            "6th Grade",
            "7th Grade",
            "8th Grade",
            "9th Grade",
            "10th Grade",
            "11th Grade",
            "12th Grade",
            "Not in School",
          ],
          required: false,
          section: "School Information",
        },
        {
          name: "teacherName",
          label: "Teacher's Name",
          type: "text",
          required: false,
          section: "School Information",
        },
        {
          name: "schoolPerformance",
          label: "Academic Performance",
          type: "select",
          options: [
            "Excellent",
            "Above Average",
            "Average",
            "Below Average",
            "Poor",
            "Unknown",
          ],
          required: false,
          section: "School Information",
        },
        {
          name: "schoolConcerns",
          label: "School-Related Concerns",
          type: "textarea",
          required: false,
          section: "School Information",
          placeholder:
            "Describe any academic, behavioral, or social concerns at school",
        },

        // Medical Information
        {
          name: "pediatricianName",
          label: "Pediatrician/Primary Care Doctor",
          type: "text",
          required: false,
          section: "Medical Information",
        },
        {
          name: "pediatricianPhone",
          label: "Pediatrician Phone Number",
          type: "tel",
          required: false,
          section: "Medical Information",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          placeholder: "123-456-7890",
        },
        {
          name: "currentMedications",
          label: "Current Medications",
          type: "textarea",
          required: false,
          section: "Medical Information",
          placeholder: "List all current medications, dosages, and frequency",
        },
        {
          name: "allergies",
          label: "Known Allergies",
          type: "textarea",
          required: false,
          section: "Medical Information",
          placeholder:
            "List any known allergies to medications, foods, or environmental factors",
        },
        {
          name: "medicalHistory",
          label: "Significant Medical History",
          type: "textarea",
          required: false,
          section: "Medical Information",
          placeholder: "Include surgeries, chronic conditions, major illnesses",
        },
        {
          name: "hospitalizations",
          label: "Previous Hospitalizations",
          type: "textarea",
          required: false,
          section: "Medical Information",
          placeholder:
            "List dates, reasons, and duration of any hospitalizations",
        },

        // Developmental History
        {
          name: "birthComplications",
          label: "Birth Complications",
          type: "textarea",
          required: false,
          section: "Developmental History",
          placeholder:
            "Describe any complications during pregnancy, labor, or delivery",
        },
        {
          name: "developmentalMilestones",
          label: "Developmental Milestones (Walking, Talking, etc.)",
          type: "textarea",
          required: false,
          section: "Developmental History",
          placeholder: "Include ages when child reached major milestones",
        },
        {
          name: "speechDevelopment",
          label: "Speech and Language Development",
          type: "textarea",
          required: false,
          section: "Developmental History",
          placeholder: "Describe language acquisition, any delays or concerns",
        },
        {
          name: "motorSkills",
          label: "Motor Skills Development",
          type: "textarea",
          required: false,
          section: "Developmental History",
          placeholder: "Describe fine and gross motor skill development",
        },
        {
          name: "socialDevelopment",
          label: "Social Development",
          type: "textarea",
          required: false,
          section: "Developmental History",
          placeholder:
            "Describe social interactions, play skills, relationship formation",
        },

        // Mental Health & Behavioral Information
        {
          name: "presentingConcerns",
          label: "Primary Concerns/Reason for Referral",
          type: "textarea",
          required: true,
          section: "Mental Health & Behavioral",
          placeholder: "Describe the main reasons for seeking treatment",
        },
        {
          name: "symptomOnset",
          label: "When did symptoms/concerns first appear?",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder: "Include timeframe and any triggering events",
        },
        {
          name: "symptomTriggers",
          label: "Known Triggers for Symptoms",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder:
            "List situations, events, or factors that worsen symptoms",
        },
        {
          name: "behavioralConcerns",
          label: "Specific Behavioral Concerns",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder:
            "Describe problematic behaviors, frequency, and intensity",
        },
        {
          name: "moodConcerns",
          label: "Mood-Related Concerns",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder:
            "Describe mood changes, emotional regulation difficulties",
        },
        {
          name: "sleepPatterns",
          label: "Sleep Patterns and Issues",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder: "Include bedtime routine, sleep quality, duration",
        },
        {
          name: "eatingPatterns",
          label: "Eating Patterns and Issues",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder: "Describe appetite, eating habits, any concerns",
        },
        {
          name: "socialInteraction",
          label: "Social Interaction and Friendships",
          type: "textarea",
          required: false,
          section: "Mental Health & Behavioral",
          placeholder:
            "Describe peer relationships, social skills, interactions",
        },

        // Family History
        {
          name: "familyMentalHealth",
          label: "Family Mental Health History",
          type: "textarea",
          required: false,
          section: "Family History",
          placeholder: "Include any family history of mental health conditions",
        },
        {
          name: "familySubstanceUse",
          label: "Family Substance Use History",
          type: "textarea",
          required: false,
          section: "Family History",
          placeholder: "Include any family history of substance use disorders",
        },
        {
          name: "familyDynamics",
          label: "Family Dynamics and Structure",
          type: "textarea",
          required: false,
          section: "Family History",
          placeholder:
            "Describe family relationships, communication patterns, roles",
        },
        {
          name: "parentalRelationship",
          label: "Parental Relationship Status",
          type: "select",
          options: [
            "Married",
            "Divorced",
            "Separated",
            "Single Parent",
            "Cohabiting",
            "Other",
          ],
          required: false,
          section: "Family History",
        },
        {
          name: "siblings",
          label: "Siblings (Names and Ages)",
          type: "textarea",
          required: false,
          section: "Family History",
          placeholder: "List siblings' names, ages, and relationships",
        },

        // Previous Treatment
        {
          name: "previousTherapy",
          label: "Previous Mental Health Treatment",
          type: "textarea",
          required: false,
          section: "Previous Treatment",
          placeholder: "Include dates, providers, types of treatment, outcomes",
        },
        {
          name: "previousProviders",
          label: "Previous Healthcare Providers",
          type: "textarea",
          required: false,
          section: "Previous Treatment",
          placeholder:
            "List relevant healthcare providers and contact information",
        },
        {
          name: "treatmentResponse",
          label: "Response to Previous Treatment",
          type: "textarea",
          required: false,
          section: "Previous Treatment",
          placeholder: "Describe effectiveness of previous interventions",
        },

        // Current Support & Resources
        {
          name: "supportSystems",
          label: "Current Support Systems",
          type: "textarea",
          required: false,
          section: "Support & Resources",
          placeholder: "Include family, friends, community resources, services",
        },
        {
          name: "extracurriculars",
          label: "Extracurricular Activities/Hobbies",
          type: "textarea",
          required: false,
          section: "Support & Resources",
          placeholder: "List activities, sports, hobbies, interests",
        },
        {
          name: "strengths",
          label: "Child's Strengths and Interests",
          type: "textarea",
          required: false,
          section: "Support & Resources",
          placeholder:
            "Describe child's positive qualities, talents, interests",
        },

        // Treatment Goals
        {
          name: "treatmentGoals",
          label: "Treatment Goals and Expectations",
          type: "textarea",
          required: true,
          section: "Treatment Goals",
          placeholder: "Describe what you hope to achieve through treatment",
        },
        {
          name: "parentGoals",
          label: "Parent/Guardian Goals for Treatment",
          type: "textarea",
          required: false,
          section: "Treatment Goals",
          placeholder:
            "Describe specific goals parents/guardians have for treatment",
        },
        {
          name: "priorityConcerns",
          label: "Priority Concerns to Address First",
          type: "textarea",
          required: false,
          section: "Treatment Goals",
          placeholder: "List the most important issues to address initially",
        },

        // Additional Information
        {
          name: "referralSource",
          label: "Referral Source",
          type: "text",
          required: false,
          section: "Additional Information",
          placeholder: "Who referred you to this service?",
        },
        {
          name: "insurance",
          label: "Insurance Information",
          type: "text",
          required: false,
          section: "Additional Information",
          placeholder: "Insurance provider and policy information",
        },
        {
          name: "additionalInfo",
          label: "Additional Information",
          type: "textarea",
          required: false,
          section: "Additional Information",
          placeholder: "Any other relevant information you'd like to share",
        },
      ],
    },
    {
      id: "consent-form",
      title: "Consent Form",
      description: "acknowledgement form for clients",
      icon: Baby,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      fields: [
        {
          name: "patient name",
          label: "Patient Name",
          type: "text",
          required: true,
          section: "personal information",
        },
         {
          name: "age",
          label: "Age",
          type: "number",
          required: true,
          section: "personal information",
        },
         {
          name: "contact number",
          label: "Contact Number",
          type: "tel",
          required: true,
          section: "personal information",
        },
         {
          name: "address",
          label: "Address",
          type: "text",
          required: true,
          section: "personal information",
        },
         {
          name: "date",
          label: "Date",
          type: "date",
          required: true,
          section: "personal information",
          showText:true,
        },
         {
          name: "signature",
          label: "Guardian/Parent Signature (if applicable)",
          type: "text",
          required: true,
          section: "personal information",
        },
         {
          name: "professional's-Name",
          label: "Professional's Name",
          type: "text",
          required: true,
          section: "personal information",
        },
         {
          name: "designation",
          label: "Designation",
          type: "text",
          required: true,
          section: "personal information",
        },
      ]
    }
  ];

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginPrompt(true);
      setIsLoading(false);
      return;
    }
    setShowLoginPrompt(false);
    setIsLoading(false);
  }, []);

  // Toggle section expansion
  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  // Initialize all sections as expanded
 useEffect(() => {
  if (formType) {
    const selected = formTypes.find((t) => t.id === formType);
    setSelectedFormType(selected);
    if (selected) {
      const sections = [...new Set(selected.fields.map(field => field.section))];
      const initialExpanded = {};
      sections.forEach(section => {
        initialExpanded[section] = true;
      });
      setExpandedSections(initialExpanded);
    }
  }
}, [formType]);

  const LoginPromptModal = () => {
    if (!showLoginPrompt) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-100 transform animate-fade-in-up">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
              <Lock className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Authentication Required
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Please log in to access client forms and manage assessments securely.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => navigate("/login", { replace: true })}
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Sign In
                </span>
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="w-full px-6 py-4 border-2 border-gray-200 hover:border-emerald-400 text-gray-700 hover:text-emerald-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-emerald-50"
              >
                <span className="flex items-center justify-center gap-2">
                  <User className="w-5 h-5" />
                  Create Account
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Form type selector component
  const FormTypeSelector = () => (
    <div className="mb-8 animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-emerald-500" />
              Choose Form Type
            </h2>
            <p className="text-gray-600 text-base mt-2 leading-relaxed">
              Select the appropriate form for your client assessment
            </p>
          </div>
          <button
            onClick={() => setShowFormTypes(!showFormTypes)}
            className="p-3 text-gray-500 hover:text-emerald-500 rounded-xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110"
          >
            {showFormTypes ? 
              <ChevronUp className="w-6 h-6" /> : 
              <ChevronDown className="w-6 h-6" />
            }
          </button>
        </div>

        {showFormTypes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {formTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => {
                    setFormType(type.id);
                    setShowFormTypes(false);
                    setFormData({});
                  }}
                  className={`group p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-xl transform hover:scale-105 animate-fade-in-up ${
                    formType === type.id
                      ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-lg"
                      : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${type.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors text-lg">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {type.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                          {type.fields.length} fields
                        </div>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {formType && (
          <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <p className="text-emerald-700 font-semibold">
                  Selected: {formTypes.find((t) => t.id === formType)?.title}
                </p>
              </div>
              <button
                onClick={() => {
                  setFormType("");
                  setShowFormTypes(true);
                }}
                className="text-emerald-600 hover:text-emerald-800 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-100 transition-all duration-200"
              >
                Change
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Dynamic form renderer
  const DynamicFormRenderer = () => {
     if (!selectedFormType || !selectedFormType.fields) return null;
         console.log(selectedFormType);
    if (!selectedFormType) return null;

    const handleInputChange = (fieldName, value) => {
      console.log(value);
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    };

    const handleSubmit = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please log in to submit the form");
          return;
        }

        // Validate required fields
        const requiredFields = selectedFormType.fields.filter(
          (field) => field.required
        );

        for (const field of requiredFields) {
          if (
            !formData[field.name] ||
            formData[field.name].toString().trim() === ""
          ) {
            alert(`Please fill in the required field: ${field.label}`);
            return;
          }
        } 
        console.log(formData);
        console.log(clientId);
        const response = await fetch(`http://localhost:5000/api/forms`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            data:formData,
            clientId: clientId,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert("Form submitted successfully!");
          console.log("Form submitted:", result);

          setFormData({});
          setFormType("");
          setShowFormTypes(true);
          loadExistingForms();
        } else {
          const error = await response.json();
          alert(`Error submitting form: ${error.message || "Form submission failed"}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
      }
    };

    const IconComponent = selectedFormType.icon;

    // Group fields by section
    const fieldsBySection = selectedFormType.fields.reduce((acc, field) => {
      if (!acc[field.section]) {
        acc[field.section] = [];
      }
      acc[field.section].push(field);
      return acc;
    }, {});

    const handleDeleteField = (labelToDelete) => {
      setSelectedFormType(prev => ({
        ...prev,
        fields: prev.fields.filter(field => field.label !== labelToDelete)
      }));
    };
   
   const handleAddField = () => {
      if (!newField.name || !newField.label || !newField.type) {
        alert("Please fill all fields");
        return;
      }

      const fieldWithSection = {
        ...newField,
        section: newField.section || selectedFormType.fields[0]?.section || "General Information"
      };

      setSelectedFormType(prev => ({
        ...prev,
        fields: [...prev.fields, fieldWithSection]
      }));

      setNewField({
        name: '',
        label: '',
        type: '',
        required: false,
        section: ''
      });
      setShowForm(false);
   };

    // Consent text component
     const showAddForm = () => {
  return (
    <div className="space-y-6 p-8 border-2 border-dashed border-emerald-300 rounded-2xl shadow-lg bg-gradient-to-br from-emerald-50 to-green-50 max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Add New Field</h3>
        <p className="text-gray-600 text-sm">Customize your form by adding additional fields</p>
      </div>

      {/* Name Field */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Field Name
        </label>
        <input
          type="text"
          value={newField.name}
          onChange={(e) => setNewField({ ...newField, name: e.target.value })}
          placeholder="Enter field name"
          className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white shadow-sm"
        />
      </div>

      {/* Label Field */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <Pencil className="w-4 h-4" />
          Field Label
        </label>
        <input
          type="text"
          value={newField.label}
          onChange={(e) => setNewField({ ...newField, label: e.target.value })}
          placeholder="Enter field label"
          className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white shadow-sm"
        />
      </div>

      {/* Type Field */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <Grid3X3 className="w-4 h-4" />
          Field Type
        </label>
        <select
          value={newField.type}
          onChange={(e) => setNewField({ ...newField, type: e.target.value })}
          className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white shadow-sm"
        >
          <option value="">Select Type</option>
          <option value="select">Select</option>
          <option value="input">Input</option>
          <option value="textarea">Textarea</option>
        </select>
      </div>

      {/* Required Checkbox */}
      <div className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-200">
        <input
          type="checkbox"
          checked={newField.required}
          onChange={(e) =>
            setNewField({ ...newField, required: e.target.checked })
          }
          id="requiredField"
          className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-all duration-200"
        />
        <label htmlFor="requiredField" className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Required Field
        </label>
      </div>

      {/* Save Button */}
      <button
        onClick={handleAddField}
        className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
      >
        <span className="flex items-center justify-center gap-2">
          <Save className="w-5 h-5" />
          Save Field
        </span>
      </button>
    </div>
  );
};

    const ConsentText = () => (
      <div className="w-full mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 animate-fade-in">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-500" />
            Informed Consent
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            I hereby give my informed consent for the following:
          </p>
          
          <div className="space-y-6">
            {[
              {
                title: "Use of Information:",
                content: "I consent to the collection and use of my personal and medical information for assessment, diagnosis, and treatment."
              },
              {
                title: "Administration of Treatment:",
                content: "I understand and consent to receiving the recommended treatment based on my diagnosis and medical condition."
              },
              {
                title: "Sharing of Information:",
                content: "I consent to sharing my information with relevant healthcare professionals for collaborative treatment."
              },
              {
                title: "Referral or Transfer:",
                content: "I understand my case may be referred to another professional if deemed necessary."
              },
              {
                title: "Treatment Outcome:",
                content: "I acknowledge that treatment outcomes cannot be guaranteed."
              },
              {
                title: "Family Contact:",
                content: "I consent to family members being contacted for verification if necessary."
              },
              {
                title: "Clinical Diagnosis:",
                content: "I understand that clinical diagnosis will be based on professional assessment."
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-8 font-medium border-t pt-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200">
            <strong>Declaration:</strong> I have read and understood the above information and provide my voluntary consent.
          </p>
        </div>
      </div>
    );

    return (
      <div className="mb-8 animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex justify-end mb-6">
             <button 
               className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
               onClick={()=>{setIsEdit(!isEdit);setShowForm(false)}}
             >
               <span className="flex items-center gap-2">
                 {isEdit ? <CheckCircle className="w-5 h-5" /> : <Pencil className="w-5 h-5" />}
                 {isEdit ? "Done Editing" : "Edit Form"}
               </span>
             </button>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className={`p-4 bg-gradient-to-r ${selectedFormType.color} rounded-2xl shadow-lg`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedFormType.title}
                </h2>
                <p className="text-gray-600 text-lg mt-1">
                  {selectedFormType.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setFormType("");
                setShowFormTypes(true);
                setFormData({});
              }}
              className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Sections */}
          <div className="space-y-8">
            {Object.entries(fieldsBySection).map(([sectionName, sectionFields], sectionIndex) => (
              <div key={sectionName} className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                <button
                  onClick={() => toggleSection(sectionName)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 bg-gradient-to-r from-gray-50 to-gray-100"
                >
                  <h3 className="font-bold text-gray-800 text-lg flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{sectionIndex + 1}</span>
                    </div>
                    {sectionName}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {sectionFields.length} fields
                    </span>
                    {expandedSections[sectionName] ? 
                      <ChevronUp className="w-6 h-6 text-gray-500 transform rotate-0 transition-transform duration-300" /> : 
                      <ChevronDown className="w-6 h-6 text-gray-500 transform rotate-0 transition-transform duration-300" />
                    }
                  </div>
                </button>
                
                {expandedSections[sectionName] && (
                  <div className="p-8 border-t border-gray-200 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sectionFields.map((field, fieldIndex) => (
                        <div
                          key={field.name}
                          className={`${
                            field.type === "textarea" || (field.type === "date" && field.fullWidthText) 
                              ? "md:col-span-2" 
                              : ""
                          } animate-fade-in-up`}
                          style={{ animationDelay: `${fieldIndex * 0.05}s` }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1 font-bold">*</span>}
                            </span>
                            {isEdit && (
                              <button
                                onClick={() => handleDeleteField(field.label)} 
                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                              >
                                <Trash className="w-4 h-4" />
                              </button>
                            )}
                          </label>
                          
                          {/* Field rendering based on type */}
                          {field.type === "date" && field.fullWidthText ? (
                            <div className="space-y-6">
                              <input
                                type={field.type}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                                required={field.required}
                              />
                              {field.showText && <ConsentText />}
                            </div>
                          ) : field.type === "textarea" ? (
                            <textarea
                              value={formData[field.name] || ""}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 bg-white resize-none shadow-sm hover:shadow-md"
                              rows="4"
                              placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                              required={field.required}
                            />
                          ) : field.type === "select" ? (
                            <select
                              value={formData[field.name] || ""}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                              required={field.required}
                            >
                              <option value="">Select {field.label.toLowerCase()}</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              value={formData[field.name] || ""}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                              placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                              required={field.required}
                              min={field.min}
                              max={field.max}
                              pattern={field.pattern}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    {showForm && (
                      <div className="mt-8">
                        {showAddForm()}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-8 mt-8 border-t border-gray-200">
            {isEdit && (
              <button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                onClick={()=>setShowForm(!showForm)}
              >
                <span className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  {showForm ? "Cancel" : "Add Field"}
                </span>
              </button>
            )}
            <button
              onClick={handleSubmit}
              className={`px-8 py-4 bg-gradient-to-r ${selectedFormType.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <span className="flex items-center gap-2">
                <Save className="w-5 h-5" />
                Submit Form
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const loadExistingForms = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setIsLoading(false);
        setShowLoginPrompt(true);
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/intake-forms?clientId=${clientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setForms(data.data.forms || []);
      } else if (response.status === 401 || response.status === 403) {
        setShowLoginPrompt(true);
      }
    } catch (error) {
      console.error("Error loading forms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!showLoginPrompt && clientId) {
      loadExistingForms();
    } else {
      setIsLoading(false);
    }
  }, [showLoginPrompt, clientId]);

  useEffect(() => {
    if (!showLoginPrompt) {
      setTimeout(() => setIsFormVisible(true), 100);
    }
  }, [showLoginPrompt]);

  const ExistingFormsList = () => {
    if (!forms || forms.length === 0) {
      return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center animate-fade-in-up">
          <div className="text-gray-400 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">No Forms Yet</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            No forms have been submitted for this client. Create a new form to get started and begin building their profile.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 rounded-xl font-medium">
            <Sparkles className="w-5 h-5" />
            Ready to create your first form?
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <FileText className="w-7 h-7 text-emerald-500" />
              Existing Forms
            </h2>
            <p className="text-gray-600 mt-2">Review previously submitted forms for this client</p>
          </div>
          <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl font-semibold">
            {forms.length} form{forms.length !== 1 ? 's' : ''}
          </div>
        </div>
        
        <div className="space-y-4">
          {forms.map((form, index) => (
            <div
              key={form.id}
              className="p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {form.childName || form.patientName || "Unnamed Form"}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 ml-13">
                    {form.age && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Age: {form.age}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Submitted: {new Date(form.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span className={`px-4 py-2 text-sm font-semibold rounded-xl ${
                  form.status === "draft" ? "bg-gray-100 text-gray-600" :
                  form.status === "submitted" ? "bg-blue-100 text-blue-600" :
                  form.status === "reviewed" ? "bg-yellow-100 text-yellow-600" :
                  "bg-green-100 text-green-600"
                }`}>
                  {form.status?.charAt(0).toUpperCase() + form.status?.slice(1) || "Submitted"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <Sidebar />
        <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-80'} p-6`}>
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mx-auto mb-6"></div>
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading Forms</h3>
              <p className="text-gray-600">Please wait while we fetch your data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <div className={showLoginPrompt ? "blur-sm pointer-events-none" : ""}>
        <Sidebar />
        <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-80'} p-6`}>
          <div className="mb-6">
            <Navbar clientId={clientId} />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className={`transform transition-all duration-500 ${
              isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {/* Form Type Selector */}
              <FormTypeSelector />

              {/* Dynamic Form Renderer */}
              {formType && <DynamicFormRenderer />}

              {/* Existing Forms List */}
              {!formType && <ExistingFormsList />}
            </div>
          </div>
        </div>
      </div>

      <LoginPromptModal />
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Forms;
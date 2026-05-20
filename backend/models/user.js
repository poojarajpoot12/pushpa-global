const mongoose = require('mongoose');

const UserRegistrationSchema = new mongoose.Schema({
  // --- COMMON FIELDS ---
 role: {
  type: String,
  required: [true, 'Role is required'],
  lowercase: true, // 🔥 Yeh har string ko save aur check karne se pehle lowercase kar dega
  trim: true,
  enum: ['student', 'principal', 'teacher', 'career counselling', 'coaching partner', 'admin']
},
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  city: {
    type: String,
    trim: true,
    default: ''
  },
  state: {
    type: String,
    trim: true,
    default: ''
  },

  // --- DYNAMIC PROFILE FIELDS (Based on Role) ---
  dynamicProfile: {
    studentFields: {
      currentQualification: { type: String, trim: true },
      interestedCourse: { type: String, trim: true },
      preferredCountry: { type: String, trim: true },
      budgetRange: { type: String, trim: true },
      studyTimeline: { type: String, trim: true }
    },
    principalFields: {
      schoolName: { type: String, trim: true },
      board: { 
        type: String, 
        enum: ['CBSE', 'ICSE', 'IB', 'IGCSE', 'State Board', 'Select Board', ''] 
      },
      totalStudents: { type: Number },
      interestedIn: {
        careerCounselling: { type: Boolean, default: false },
        universityCollaboration: { type: Boolean, default: false }
      }
    },
    teacherFields: {
      currentOrganization: { type: String, trim: true },
      subjectTaught: { type: String, trim: true },
      yearsOfExperience: { type: String, trim: true }, 
      preferredLocation: { type: String, trim: true }
    },
    counsellorFields: {
      organizationName: { type: String, trim: true },
      yearsOfExperience: { type: String, trim: true },
      studentVolumeMonthly: { type: Number }
    },
    coachingFields: {
      instituteName: { type: String, trim: true },
      coursesOffered: { 
        type: String, 
        enum: ['NIFT / NIT', 'JEE / NEET', 'Courses Offered', ''] 
      },
      numberOfStudents: { type: Number }
    }
  },

  // --- ADDITIONAL FIELDS ---
  uploadedDocumentUrl: {
    type: String, 
    default: ''
  },
  message: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true 
});

// Exporting as 'User' to match authController import
module.exports = mongoose.model('User', UserRegistrationSchema);
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/FadeIn';
import { CheckCircle2, FileText, Upload, LayoutDashboard } from 'lucide-react';

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Comprehensive data for all property services
  const serviceData = {
    'e-khata': {
      title: 'E-Khata & Khata Transfer',
      originalPrice: '₹7,500',
      discountedPrice: '₹3,500*',
      overview: 'E-Khata is the digital form of a Khata certificate in Karnataka. It proves property ownership, enables easy tax payments, and simplifies approvals for property transactions. Elevate ensures your E-Khata process is smooth, accurate, and stress-free.',
      useCases: ['Buy Property', 'Sell Property', 'Loan/Mortgage', 'Property Tax'],
      process: [
        {
          title: 'Gather Your Documents',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Aadhaar card of the owners', 'Sale deed', 'Bescom Bill', 'Property Tax Receipt', 'Khata Certificate']
        },
        {
          title: 'Submit Application',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Track Progress',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'property-due-diligence': {
      title: 'Property Due Diligence',
      originalPrice: '₹10,000',
      discountedPrice: '₹5,000*',
      overview: 'Comprehensive property verification and legal background checks to ensure the property is clear of any hidden loans, encumbrances, or legal disputes before you invest.',
      useCases: ['Pre-Purchase Background Check', 'Property Investment', 'Secure Loan Approval'],
      process: [
        {
          title: 'Provide Property Details',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Property Documents (Copies)', 'Seller Details', 'Location Info']
        },
        {
          title: 'Legal Background Verification',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Final Report Delivery',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'legal-consultation': {
      title: 'Legal Consultation',
      originalPrice: '₹5,000',
      discountedPrice: '₹2,500*',
      overview: 'Get verified legal support from trusted property lawyers equipped with local expertise and reliable counsel to resolve property-related legal queries and disputes.',
      useCases: ['Dispute Resolution', 'Contract Review', 'Legal Queries', 'Property Advisory'],
      process: [
        {
          title: 'Book an Appointment',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Brief summary of legal issue', 'Any relevant documents']
        },
        {
          title: 'Lawyer Allocation',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Consultation Session',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'deed-drafting-modt': {
      title: 'Deed Drafting & MODT',
      originalPrice: '₹8,000',
      discountedPrice: '₹4,000*',
      overview: 'Professional drafting of Sale Deeds, Lease Agreements, Memorandums of Understanding (MOUs), and Memorandum of Deposit of Title Deeds (MODT) Cancellations.',
      useCases: ['Sale Agreements', 'Lease Agreements', 'Loan Closures (MODT Release)'],
      process: [
        {
          title: 'Share Requirements',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Party Details', 'Property Index/Khata', 'Terms of Agreement']
        },
        {
          title: 'Draft Preparation',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Review & Finalization',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'utility-name-changes': {
      title: 'Utility Name Changes',
      originalPrice: '₹4,000',
      discountedPrice: '₹2,000*',
      overview: 'Hassle-free support for BESCOM (electricity) name change, property tax name change, and Gruh Jyoti registration to keep your utility bills perfectly aligned with property ownership.',
      useCases: ['Post-Purchase Update', 'Inheritance Name Change', 'Tax Record Update'],
      process: [
        {
          title: 'Gather Documents',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Aadhaar Card', 'Sale Deed / Title Deed', 'Recent Utility Bill', 'Tax Receipt']
        },
        {
          title: 'Application Submission',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Name Update Confirmation',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'encumbrance-certificate': {
      title: 'Encumbrance Certificate (EC)',
      originalPrice: '₹2,000',
      discountedPrice: '₹1,000*',
      overview: 'Procure official Encumbrance Certificate (EC) forms ensuring your property is free from legal or monetary liabilities. This is a crucial document for property purchase and loans.',
      useCases: ['Property Valuation', 'Home Loan Application', 'Property Sale'],
      process: [
        {
          title: 'Submit Details',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Property Schedule', 'Previous EC (if any)', 'Sale Deed copy']
        },
        {
          title: 'Sub-Registrar Processing',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'EC Issuance',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'property-registration': {
      title: 'Property Registration',
      originalPrice: '₹15,000',
      discountedPrice: '₹7,500*',
      overview: 'End-to-end support for the Registry of Property and smooth Property Conveyancing. We simplify the entire sub-registrar process, saving you time and hassle.',
      useCases: ['New Property Purchase', 'Gift Deed Registration', 'Relinquishment Deed'],
      process: [
        {
          title: 'Document Verification',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Original Title Deeds', 'ID Proofs', 'Khata', 'Tax Receipts', 'EC']
        },
        {
          title: 'Stamp Duty Payment',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Sub-Registrar Visit',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    },
    'family-tree-verification': {
      title: 'Family Tree Verification',
      originalPrice: '₹6,000',
      discountedPrice: '₹3,000*',
      overview: 'Official generation and certification of Family Tree documents required for property inheritance, succession planning, and legal transfer of property among legal heirs.',
      useCases: ['Inheritance of Property', 'Khata Transfer to Heirs', 'Legal Succession'],
      process: [
        {
          title: 'Collect Family Details',
          icon: <FileText className="w-6 h-6 text-white" />,
          documents: ['Death Certificate of Owner', 'ID Proofs of Heirs', 'Relationship Proofs']
        },
        {
          title: 'Revenue Office Processing',
          icon: <Upload className="w-6 h-6 text-white" />,
          documents: []
        },
        {
          title: 'Certificate Generation',
          icon: <LayoutDashboard className="w-6 h-6 text-white" />,
          documents: []
        }
      ]
    }
  };

  // Fallback if id not found (defaulting to e-khata)
  const data = serviceData[id] || serviceData['e-khata'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:5001/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          serviceId: id,
          serviceName: data.title
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setSubmitStatus({ type: 'success', message: 'Application submitted successfully! Our experts will contact you soon.' });
      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-8">
                <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900">
                  {data.title}
                </h1>
                <div className="text-right flex items-center md:items-end gap-3 md:flex-col md:gap-0">
                  <span className="text-lg text-slate-400 line-through decoration-slate-400/50">{data.originalPrice}</span>
                  <span className="text-3xl font-bold text-slate-900">{data.discountedPrice}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-2xl font-outfit font-bold text-slate-900">Overview</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {data.overview}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-2xl font-outfit font-bold text-slate-900">Use Cases</h2>
                <div className="flex flex-wrap gap-3">
                  {data.useCases.map((useCase, index) => (
                    <span 
                      key={index}
                      className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium text-sm shadow-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-2xl font-outfit font-bold text-slate-900">Documents Required & Process</h2>
                
                <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pb-4">
                  {data.process.map((step, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20">
                        {step.icon}
                      </div>
                      
                      <div className="pt-2">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        
                        {step.documents && step.documents.length > 0 && (
                          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                            <div className="flex flex-wrap gap-3">
                              {step.documents.map((doc, docIndex) => (
                                <span 
                                  key={docIndex}
                                  className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 text-sm font-medium"
                                >
                                  {doc}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Sticky Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <FadeIn delay={0.4} direction="up">
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                  <div className="p-8 pb-6 text-center border-b border-slate-50">
                    <h3 className="text-2xl font-outfit font-bold text-slate-900 mb-6">
                      Apply for {data.title} now
                    </h3>
                    
                    <div className="bg-green-50/80 border border-green-100 rounded-xl p-3 flex items-center gap-3 text-left">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-green-800 text-sm font-medium">
                        Our experts will contact you within 24 hours!
                      </span>
                    </div>
                  </div>

                  <div className="p-8 pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your full name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">Phone no.</label>
                        <div className="flex items-center">
                          <div className="flex items-center gap-2 border-b-2 border-slate-200 py-3 pr-4 bg-transparent cursor-pointer">
                            <span className="text-xl">🇮🇳</span>
                            <span className="text-slate-400 text-xs">▼</span>
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your mobile number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-transparent border-b-2 border-slate-200 py-3 pl-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>

                      {submitStatus && (
                        <div className={`p-3 rounded-lg text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                          {submitStatus.message}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-slate-900 hover:bg-amber-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md transform mt-4 flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1'}`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </form>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

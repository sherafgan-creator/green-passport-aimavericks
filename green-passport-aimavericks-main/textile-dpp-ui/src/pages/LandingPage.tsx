import { useNavigate } from 'react-router-dom';
import { Leaf, Shield, Package, TrendingUp, Globe, CheckCircle, Users, Scan } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-white to-leaf-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-leaf-600 rounded-2xl flex items-center justify-center shadow-soft-lg">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-sand-900 mb-6">
            Green Passport
          </h1>
          <p className="text-2xl text-sand-700 mb-4">
            Digital Product Passport for Sustainable Textiles
          </p>
          <p className="text-lg text-sand-600 max-w-3xl mx-auto mb-12">
            Empowering transparency and trust in the textile industry through verified sustainability data, 
            carbon footprint tracking, and digital product passports.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <button
                onClick={() => navigate('/auth/manufacturer')}
                className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Package className="w-6 h-6 inline-block mr-2" />
                Manufacturer Login
              </button>
              <p className="text-sm text-sand-500 mt-2">Create & manage product passports</p>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/auth/auditor')}
                className="btn-secondary text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Shield className="w-6 h-6 inline-block mr-2" />
                Auditor Login
              </button>
              <p className="text-sm text-sand-500 mt-2">Review & approve products</p>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/consumer')}
                className="bg-leaf-600 hover:bg-leaf-700 text-white font-medium text-lg px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Scan className="w-6 h-6 inline-block mr-2" />
                Consumer Portal
              </button>
              <p className="text-sm text-sand-500 mt-2">Verify product sustainability</p>
            </div>
          </div>
        </div>

        {/* What is Green Passport */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="card bg-gradient-to-br from-forest-600 to-leaf-600 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What is Green Passport?</h2>
              <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
                Green Passport is a comprehensive Digital Product Passport (DPP) platform that enables textile 
                manufacturers to create transparent, verifiable sustainability records for their products, while 
                empowering consumers to make informed, eco-conscious purchasing decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Data</h3>
                <p className="text-white text-opacity-80">
                  AI-powered verification ensures all sustainability claims are backed by evidence
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Carbon Tracking</h3>
                <p className="text-white text-opacity-80">
                  Complete lifecycle carbon footprint calculation from production to end-of-life
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-semibold mb-2">EU Compliant</h3>
                <p className="text-white text-opacity-80">
                  Meets EU Digital Product Passport and Environmental Product Declaration requirements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For Manufacturers */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 rounded-xl mb-4">
              <Package className="w-8 h-8 text-forest-600" />
            </div>
            <h2 className="text-4xl font-bold text-sand-900 mb-4">For Manufacturers</h2>
            <p className="text-lg text-sand-600 max-w-2xl mx-auto">
              Create comprehensive digital product passports, track sustainability metrics, and build consumer trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Product Passport Creation</h3>
                  <p className="text-sand-600">
                    Create detailed digital passports with material composition, manufacturing data, and sustainability claims
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-leaf-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Carbon Footprint Tracking</h3>
                  <p className="text-sand-600">
                    Calculate and track carbon emissions across all lifecycle stages with AI-powered predictions
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-earth-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Batch QR Generation</h3>
                  <p className="text-sand-600">
                    Generate thousands of unique QR codes for product serialization and traceability
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">AI Verification</h3>
                  <p className="text-sand-600">
                    Automated document analysis and claim verification using Amazon Bedrock and Textract
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Auditors */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-100 rounded-xl mb-4">
              <Shield className="w-8 h-8 text-earth-600" />
            </div>
            <h2 className="text-4xl font-bold text-sand-900 mb-4">For Auditors</h2>
            <p className="text-lg text-sand-600 max-w-2xl mx-auto">
              Review and verify product sustainability claims to ensure transparency and trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-earth-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Review Submissions</h3>
                  <p className="text-sand-600">
                    Review product passports submitted by manufacturers with all supporting documentation
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Verify Claims</h3>
                  <p className="text-sand-600">
                    Validate sustainability claims against uploaded evidence and industry standards
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-leaf-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-leaf-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Approve or Reject</h3>
                  <p className="text-sand-600">
                    Make informed decisions to approve compliant products or reject with detailed feedback
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-earth-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sand-900 mb-2">Track History</h3>
                  <p className="text-sand-600">
                    Maintain audit trails and track all verification decisions for compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Consumers */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-leaf-100 rounded-xl mb-4">
              <Users className="w-8 h-8 text-leaf-600" />
            </div>
            <h2 className="text-4xl font-bold text-sand-900 mb-4">For Consumers</h2>
            <p className="text-lg text-sand-600 max-w-2xl mx-auto">
              Verify product sustainability and make informed purchasing decisions - no login required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-14 h-14 bg-leaf-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Scan className="w-7 h-7 text-leaf-600" />
                </div>
                <h3 className="text-lg font-semibold text-sand-900 mb-2">Scan & Verify</h3>
                <p className="text-sand-600 text-sm">
                  Scan QR codes to instantly access verified sustainability information
                </p>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-forest-600" />
                </div>
                <h3 className="text-lg font-semibold text-sand-900 mb-2">Compare Impact</h3>
                <p className="text-sand-600 text-sm">
                  Compare products against category averages and make better choices
                </p>
              </div>
            </div>

            <div className="card hover:shadow-soft-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-earth-600" />
                </div>
                <h3 className="text-lg font-semibold text-sand-900 mb-2">Trust Badges</h3>
                <p className="text-sand-600 text-sm">
                  See third-party verification and certification status at a glance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sand-900 mb-4">Why Choose Green Passport?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-1">Regulatory Compliance</h3>
                <p className="text-sand-600">Meet EU DPP requirements and stay ahead of environmental regulations</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-leaf-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-leaf-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-1">Build Consumer Trust</h3>
                <p className="text-sand-600">Transparent, verified data builds confidence and brand loyalty</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-earth-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-1">Reduce Environmental Impact</h3>
                <p className="text-sand-600">Track and optimize your carbon footprint across the product lifecycle</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-1">AI-Powered Insights</h3>
                <p className="text-sand-600">Get recommendations and predictions using advanced AI technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="card bg-gradient-to-br from-sand-50 to-forest-50 border-forest-200 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-sand-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-sand-700 mb-8">
              Join the sustainable textile revolution today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/auth/manufacturer')}
                className="btn-primary text-lg px-8 py-3"
              >
                Manufacturer Sign Up
              </button>
              <button
                onClick={() => navigate('/auth/auditor')}
                className="btn-secondary text-lg px-8 py-3"
              >
                Auditor Sign Up
              </button>
              <button
                onClick={() => navigate('/consumer')}
                className="bg-leaf-600 hover:bg-leaf-700 text-white font-medium text-lg px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Consumer Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sand-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6" />
            <span className="text-lg font-semibold">Green Passport</span>
          </div>
          <p className="text-sand-400 text-sm">
            © 2026 Green Passport. Building a sustainable future for textiles.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

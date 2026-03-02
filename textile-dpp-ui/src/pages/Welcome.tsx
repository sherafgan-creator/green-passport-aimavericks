import { Link } from 'react-router-dom';
import { Leaf, Package, QrCode, TrendingUp, Shield, Globe } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-leaf-50 to-sand-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-leaf-600 rounded-2xl flex items-center justify-center shadow-soft-lg">
              <Leaf className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-sand-900 mb-4">
            Green Passport
          </h1>
          <p className="text-xl text-sand-700 mb-2">Digital Product Passport Platform</p>
          <p className="text-lg text-sand-600 max-w-2xl mx-auto">
            Track, verify, and communicate the environmental impact of your textile products with transparency and trust.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card hover:shadow-soft-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-semibold text-sand-900 mb-3">Product Management</h3>
            <p className="text-sand-600 mb-4">
              Create and manage digital product passports with comprehensive sustainability data and emission tracking.
            </p>
            <Link to="/dashboard" className="text-forest-600 font-medium hover:text-forest-700 transition-colors">
              Go to Dashboard →
            </Link>
          </div>

          <div className="card hover:shadow-soft-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-leaf-100 rounded-xl flex items-center justify-center mb-4">
              <QrCode className="w-8 h-8 text-leaf-600" />
            </div>
            <h3 className="text-xl font-semibold text-sand-900 mb-3">Batch Generation</h3>
            <p className="text-sand-600 mb-4">
              Generate thousands of serialized products with unique QR codes for easy tracking and verification.
            </p>
            <Link to="/generate-batch" className="text-leaf-600 font-medium hover:text-leaf-700 transition-colors">
              Generate Batch →
            </Link>
          </div>

          <div className="card hover:shadow-soft-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-earth-600" />
            </div>
            <h3 className="text-xl font-semibold text-sand-900 mb-3">Consumer Verification</h3>
            <p className="text-sand-600 mb-4">
              Enable consumers to verify product sustainability credentials and make informed purchasing decisions.
            </p>
            <Link to="/consumer" className="text-earth-600 font-medium hover:text-earth-700 transition-colors">
              Verify Product →
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="card bg-gradient-to-br from-forest-600 to-leaf-600 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Why Green Passport?</h2>
            <p className="text-white text-opacity-90 text-lg">
              Building trust through transparency and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reduce Carbon Footprint</h3>
              <p className="text-white text-opacity-80 text-sm">
                Track and optimize emissions across the entire product lifecycle
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Build Consumer Trust</h3>
              <p className="text-white text-opacity-80 text-sm">
                Third-party verification and transparent sustainability data
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Meet Compliance</h3>
              <p className="text-white text-opacity-80 text-sm">
                Align with EU DPP regulations and environmental standards
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-sand-900 mb-4">Ready to get started?</h2>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard" className="btn-primary">
              Manufacturer Portal
            </Link>
            <Link to="/consumer" className="btn-secondary">
              Consumer Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

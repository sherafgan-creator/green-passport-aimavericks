import { useState } from 'react';
import { CheckCircle, XCircle, FileText, Download, Eye } from 'lucide-react';
import { mockProducts, getSustainabilityGrade } from '../data/mockData';

const AuditorDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  const pendingProducts = mockProducts.filter(p => p.verificationStatus === 'pending');
  const approvedProducts = mockProducts.filter(p => p.verificationStatus === 'approved');
  const rejectedProducts = mockProducts.filter(p => p.verificationStatus === 'rejected');

  const handleApprove = (productId: string) => {
    console.log('Approving product:', productId);
    alert(`Product ${productId} has been approved!`);
    setSelectedProduct(null);
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }
    console.log('Rejecting product:', selectedProduct?.id, 'Reason:', rejectionReason);
    alert(`Product ${selectedProduct?.id} has been rejected!`);
    setShowRejectModal(false);
    setSelectedProduct(null);
    setRejectionReason('');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-sand-900">Auditor Dashboard</h1>
        <p className="text-sand-600 mt-1">Review and verify product sustainability claims</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Pending Review</p>
              <p className="text-3xl font-bold text-earth-600">{pendingProducts.length}</p>
            </div>
            <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-earth-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Approved</p>
              <p className="text-3xl font-bold text-forest-600">{approvedProducts.length}</p>
            </div>
            <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-forest-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-sand-600 mb-1">Rejected</p>
              <p className="text-3xl font-bold text-red-600">{rejectedProducts.length}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Pending Products */}
      <div className="card">
        <h2 className="text-xl font-semibold text-sand-900 mb-6">Pending Reviews</h2>
        {pendingProducts.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-sand-300 mx-auto mb-4" />
            <p className="text-sand-500">No pending products to review</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-sand-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Manufacturer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Score</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Documents</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-sand-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingProducts.map((product) => (
                  <tr key={product.id} className="border-b border-sand-100 hover:bg-sand-50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-sand-900">{product.name}</p>
                        <p className="text-sm text-sand-500">{product.category}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sand-700">{product.manufacturer}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-forest-600">
                          {getSustainabilityGrade(product.sustainabilityScore)}
                        </span>
                        <span className="text-sm text-sand-600">({product.sustainabilityScore})</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-sand-700">{product.documents?.length || 0} files</span>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Review Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-soft-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-sand-200">
              <h2 className="text-2xl font-bold text-sand-900">Review Product Passport</h2>
              <p className="text-sand-600 mt-1">{selectedProduct.name}</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Product Details */}
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-4">Product Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-sand-600">Product ID</p>
                    <p className="font-medium text-sand-900">{selectedProduct.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-sand-600">Category</p>
                    <p className="font-medium text-sand-900">{selectedProduct.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-sand-600">Material Type</p>
                    <p className="font-medium text-sand-900">{selectedProduct.materialType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-sand-600">Weight</p>
                    <p className="font-medium text-sand-900">{selectedProduct.weight}g</p>
                  </div>
                  <div>
                    <p className="text-sm text-sand-600">Manufacturer</p>
                    <p className="font-medium text-sand-900">{selectedProduct.manufacturer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-sand-600">Sustainability Score</p>
                    <p className="font-medium text-forest-600 text-xl">
                      {getSustainabilityGrade(selectedProduct.sustainabilityScore)} ({selectedProduct.sustainabilityScore})
                    </p>
                  </div>
                </div>
              </div>

              {/* Carbon Footprint */}
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-4">Carbon Footprint</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="card bg-sand-50">
                    <p className="text-sm text-sand-600">Manufacturing</p>
                    <p className="text-lg font-bold text-sand-900">{selectedProduct.carbonFootprint.manufacturing} kg</p>
                  </div>
                  <div className="card bg-sand-50">
                    <p className="text-sm text-sand-600">Packaging</p>
                    <p className="text-lg font-bold text-sand-900">{selectedProduct.carbonFootprint.packaging} kg</p>
                  </div>
                  <div className="card bg-sand-50">
                    <p className="text-sm text-sand-600">Transport</p>
                    <p className="text-lg font-bold text-sand-900">{selectedProduct.carbonFootprint.transport} kg</p>
                  </div>
                  <div className="card bg-sand-50">
                    <p className="text-sm text-sand-600">Usage</p>
                    <p className="text-lg font-bold text-sand-900">{selectedProduct.carbonFootprint.usage} kg</p>
                  </div>
                  <div className="card bg-sand-50">
                    <p className="text-sm text-sand-600">End of Life</p>
                    <p className="text-lg font-bold text-sand-900">{selectedProduct.carbonFootprint.endOfLife} kg</p>
                  </div>
                  <div className="card bg-forest-50 border-forest-200">
                    <p className="text-sm text-forest-700 font-medium">Total</p>
                    <p className="text-xl font-bold text-forest-800">{selectedProduct.carbonFootprint.total} kg</p>
                  </div>
                </div>
              </div>

              {/* Supporting Documents */}
              <div>
                <h3 className="text-lg font-semibold text-sand-900 mb-4">Supporting Documents</h3>
                {selectedProduct.documents && selectedProduct.documents.length > 0 ? (
                  <div className="space-y-3">
                    {selectedProduct.documents.map((doc: any) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 bg-sand-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-sand-600" />
                          <div>
                            <p className="font-medium text-sand-900">{doc.name}</p>
                            <p className="text-sm text-sand-500">Uploaded: {doc.uploadedAt}</p>
                          </div>
                        </div>
                        <button className="text-forest-600 hover:text-forest-700 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sand-500 text-center py-4">No documents uploaded</p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-sand-200 flex gap-4">
              <button
                onClick={() => handleApprove(selectedProduct.id)}
                className="flex-1 bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Approve Product
              </button>
              <button
                onClick={() => setShowRejectModal(true)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <XCircle className="w-5 h-5" />
                Reject Product
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="btn-secondary px-6 py-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-soft-lg max-w-md w-full">
            <div className="p-6 border-b border-sand-200">
              <h2 className="text-xl font-bold text-sand-900">Reject Product</h2>
              <p className="text-sand-600 mt-1">Please provide a reason for rejection</p>
            </div>

            <div className="p-6">
              <label className="block text-sm font-medium text-sand-700 mb-2">
                Rejection Reason
              </label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="input-field min-h-[120px]"
                placeholder="Explain why this product passport is being rejected..."
                required
              />
            </div>

            <div className="p-6 border-t border-sand-200 flex gap-4">
              <button
                onClick={handleReject}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Confirm Rejection
              </button>
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectionReason('');
                }}
                className="flex-1 btn-secondary px-6 py-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditorDashboard;

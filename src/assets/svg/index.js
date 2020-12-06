const requireAll = requireContext => requireContext.keys().map(requireContext)
// import all svg
const req = require.context('./', true, /\.svg$/)
requireAll(req)
// console.log(req.keys())

if (process.env.NODE_ENV === 'development') {
  require('@babel/runtime/regenerator')
  require('webpack-hot-middleware/client?reload=true')
}
import '../index.html'







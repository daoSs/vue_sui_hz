//import $ from 'zepto'
export default function (router) {
	router.map({
		'counter': {
			name: 'counter',
            component (resolve) {
            	require(['./view/counter'], resolve)
      		}
    },
        '/store': {
        	name: 'store',
      		component (resolve) {
        		require(['./view/store'], resolve)
      		}
    },
    	'/gia': {
    		name: 'gia',
      		component (resolve) {
        		require(['./view/gia'], resolve)
      		}
    },
    	'/': {
      		component (resolve) {
        		require(['./view/home'], resolve)
      		}
    },
	})
}
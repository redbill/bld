var teamInfo = new Vue({
  el: '#teamInfo',
  data: {
	  teamName:"",
	  teamDesc:"",
	  contactDesc:""
  },
  methods: {
	    addTeam: function () {
	    	var vm = this
            vm.$http.post('/bld/addTeam/addTeam.json', {moquiSessionToken:sessionToken,organizationName:vm.teamName,desc:vm.teamDesc,contact:vm.contactDesc})
                .then((response) => {
                    console.log(response);
                })
	    }
	  }
})
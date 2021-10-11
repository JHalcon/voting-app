export const func = {

     loginUser: (payload) => {
        //console.log("setcurrentuser")

        if(func.localStorageSupport()){
            //console.log("to localstorage")

            window.localStorage.setItem('JWT_TOKEN', payload.token)
            window.localStorage.setItem('USER_ID', payload.user_id)
  
        } else{
          //console.log("to cookies")

          let expire_days = 7;

          const d = new Date();
          d.setTime(d.getTime() + (expire_days*24*60*60*1000));
          let expires = "expires="+ d.toUTCString();
          
          document.cookie = "TOKEN" + "=" + payload.token + ";" + expires + ";path=/;";// + "USER_ID" + "=" + payload.user_id + ";" + expires + ";path=/;";
          document.cookie = "USER_ID" + "=" + payload.user_id + ";" + expires + ";path=/;";

        }

     },


     logoutUser: () => {
        if(func.localStorageSupport()){
            //console.log("from localstorage")

            window.localStorage.removeItem('JWT_TOKEN');  
            window.localStorage.removeItem('USER_ID');  
          } else{
            //console.log("from cookies")

            document.cookie = "TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";// USER_ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "USER_ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          }
     },

     localStorageSupport: () => {
        //console.log("localstoragesupport")
        var testKey = 'test';
        try
        {
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            return true;
        }
        catch (error)
        {
            //console.log(error)
            return false;
        }
      },

    
      getLoggedToken: () => {
        if(func.localStorageSupport()){
          //console.log("pobieram token z localstorage: "+window.localStorage.getItem('JWT_TOKEN'))
          return window.localStorage.getItem('JWT_TOKEN');
        } else{
          //console.log("pobieram token z cookies")

          let name = "TOKEN" + "=";
          let decodedCookie = decodeURIComponent(document.cookie);
          let ca = decodedCookie.split(';');
          for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return false;
        }

      },

      getLoggedUserId: () => {
        if(func.localStorageSupport()){
          //console.log("pobieram userId z localstorage")
          return window.localStorage.getItem('USER_ID');
        } else{
          //console.log("pobieram userId z cookies")

          let name = "USER_ID" + "=";
          let decodedCookie = decodeURIComponent(document.cookie);
          let ca = decodedCookie.split(';');
          for(let i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
              c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
              }
          }
          return false;
        }
      },


 }
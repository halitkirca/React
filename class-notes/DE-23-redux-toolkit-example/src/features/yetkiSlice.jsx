import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice=createSlice({
name:"yetkiSlice",

initialState:{

    email:"",
    password:""

},

reducers:{
    olusturKullanici:(state,action)=>{
      state.email = action.payload.email;
      state.password = action.payload.password;
      //    olusturkullanici fonksiyonuyla buraya action içinde kullanici bilgileri düşer
      // console.log(action);
    },
    kullaniciSil:(state)=> {
     
       state.email="" 
       state.password=""

    }


}

})


export const {olusturKullanici,kullaniciSil} = yetkiSlice.actions
// fonksiyonlarımızı actions dan üstteki gibi export ediyoruz, tüm sayfayı alttaki gibi reducer den export ediyoruz
export default yetkiSlice.reducer
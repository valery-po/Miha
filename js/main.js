 let btnPlus = document.querySelector(".contact-form__button--plus");
 let  formWrapper = document.querySelector(".form-row__wrapper");



btnPlus.addEventListener("click", function () {
  
  const taskTHML = `<div class="form-row__bottom">
              <label class="contact-form__label">
               <input type="text" class="contact__input" placeholder="172.16.45.75">
              </label>
              <label class="contact-form__label">
              <input type="text" class="contact__input" placeholder="/16">
              </label>
              <label class="contact-form__label">
              <input type="text" class="contact__input" placeholder="Внутренняя сеть АС">
              </label>
            
             </div>`;
  
 formWrapper.insertAdjacentHTML("beforeEnd", taskTHML);
   console.log(taskTHML);
  
})


document.querySelector(".contact-form__button--minus").addEventListener("click", (e) => {
  
  document.querySelector(".form-row__bottom").remove();
})

  
  
  
  



  

     
  
 
  



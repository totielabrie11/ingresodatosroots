const doc = document

doc.addEventListener('DOMContentLoader', (e) =>

    contactFormValidations()

)

contactFormValidations()

function contactFormValidations(){

    const $form = doc.querySelector('.contact-form');
    $inputs = doc.querySelectorAll('.contact-form [required]');
    console.log($inputs)

    let $selectProcedenciaMotor = $inputs[7]
    let $selectPotenciaMotor = $inputs[8]
    
    $selectProcedenciaMotor.addEventListener("change", ()=>{
        const mailSelector = $selectProcedenciaMotor.value
        console.log("🚀 ~ file: form.js ~ line 23 ~ $selectProcedenciaMotor.addEventListener ~ mailSelector", mailSelector)
        
        if (mailSelector == "dosivac") {
           /*  $form.setAttribute('action', 'https://formsubmit.co/repuestos@dosivac.com') */
           /* console.log($form.action) */
           console.log('estoy escogiendo equipo con motoro provisto por Dosivac')
           $selectPotenciaMotor.classList.remove('d-none')
           
        }
        if (mailSelector == "cliente") {
           /*  $form.setAttribute('action', 'https://formsubmit.co/cotizaciones@dosivac.com') */
           /* console.log($form.action) */
            console.log('estoy modificando cotizaciones')
            $selectPotenciaMotor.classList.remove('d-none')
        }
        if (mailSelector == "libre") {
            /* $form.setAttribute('action', 'https://formsubmit.co/cotizaciones@dosivac.com') */
            /* console.log($form.action) */
            console.log('estoy modificando cotizaciones')
            $selectPotenciaMotor.classList.add('d-none')
        }
        
    })
    
    
       


    $inputs.forEach(input => {
        const $span = doc.createElement('span')
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none')
        input.insertAdjacentElement("afterend", $span);
    });

  /*   doc.addEventListener('keyup', e=> {
        
        if (e.target.matches('.contact-form [required]')) {
            let $input = e.target
            pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
                console.log('el input tiene patron');
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add('is-active')
                : d.getElementById($input.name).classList.remove('is-active');
            }

            if (!pattern) {
                console.log('el input NO tiene patron')
                return $input.value === ""
                ? d.getElementById($input.name).classList.add('is-active')
                : d.getElementById($input.name).classList.remove('is-active');
            }
        }
    
    }); */

   doc.addEventListener('submit', e=> {
        //e.preventDefault();

        const $loader = d.querySelector(".contact-form-loader");
        $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
        
    }); 
 

}

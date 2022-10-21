const doc = document
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validadFormulario = (e) =>{

    switch (e.target.name){
        case 'nombre': 
            if (expresiones.usuario.test(e.target.value)) {
                
            }else{
                document.getElementById('grupo__usuario').classList.add('formulario__incorrecto');
            }
        break;
        case 'email': 
            console.log('estoy ingresando a email')
        break;
        case 'asunto': 
            console.log('estoy ingresando en asunto')
        break;
        case 'localidad': 
            console.log('estoy ingresando en localidad')
        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validadFormulario);
    input.addEventListener('blur', validadFormulario);
   
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
});


doc.addEventListener('DOMContentLoader', (e) =>

    contactFormValidations()

)
contactFormValidations()


function contactFormValidations(){
    
    const $condicionTrabajo = doc.getElementById('condicionTrabajo');
    const $alerta = doc.querySelectorAll('.alerta')
    console.log("🚀 ~ file: js.js ~ line 17 ~ contactFormValidations ~ $alerta", $alerta)
    
    
    const $form = doc.querySelector('.contact-form');
    $inputs = doc.querySelectorAll('.contact-form [required]');
    console.log($inputs)

    let $tipoDeEquipo = $inputs[5];
    let $selectProcedenciaMotor = $inputs[8]
    let $eficienciaMotor =  $inputs[9]

    equipo = []
    procedenciaMotor = []

    $tipoDeEquipo.addEventListener('change', ()=> {
        
        equipo.push($tipoDeEquipo.value)
    });
    
    $selectProcedenciaMotor.addEventListener("change", ()=>{
        procedenciaMotor = $selectProcedenciaMotor.value
       
        if(equipo.length === 1){
            $condicionTrabajo.classList.remove('d-none')
        }else{
            $alerta[0].innerHTML = '<span class="alert bg-danger w-100 vh-50">DEBE SELECCIONAR TIPO DE EQUIPO</span>'
            
            setTimeout(borrarEvento, 3000);
        }

        function borrarEvento(){
            $alerta[0].innerHTML = ''
        }

        if (procedenciaMotor == "dosivac") {
           /*  $form.setAttribute('action', 'https://formsubmit.co/repuestos@dosivac.com') */
           /* console.log($form.action) */
           console.log('estoy escogiendo equipo con motoro provisto por Dosivac')
        
           $eficienciaMotor.classList.remove('d-none')

        }
        if (procedenciaMotor == "cliente") {
           /*  $form.setAttribute('action', 'https://formsubmit.co/cotizaciones@dosivac.com') */
           /* console.log($form.action) */

            $eficienciaMotor.classList.add('d-none')
           
        }
        if (procedenciaMotor == "libre") {
            /* $form.setAttribute('action', 'https://formsubmit.co/cotizaciones@dosivac.com') */
            /* console.log($form.action) */
            console.log('estoy modificando cotizaciones')
            $eficienciaMotor.classList.add('d-none')

        }
        
    })
    
       


    $inputs.forEach(input => {
        const $span = doc.createElement('span')
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none')
        input.insertAdjacentElement("afterend", $span);
    });

/*     doc.addEventListener('keyup', e=> {
        
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
import { useState } from 'react';
import Turno from './steps/servicio';
import Fecha from './steps/fecha';

import { ReactComponent as Logo} from './assets/svg/logo.svg';
import { ReactComponent as Triangulo} from './assets/svg/triangulo.svg';
import { ReactComponent as Arrow} from './assets/svg/arrow.svg';
import { ReactComponent as ArrowBack} from './assets/svg/arrow-back.svg';
import banner from './assets/images/banner.jpg';

export default function App() {
  const steps = {
    SERVICIO: 'servicio',
    FECHA: 'fecha',
    DATOS: 'datos',
    REVISION: 'revision'
  };
  const [step, setStep] = useState(steps.SERVICIO);
  const [showArrowBack, setShowArrowBack] = useState(false);
  const [showArrowForward, setShowArrowForward] = useState(true);
  
  const moveForwardStep = () => {
    if (step === steps.SERVICIO) {
      setStep(steps.FECHA);
      setShowArrowBack(true);
    } else if (step === steps.FECHA) {
      setStep(steps.DATOS);
    }
  };

  const moveBackwardStep = () =>  {
    if (step === steps.FECHA) {
      setStep(steps.SERVICIO);
      setShowArrowBack(false);
    }
  }

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Triangulo />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className='flex justify-items-center justify-center'>
              <Logo  className="flex h-40 w-40 rounded-full ring-2 ring-white" />
            </div>
            {step === steps.SERVICIO && <Turno />}
            {step === steps.FECHA && <Fecha />}
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={banner}
          alt=""
        />
      </div>
      <div className="flex h-32 justify-items-center justify-center w-full items-center">
        <div className="flex inset-x-0 bottom-0 h-16 justify-center justify-items-center items-center">
          { showArrowBack && <ArrowBack onClick={() => moveBackwardStep()}/> }
          { showArrowForward && <Arrow onClick={() => moveForwardStep()}/> }
        </div>
      </div>
    </div>
  )
}

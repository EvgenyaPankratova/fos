import Image from 'next/image';

const FormBlock = () => (
  <div className="form-block bg-white p-2 xs:p-4 md:py-14 md:px-10">
    <div className="flex justify-between flex-col xl:flex-row gap-4 lg:gap-6 bg-milk p-2 xs:p-4 lg:p-6 rounded-xl overflow-hidden">
      <div className="flex flex-col gap-4 p-2 lg:p-8">
        <div className="t3 xl:t1-lowercase ">Заказать звонок</div>
        <div className="t10 ">Оставьте заявку, и наш менеджер ответит на все вопросы</div>
        <div>
          <form className="flex flex-col gap-2 lg:gap-4 mt-4">
            <input className="p-3 rounded-xl bg-transparent border-solid border-[1px] border-black/40 h-[50px] 2xl:w-[600px]" type="text" placeholder="Имя" required pattern="[A-Za-zА-Яа-яЁё]" />
            <input className="p-3 rounded-xl bg-transparent border-solid border-[1px] border-black/40 h-[50px]" type="tel" placeholder="Телефон" required pattern="2-[0-9]{3}-[0-9]{3}" />
          </form>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center gap-6 lg:mt-8 max-w-[550px]">
          <div>
            <button type="submit" className="text-white px-12 py-2 bg-blue rounded-xl h-[50px]">
              Отправить
            </button>
          </div>
          <div className=" t13">
            Нажимая на кнопку, вы подтверждаете, что ознакомились
            с политикой обработки персональных данных
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:block">
        <div className="relative w-full h-[170px] xs:h-[210px] sm:h-[260px] md:h-[310px] lg:w-full lg:h-[390px] xl:w-[460px] xl:h-full 2xl:w-[705px] 3xl:w-[835px] 2xl:h-[400px] rounded-xl overflow-hidden">
          <Image src="/buildings.png" alt="buildings" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  </div>
);

export default FormBlock;

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
// @ts-ignore
import InputMask from 'react-input-mask';

const FormBlock = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setName('');
    setPhone('');

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: `${name}`,
        number: `${phone}`,
      }),
    });
  }

  return (
    <div className="form-block bg-white p-2 xs:p-4 md:py-14 md:px-10">
      <div
        className="flex justify-between flex-col xl:flex-row gap-4 lg:gap-6 bg-milk p-2 xs:p-4 lg:p-6 rounded-xl overflow-hidden"
      >
        <div className="flex flex-col gap-4 p-2 lg:p-8">
          <div className="t3 xl:t1-lowercase ">Заказать звонок</div>
          <div className="t10 ">Оставьте заявку, и наш менеджер ответит на все вопросы</div>
          <div>
            <form className="flex flex-col gap-2 lg:gap-4 mt-4" id="form" onSubmit={handleSubmit}>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                className="p-3 rounded-xl bg-transparent border-solid border-[1px] border-black/40 h-[50px] 2xl:w-[600px]"
                type="text"
                placeholder="Имя"
                pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
                title="Используйте только буквы"
                required
                value={name}
              />
              <InputMask
                mask="+7 (999) 999-99-99"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                className="p-3 rounded-xl bg-transparent border-solid border-[1px] border-black/40 h-[50px]"
                type="text"
                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                placeholder="Телефон"
                required
                value={phone}
              />
            </form>
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-center gap-6 lg:mt-8 max-w-[550px]">
            <div>
              <button type="submit" form="form" className="text-white px-12 py-2 bg-blue rounded-xl h-[50px] hover:bg-blue/70">
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
          <div
            className="relative w-full h-[170px] xs:h-[210px] sm:h-[260px] md:h-[310px] lg:w-full lg:h-[390px] xl:w-[460px] xl:h-full 2xl:w-[705px] 3xl:w-[835px] 2xl:h-[400px] rounded-xl overflow-hidden"
          >
            <Image src="/buildings.png" alt="buildings" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;

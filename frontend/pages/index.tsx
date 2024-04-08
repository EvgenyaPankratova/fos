import { NextPage } from 'next';
import FormBlock from '@/components/FormBlock';

const HomePage: NextPage = () => (
  <div>
    <h1>
      Тестовое задание
      {' '}
      <span className="text-blue">
        FOS
      </span>
    </h1>
    <section className="section-gutter">
      <FormBlock />
    </section>
  </div>
);

export default HomePage;

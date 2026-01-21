import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context';

const Home = () => {
  const { t } = useApp();

  return (
    <main className="mx-[15px] mt-[15px] bg-primary rounded-[20px] min-h-[480px] flex flex-col md:flex-row text-white overflow-hidden animate-fadeIn shadow-lg shadow-primary/20">
      <div className="flex-1 p-10 flex flex-col justify-center items-start z-10">
        <h1 
          className="text-[clamp(32px,8vw,52px)] font-extrabold leading-[1.1] mb-6 drop-shadow-sm"
          dangerouslySetInnerHTML={{ __html: t('find_style') }}
        />
        <Link 
          to="/catalog" 
          className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
        >
          {t('shop_now')}
        </Link>
      </div>
      <div 
        className="flex-[1.2] min-h-[250px] bg-center bg-cover transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=40&w=800')" }}
      />
    </main>
  );
};

export default Home;
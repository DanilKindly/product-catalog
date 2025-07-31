import React, { useState, useMemo } from 'react';
import Header from '../../components/common/Header';
import EditText from '../../components/ui/EditText';
import Dropdown from '../../components/ui/Dropdown';
import Button from '../../components/ui/Button';

const CreateProductCard = () => {
  /* 1. состояние поиска*/
  const [searchValue, setSearchValue] = useState('');

  /*  2 состояние выбранных фильтров   */
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  /*3. заглушки «Категория / Подкатегория»*/
  const categoryOptions = [
    { label: 'Косметология', value: 'cosmetics' },
    { label: 'Медицина',     value: 'medicine'  },
    { label: 'Красота',      value: 'beauty'    },
  ];

  const subcategoryOptions = [
  { label: 'Филлеры',   value: 'fillers',      parent: 'cosmetics' },
  { label: 'Инъекции',  value: 'injections',   parent: 'cosmetics' },
  { label: 'Препараты', value: 'preparations', parent: 'medicine'  },
  ];

const DEFAULT_CAT = 'medicine';  
const DEFAULT_SUB = 'preparations';

  const filteredSubOptions = useMemo(() => {
  if (!selectedCategory) return subcategoryOptions;         
  return subcategoryOptions.filter(o => o.parent === selectedCategory);
}, [selectedCategory]);
  /* -4. товары  */
  const initialProducts = [
    { id: 1, name: 'Juvederm VOLBELLA,\nВолбелла', image: '/images/img_image_26.png', category: 'cosmetics', subcategory: 'fillers'},
    { id: 2, name: 'Juvederm VOLBELLA,\nВолбелла', image: '/images/img_image_26.png', category: 'cosmetics', subcategory: 'fillers' },
    { id: 3, name: 'Juvederm VOLBELLA,\nВолбелла', image: '/images/img_image_26.png', category: 'cosmetics', subcategory: 'fillers' },
    { id: 4, name: 'Juvederm VOLBELLA,\nВолбелла', image: '/images/img_image_26.png', category: 'cosmetics', subcategory: 'fillers' },
    { id: 5, name: 'Juvederm VOLBELLA,\nВолбелла', image: '/images/img_image_26.png', category: 'cosmetics', subcategory: 'fillers' },
    { id: 6, name: 'Juvederm VOLBELLA,\nВолбелла', image: '/images/img_image_26.png', category: 'cosmetics', subcategory: 'fillers' },
  ];
  const [products, setProducts] = useState(initialProducts);

  /*5. фильтрация по строке поиска*/
const visibleProducts = useMemo(() => {
  const q = String(searchValue).toLowerCase();

  return products.filter(p =>
    p.name.toLowerCase().includes(q) &&
    (!selectedCategory    || p.category    === selectedCategory) &&
    (!selectedSubcategory || p.subcategory === selectedSubcategory)
  );
}, [products, searchValue, selectedCategory, selectedSubcategory]);


  //6. обработчки
  const handleSearchChange = (input) => {
  const value = input?.target ? input.target.value : input;
  setSearchValue(value);
};

  const handleCategoryChange    = (option) => setSelectedCategory(option.value);
  const handleSubcategoryChange = (option) => setSelectedSubcategory(option.value);
  function handleCreateProduct() {
  const newProduct = {
    id: crypto.randomUUID(),     
    name: 'Новый товар',
    image: '/images/img_placeholder.png',
    category: DEFAULT_CAT,
    subcategory: DEFAULT_SUB,
  };

  setProducts((prev) => [newProduct, ...prev]);
  //setSelectedCategory(DEFAULT_CAT);
  //setSelectedSubcategory(DEFAULT_SUB);
}


  return (
    <div className="flex flex-col gap-[32px] justify-start items-center w-full bg-global-1 min-h-screen">
      <Header />

      {/* первичная обертка*/}
      <div className="flex flex-col gap-[18px] justify-start items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* заголовок */}
        <div className="flex items-center w-full">
          <button className="flex items-center justify-center shrink-0">
            <img src="/images/img_frame_1287.svg" alt="back" className="w-[52px] h-[46px]" />
          </button>
          <h1 className="flex-1 font-montserrat font-semibold text-[24px] md:text-[28px] lg:text-[32px] text-center">
            Создать карточку товара
          </h1>
        </div>

        <h2 className="font-montserrat font-semibold text-[18px] md:text-[20px]">
          Выберите товар из каталога
        </h2>

        {/* поиск */}
        <div className="flex flex-col gap-[10px] w-full">
          <label className="text-[14px]">Поиск по названию</label>
          <EditText
            placeholder="Название"
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>

        {/* категория и подкат*/}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col gap-[10px] w-full">
            <label className="text-[14px]">Категория</label>
            <Dropdown
              placeholder="Категория"
              options={categoryOptions}
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            <label className="text-[14px]">Подкатегория</label>
            <Dropdown
              placeholder="Подкатегория"
              options={filteredSubOptions}
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-row gap-[20px] w-full overflow-x-auto lg:flex-wrap">
          {visibleProducts.map((product) => (
            <div key={product.id}
                 className="flex flex-col items-center w-[176px] shrink-0 rounded-[12px] shadow p-[18px]">
              <img src={product.image} alt="product"
                   className="w-[98px] h-[90px] object-contain mb-[20px]" />
              <p className="text-[11px] whitespace-pre-line text-center">{product.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:items-center">
          <p className="font-semibold text-[12px] sm:text-[14px]">
            Товара нет в списке?
          </p>
          <Button variant="primary" className="flex items-center gap-[10px] px-[34px] py-[14px]"  onClick={handleCreateProduct}>
            <span className="text-[12px] sm:text-[14px]">Создать новый товар</span>
            <img src="/images/img_plus.svg" alt="plus" className="w-[16px] h-[16px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductCard;

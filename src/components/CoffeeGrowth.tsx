function CoffeeGrowth() {
  return (
    <div className="grid grid-cols-2 rounded-[20px]   md:flex md:justify-between md:items-center gap-12   h-[398px]   my-20 ">
      <div className="w-[509px] order-last  bg-coffeegrowth h-[311px] bg-cover bg-center rounded-3xl"></div>
      <div className="w-[656px]">
        <h3 className="font-semibold text-[26px] leading-[22px] text-black mb-4">
          {' '}
          Coffee Growth In Kenya
        </h3>
        <p className="leading-[30px] font-normal text-base text-inactive">
          As the birthplace of coffee, Kenya is home to more species of coffee plants than any place
          on earth, much of it still growing wild, and much of it still undiscovered. All Kenyan
          coffee is Arabica and at least 150 varieties are commercially cultivated. Traditionally,
          these have simply been labelled as “heirloom varietals”; however, this is changing as the
          Jimma Agricultural Research Center works to identify species. Although there are a few
          estates in Kenya, 95% of coffee is grown by small land holders in a wide variety of
          environments, including “coffee forests” where coffee grows wild and is harvested by the
          local people.
        </p>
      </div>
    </div>
  );
}

export default CoffeeGrowth;
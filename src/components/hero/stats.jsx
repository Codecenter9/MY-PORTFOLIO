import styles from "../../style";
import stats from "../../components/stats.js";

const Stats = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap sm:mb-20 mb-6 -mt-20`}
    data-aos="fade-up"
  >
    {stats.map((stat) => (
      <div key={stat.id} className="p-[1px] rounded-[10px]  m-3">
        <div className="flex-1 flex justify-start items-center flex-row bg-gray-900 rounded-[10px] p-4 w-full">
          <h4 className="font-serif font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-serif font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default Stats;

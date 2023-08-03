import React from "react";
import capsule from "../../global/images/capsule(1).png";
import capsule2 from "../../global/images/capsule.png";
import capsule3 from "../../global/images/pills(1).png";
import medical from "../../global/images/medicine.png";
import checked from "../../global/images/checked.png";
import hand from "../../global/images/stethoscope-doctors-desk-medical-concept-corona-virus-covid-19-stethoscope-eyeglasses-face-mask-blue-desk-protection-against-virus-coronavirus-flu-colds-diseases-flat-lay-top-view.jpg";
import steth from "../../global/images/capsule(1).png";
import steth2 from "../../global/images/stethoscope.png";
import plaster from "../../global/images/checked.png";
import heart from "../../global/images/like.png";
import bandage from "../../global/images/bandage.png";
import footer from "../../global/images/top-view-health-still-life-with-copy-space.jpg";

const Advices = () => {
  // Stay hydrated: Drinking enough water is essential for maintaining good health. شرب الماء للبقاء رظبا
  // Get enough sleep: Adequate sleep is important for overall health and wellbeing. الحصول على قسط كافٍ من النوم: النوم الكافي مهم للصحة العامة والرفاهية.
  // Exercise regularly: Regular exercise can help improve overall health and reduce the risk of chronic diseases. ممارسة الرياضة بانتظام: يمكن أن تساعد التمارين المنتظمة في تحسين الصحة العامة وتقليل مخاطر الإصابة بالأمراض المزمنة.
  // Eat a healthy diet: A balanced diet that is rich in fruits, vegetables, whole grains, and lean proteins can help maintain good health. اتباع نظام غذائي صحي: يمكن أن يساعد النظام الغذائي المتوازن الغني بالفواكه والخضروات والحبوب الكاملة والبروتينات الخالية من الدهون في الحفاظ على صحة جيدة.
  // Practice good hygiene: Good personal hygiene practices such as washing hands regularly and covering coughs and sneezes can help prevent the spread of germs and illness. ممارسة النظافة الجيدة: ممارسات النظافة الشخصية الجيدة مثل غسل اليدين بانتظام وتغطية السعال والعطس يمكن أن تساعد في منع انتشار الجراثيم والأمراض.
  // Manage stress: Chronic stress can have negative effects on both mental and physical health.  إدارة الإجهاد: يمكن أن يكون للتوتر المزمن آثار سلبية على الصحة العقلية والبدنية.
  // Stay up-to-date on preventive health screenings: Regular preventive health screenings can help detect and treat health problems early.ابق على اطلاع على الفحوصات الصحية الوقائية: يمكن أن تساعد الفحوصات الصحية الوقائية المنتظمة في اكتشاف المشكلات الصحية وعلاجها مبكرًا.
  return (
    <div className="pt-[85px] ">
      <div className="mb-[100px]">
        <img src={capsule} className="w-[500px] ml-20" alt="" />
        <div className="w-[277px] text-[var(--gray-color)] bg-[var(--p-color)] h-[114px] absolute top-[416px] left-[120px] rounded-lg">
          Always consult a healthcare provider before taking any medication,
          even over-the-counter drugs.
          {/* taking medication without proper guidance
          from a healthcare provider can lead to serious health problems,
          including adverse reactions, drug interactions, and other
          complications. */}
        </div>
        <div className="flex justify-between w-[500px] text-[var(--gray-color)] items-center absolute top-36 left-[57%]">
          <img src={checked} className="w-12" alt="" />
          <p className="w-[410px]">
            taking medication without proper guidance from a healthcare provider
            can lead to serious health problems, including adverse reactions,
            drug interactions, and other complications.
          </p>
        </div>
        <div className="flex justify-between w-[500px] text-[var(--gray-color)] items-center absolute top-[50%] left-[45%]">
          <img src={checked} className="w-12" alt="" />
          <p className="w-[410px]">
            Certain medications may not be safe for everyone, especially for
            people with certain medical conditions or who are taking other
            medications.
          </p>
        </div>
        <div className="flex justify-between w-[500px] text-[var(--gray-color)] items-center absolute top-[73%] left-[57%]">
          <img src={checked} className="w-12" alt="" />
          <p className="w-[410px]">
            Never change the dosage or frequency of a medication without
            consulting a healthcare provider, as this can also lead to serious
            health problems.
          </p>
        </div>
      </div>
      {/* <div className="mt-[58px] relative">
        <img src={hand} className="h-[590px] w-full object-cover" alt="" />
        <div className="flex justify-between items-start text-[var(--gray-color)] absolute top-[15%] right-10 w-[580px] text-xl font-[Caprasimo]">
          //  <img src={steth} className="w-12" alt="" /> 
          <div className="w-3 h-3 rounded-full bg-[var(--green-color)] mt-4"></div>
          <p className="w-[510px]" style={{ lineHeight: 2 }}>
            Stay up-to-date on preventive health screenings: Regular preventive
            health screenings can help detect and treat health problems early.
          </p>
        </div>
        <div className="flex justify-between items-start text-[var(--gray-color)] absolute top-[60%] right-10 w-[580px] text-xl font-[Caprasimo]">
          // <img src={steth} className="w-12" alt="" />  
          <div className="w-3 h-3 rounded-full bg-[var(--green-color)] mt-4"></div>
          <p className="w-[510px]" style={{ lineHeight: 2 }}>
            Practice good hygiene: Good personal hygiene practices such as
            washing hands regularly and covering coughs and sneezes can help
            prevent the spread of germs and illness.
          </p>
        </div>
      </div> */}
      <div className="relative py-[100px] pl-16 text-[var(--gray-color)] bg-[var(--greenLigth-color)]">
        {/* <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full"></div> */}
        {/* <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[12%]"></div>
        <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[34%]"></div>
        <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[58%]"></div>
        <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[80%]"></div>
        <div className="w-20 h-20 bg-[var(--greenLigth-color)] absolute top-[690px] rounded-full left-[12%]"></div>
        <div className="w-20 h-20 bg-[var(--greenLigth-color)] absolute top-[690px] rounded-full left-[34%]"></div>
        <div className="w-20 h-20 bg-[var(--greenLigth-color)] absolute top-[690px] rounded-full left-[58%]"></div>
        <div className="w-20 h-20 bg-[var(--greenLigth-color)] absolute top-[690px] rounded-full left-[80%]"></div> */}
        <img src={steth2} alt="" className="mb-5" />
        <p className="absolute top-[26%]  left-[108px] text-center w-[230px]">
          Get enough sleep: Adequate sleep is important for overall health and
          wellbeing.
        </p>
        <div className="absolute w-[430px] top-[20%] left-[67%] flex justify-between items-start bg-[var(--p-color)] py-10 px-2 rounded-2xl h-[180px]">
          <img src={plaster} className="w-12" alt="" />
          <p className="w-[350px]">
            Manage stress: Chronic stress can have negative effects on both
            mental and physical health.
          </p>
        </div>
        <div className="absolute w-[430px] top-[20%] left-[32%] flex justify-between items-start bg-[var(--p-color)] py-10 px-2 rounded-2xl h-[180px]">
          <img src={plaster} className="w-12" alt="" />
          <p className="w-[350px]">
            Eat a healthy diet: A balanced diet that is rich in fruits,
            vegetables, whole grains, and lean proteins can help maintain good
            health.
          </p>
        </div>
        <div className="absolute w-[430px] top-[58%] left-[50%] flex justify-between items-start bg-[var(--p-color)] py-10 px-2 rounded-2xl h-[180px]">
          <img src={plaster} className="w-12" alt="" />
          <p className="w-[350px]">
            Exercise regularly: Regular exercise can help improve overall health
            and reduce the risk of chronic diseases.
          </p>
        </div>
      </div>
      <div className="relative my-[40px] h-[100vh]">
        <img src={capsule} className="w-[500px] absolute right-11" alt="" />
        <div className="w-[277px] text-[var(--gray-color)] bg-[var(--p-color)] h-[100px] absolute top-[345px] right-[223px] rounded-lg">
          Stay hydrated: Drinking enough water is essential for maintaining good
          health.
        </div>
        <div className="flex justify-between w-[500px] text-[var(--gray-color)] items-center absolute top-36 right-[57%]">
          <img src={checked} className="w-12" alt="" />
          <p className="w-[410px]">
            Stay up-to-date on preventive health screenings: Regular preventive
            health screenings can help detect and treat health problems early.
          </p>
        </div>
        <div className="flex justify-between w-[500px] text-[var(--gray-color)] items-center absolute top-[50%] right-[45%]">
          <img src={checked} className="w-12" alt="" />
          <p className="w-[410px]">
            Practice good hygiene: Good personal hygiene practices such as
            washing hands regularly and covering coughs and sneezes can help
            prevent the spread of germs and illness.
          </p>
        </div>
        <div className="flex justify-between w-[500px] text-[var(--gray-color)] items-center absolute top-[73%] right-[57%]">
          <img src={checked} className="w-12" alt="" />
          <p className="w-[410px]">
            Your health is important, and taking the steps outlined by your
            doctor can help you maintain it. Remember to prioritize self-care
            and seek medical attention when needed, and you'll be well on your
            way to a happy and healthy life.
          </p>
        </div>
      </div>
      <div className="relative text-[var(--gray-color)] font-[Caprasimo] h-[60vh] bg-[var(--greenLigth-color)]">
        {/* <img src={footer} className="h-[100vh] w-full object-cover" alt="" /> */}
        {/* <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[12%]"></div>
        <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[34%]"></div>
        <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[58%]"></div>
        <div className="w-20 h-20 bg-[var(--p-color)] absolute top-[-40px] rounded-full left-[80%]"></div> */}
        <p className="absolute top-20 left-10 text-4xl">Final thoughts: </p>
        {/* <div className="absolute top-10 left-[29%] text-lg w-[900px] flex justify-between items-start opacity-[70%]">
          <div className="w-3 h-3 rounded-full bg-[var(--gray-color)] mt-2"></div>
          <p className="w-[840px]">
            Your health is important, and taking the steps
            outlined in this advice page can help you maintain it. Remember to
            prioritize self-care and seek medical attention when needed, and
            you'll be on your way to a happy and healthy life.
          </p>
        </div> */}
        <div className="absolute top-[43%] left-[3%] text-lg w-[520px] flex justify-between items-start opacity-[70%]">
          <div className="w-3 h-3 rounded-full bg-[var(--gray-color)] mt-2"></div>
          <p className="w-[460px]">
            Follow these recommendations to maintain your health and wellbeing.
            If you have any questions or concerns, don't hesitate to contact
            your healthcare provider.
          </p>
        </div>
        <div className="absolute top-[43%] left-[50%] text-lg w-[520px] flex justify-between items-start opacity-[70%]">
          <div className="w-3 h-3 rounded-full bg-[var(--gray-color)] mt-2"></div>
          <p className="w-[460px]">
            Remember to take care of your health by following these guidelines.
            By making small changes to your lifestyle, you can improve your
            overall wellbeing and reduce your risk of developing health
            problems.
          </p>
        </div>
      </div>
      <div className="w-full h-3 bg-[var(--gray-color)]"></div>
    </div>
  );
};

export default Advices;

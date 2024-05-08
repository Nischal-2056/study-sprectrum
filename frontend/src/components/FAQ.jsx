import Faq from "react-faq-component";

import listening from "../assets/speaker-wireless.png";
import Reading from "../assets/book-open-variant.png";
import Writing from "../assets/pen.png";
import Speaking from "../assets/account-voice.png";

export const FAQUSA = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  const data = {
    rows: [
      {
        title: `IS THERE AN AGE LIMIT TO APPLY TO THE USA?`,
        content: `In general, candidates between the ages of 17 -79 can apply for the USA. However, minors and elders can also apply for the visa in special cases.`,
      },
      {
        title: "WHICH INTAKE IS  best for applying to study in the USA?",
        content:
          "Preferably, students can apply for the fall intake, which usually starts in late August - September, if they want to have multiple course options. Nevertheless, a countable number of universities in the USA also offer courses in the spring and summer intakes.",
      },
      {
        title: "HOW EARLY SHOULD A STUDENT APPLY FOR F-1 VISA IN USA?",
        content:
          "Students are advised to apply 8–9 months before the intake starts. Given the fact that many institutions take 4–8 weeks to process the application, it is better to apply early to get reservations for embassy appointments.",
      },
      {
        title:
          "CAN A STUDENT APPLY FOR STUDY WITHOUT ATTENDING IELTS/TOEFL OR ANY OTHER LANGUAGE PROFICIENCY TESTS?",
        content:
          "While a countable number of institutions accept applications without attending language proficiency tests like IELTS, TOEFL, PTE, or DULOLING, students are advised to complete one of these tests to broaden the range of study options.",
      },
      {
        title:
          "HOW MUCH OF THE STUDY  GAP IS ACCEPTED BY THE EDUCATION INSTITUTIONS IN THE USA?",
        content: `In general, the USA prefers to have students who leave an academic gap of less than one year. However, students with a longer education gap need to provide proper reasons to justify their gap.  `,
      },
      {
        title:
          "WHAT IS THE AVERAGE TUITION FEE FOR UNDERGRADUATE, GRADUATE, AND DOCTORAL PROGRAMS IN THE USA?",
        content: `For undergraduate programs, the fee starts at $10,000–$50,000 per year. For graduate programs, fees start at $15,000–$60,000 per year. Doctoral degree fees range from $20,000 to $60,000 per year. `,
      },
      {
        title:
          "WHAT IS THE AVERAGE COST OF LIVING IN  the USA FOR INTERNATIONAL STUDENTS?",
        content: `The average cost of  living for international students can range from $1500-$3000 based on the lifestyle they adopt. The major areas of spending include hostel charges, food and grocery expenses, transportation, electricity, phone, and internet. Additional costs include $1000-$2000 for health insurance. `,
      },
      {
        title:
          "How much of a bank balance must a student have to apply to the USA?",
        content: `Students are advised to have a bank balance of not less than $45,000 to obtain an offer letter and an I-20 for US institutions. Nevertheless, there is no fixed limit to the bank balance a student must have to study in the USA. `,
      },
      {
        title:
          "WHAT ARE SOME OF THE POPULAR CITIES  IN THE USA FOR NEPALESE STUDENTS?",
        content: ` The US is estimated to have over 200,000 Nepalese citizens. While most of the students prefer to live in New York, Texas has the highest number of international students, followed by Boston, Chicago, and Denver. `,
      },
      {
        title:
          "SHOULD A STUDENT CONCEAL  INFORMATION ABOUT HIS/HER IMMIGRATION HISTORY IN VISA INTERVIEW?",
        content: `Absolutely not. Students are advised to provide all the immigration-related information to the visa counselor, including previous applications and refusals in countries like Canada, the UK, Australia, and New Zealand.`,
      },
      {
        title:
          "WHAT ARE SOME OF THE POPULAR CITIES IN The USA FOR NEPALESE STUDENTS?",
        content: `	The US is estimated to have over 200,000 Nepalese citizens. While most of the students prefer to live in New York, Texas has the highest number of international students, followed by Boston, Chicago, and Denver.`,
      },
    ],
  };
data.rows.forEach((row) => {
  // Splitting the title into words
  const words = row.title.split(" ");

  // Capitalize the first letter of the first word
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

  // Ensure "USA" remains capitalized
  for (let i = 1; i < words.length; i++) {
    if (words[i].toUpperCase() === "USA") {
      words[i] = "USA";
    }
     else if (words[i].toUpperCase() === "USA?") {
       words[i] = "USA?";
     } else if (words[i].toUpperCase() === "IELTS/TOEFL") {
       words[i] = "IELTS/TOFEL";
     } else if (words[i].toUpperCase() === "F-1") {
       words[i] = "F-1";
     } else if (words[i].toUpperCase() === "NEPALESE") {
       words[i] = "Nepalese";
     } else {
       words[i] = words[i].toLowerCase();
     }
  }

  // Join the words back into a sentence
  row.title = words.join(" ");
});



  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQUK = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const data = {
    rows: [
      {
        title: "HOW IS  STUDENT LIFE IN UK?",
        content: `Life as an international student in the UK can be both satisfying and disappointing. As the UK is a country with a diverse culture and openly welcomes students from multi-cultural environments, it is not hard for a competent candidate to survive in the UK`,
      },
      {
        title: "IS THERE AN AGE LIMIT TO APPLY FOR a UK STUDENT VISA?",
        content: `In general, any Tier-1 student above the age group of 16 can apply for the UK. There is no upper age limit to apply for a student visa in the UK.`,
      },
      {
        title:
          "HOW MUCH OF the STUDY GAP IS ACCEPTED BY THE INSTITUTIONS IN THE UK",
        content: `Mostly, a 2-year education gap is accepted for undergraduate programs, and a 5-year study gap is accepted for postgraduate programs. If the student has longer study gaps than 5 years, he or she might have to provide proper justification with proof to compensate for the study gaps.`,
      },
      {
        title:
          "WHAT IS THE AVERAGE TUITION FEE FOR UNDERGRADUATE, GRADUATE, AND DOCTORAL PROGRAMS IN  the UK?",
        content: `For Bachelors programs, the fee starts at £10,000–£40,000 per year; for Masters programs, the fee starts at £11,000–£30,000 per year. The doctoral degree fee starts at £10,000–£18,000 per year.
`,
      },
      {
        title: "HOW EARLY SHOULD A STUDENT APPLY FOR  a VISA IN UK?",
        content: `Since the UK High Commission might sometimes take time to process the application, students are advised to apply at least 3 months before the course starts.
`,
      },
      {
        title:
          "CAN A STUDENT APPLY FOR STUDY WITHOUT ATTENDING IELTS/TOEFL OR ANY OTHER LANGUAGE PROFICIENCY TESTS?",
        content:
          "Yes, it is possible to apply to UK institutions without having a language proficiency certificate. However, certain universities might demand the Medium of Instruction (MOI) letter, which must be prepared through the recently passed institution.",
      },
      {
        title:
          "SHOULD A STUDENT CONCEAL  INFORMATION ABOUT HIS OR HER IMMIGRATION HISTORY IN  A VISA INTERVIEW?",
        content:
          " Absolutely not. Students are advised to provide all the immigration-related information to the visa counselor, including previous applications and refusals in countries like Canada, the USA, Australia, and New Zealand.",
      },
      {
        title:
          "WHAT IS THE AVERAGE COST OF LIVING IN THE UK FOR INTERNATIONAL STUDENTS?",
        content:
          "The average cost of living for international students can range from £1200 to £15,000 per year, depending on the lifestyle they adopt. The major areas of spending include hostel charges, food and grocery expenses, transportation, electricity, phone, and household bills. ",
      },
      {
        title:
          "	How much of a bank balance must a student have to apply for a UK?",
        content:
          "Students who plan to apply inside London are advised to have a minimum bank balance of GBP 12000, whereas students planning to stay outside London must have a minimum balance of GBP 9200. The amount must be held in the bank account for at least 28 days in the name of the applicant or his or her father or mother.",
      },
      {
        title: "CAN A STUDENT APPLY FOR PR IN UK AFTER COMPLETING THE STUDIES?",
        content:
          "Students cannot directly get PR in the UK even after completing their master’s degree. First, they must apply for the work permit and complete their 5 years of professional tenure, along with fulfilling the terms, to apply for PR.",
      },
      {
        title:
          "WHAT ARE SOME OF THE POPULAR CITIES IN  THE UK FOR  NEPALESE STUDENTS?",
        content:
          "Based on necessity and job opportunities, London is the most popular city for international students. Birmingham, Manchester, and Glasgow are other preferred destinations, offering a wide range of scope and job opportunities. ",
      },
    ],
  };
data.rows.forEach((row) => {
  // Splitting the title into words
  const words = row.title.split(" ");

  // Capitalize the first letter of the first word
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

  // Ensure "USA" remains capitalized
  for (let i = 1; i < words.length; i++) {
    if (words[i].toUpperCase() === "UK") {
      words[i] = "UK";
    }
     else if (words[i].toUpperCase() === "UK?") {
       words[i] = "UK?";
     } else if (words[i].toUpperCase() === "IELTS/TOEFL") {
       words[i] = "IELST/TOEFL";
     } else if (words[i].toUpperCase() === "NEPALESE") {
       words[i] = "Nepalese";
     } else {
       words[i] = words[i].toLowerCase();
     }
  }

  // Join the words back into a sentence
  row.title = words.join(" ");
});
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQCANADA = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const data = {
    rows: [
      {
        title:
          "HOW MUCH OF the STUDY  GAP IS ACCEPTED BY THE EDUCATION INSTITUTIONS IN CANADA?",
        content: `Canada generally favors pupils with fewer than a year's academic gap. Students who have a greater educational difference must nevertheless give valid justification for their disparity.`,
      },
      {
        title: "HOW EARLY SHOULD A STUDENT APPLY FOR a Student VISA IN CANADA?",
        content: `In order to have more course possibilities, students should ideally apply for the fall intake, which often begins in late August or early September. That being said, a sizable number of American colleges also offer courses for spring and summer intakes. `,
      },
      {
        title: "WHICH INTAKE IS BEST TO APPLY FOR STUDY IN CANADA",
        content: `Preferably, students can apply for the fall intake, which usually starts in late August or September, if they want to have multiple course options. Nevertheless, a countable number of universities in Canada also offer courses in the spring and summer intakes`,
      },

      {
        title:
          "CAN A STUDENT APPLY FOR STUDY WITHOUT ATTENDING IELTS/TOEFL OR ANY OTHER LANGUAGE PROFICIENCY TESTS?",
        content: `No, students cannot apply for a work or student visa without it. The visa requirements do not specify whether to take the specific language proficiency exam. You can opt out of any test to satisfy the eligibility criteria.
`,
      },

      {
        title: "WHAT IS THE COST OF LIVING IN CANADA?",
        content:
          "The average living cost in Canada for international students is around CAD 18,340 per year. When it comes to the cost of living in Canada for Nepali students, it translates to nearly Rs.18 lakhs per annum on average based on the current exchange rate.",
      },

      {
        title: "CAN A STUDENT WORK WHILE STUDYING IN CANADA?",
        content: ` You may work part-time on campus and full-time during designated breaks as long as you have a valid study permit. To work off campus, though, you'll need to have a work permit. `,
      },

      {
        title:
          "CAN A STUDENT APPLY FOR PR IN CANADA AFTER COMPLETING THE STUDIES?",
        content:
          "If they fulfill the conditions of the Canadian immigration program under which they apply, international students studying in Canada may apply for Canadian permanent residence status either during their studies or after they graduate.",
      },

      {
        title: "WHAT TYPE OF WEATHER DOES CANADA EXPERIENCE? ",
        content:
          "Canada typically has pleasant summer temperatures and frigid winters. However, depending on the area you're in, the weather might change significantly. For instance, Canada's east coast has more severe weather with warmer summers and colder winters, but the country's west coast enjoys a gentler environment.",
      },
      {
        title: "IN CANADA , FINDING A JOB AFTER STUDY IS EASY.?",
        content:
          "You might be able to apply for a work permit, which would enable you to work in Canada for a set amount of time after finishing your education.",
      },
    ],
  };
data.rows.forEach((row) => {
  // Splitting the title into words
  const words = row.title.split(" ");

  // Capitalize the first letter of the first word
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

  // Ensure "USA" remains capitalized
  for (let i = 1; i < words.length; i++) {
    if (words[i].toUpperCase() === "CANADA") {
      words[i] = "Canada";
    } else if (words[i].toUpperCase() === "CANADA?") {
      words[i] = "Canada?";
    } else if (words[i].toUpperCase() === "IELTS/TOEFL") {
      words[i] = "IELTS/TOEFL";
    } else {
      words[i] = words[i].toLowerCase();
    }
  }

  // Join the words back into a sentence
  row.title = words.join(" ");
});
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQ_TEST_IELTS = () => {
  const styles = {
    bgColor: "transparent",
    titleTextColor: "black",
    rowTitleColor: "white",
    rowContentColor: "white",
    arrowColor: "white",
    rowContentPaddingBottom: "20px",
  };

  const config = {
    animate: true,
    arrowIcon: "+",
    tabFocus: true,

    collapseIcon: "-",
    expandIcon: "+",
  };
  const data = {
    rows: [
      {
        title: (
          <>
            <img className="px-2" src={listening} />
            Listening
          </>
        ),
        index: 1,
        content: `The test comprises four sections, each containing ten questions. The initial two sections focus on social needs, with the first involving a dialogue between two speakers and the second featuring a monologue. The latter two sections pertain to educational or training context, with the third section being a conversation among up to four individuals and the fourth being a monologue. Various question types are employed, such as multiple-choice, matching, labeling, completion, and short-answer questions. Candidates listen to the recording once and respond to the questions. A ten-minute period is allotted at the end for transferring answers to the answer sheet.`,
      },

      {
        title: (
          <>
            <img className="px-2" src={Reading} />
            Reading
          </>
        ),
        index: 2,
        content: `This test comprises three sections, totaling 40 questions. It includes three texts sourced from journals, books, magazines, and newspapers, covering general-interest topics. At least one text involves a detailed logical argument. The question types vary and include multiple choice, identifying information (true/false/not given), identifying the writer’s views/claims (yes/no/not given), matching information, matching headings, matching features, matching sentence endings, and various completion formats such as sentence, summary, note, table, flow chart, diagram label, and short-answer questions.`,
      },
      {
        title: (
          <>
            <img className="px-2" src={Writing} />
            Writing
          </>
        ),
        index: 3,
        content: `The test has two tasks: Task 1, recommended to be completed in about 20 minutes with a minimum of 180 words, and Task 2, recommended to be completed in about 40 minutes with a minimum of 250 words. Task 2 carries twice the weight of Task 1 in the writing score. Task 1 involves interpreting and presenting information from a diagram or data (graph, table, or chart); Task 2 requires responding to a point of view, argument, or problem. Both tasks assess the ability to organize, present, and analyze information, as well as the capability to write in an appropriate style. Detailed assessment criteria can be found at ielts.org
. `,
      },
      {
        title: (
          <>
            <img className="px-2" src={Speaking} />
            Speaking
          </>
        ),
        index: 4,
        content: `The speaking test, lasting 11 to 14 minutes and conducted by a trained examiner, comprises three parts. Part 1 involves general questions about the candidate, their home, family, job or studies, and interests, lasting four to five minutes. Part 2: The candidate speaks on a given topic for one to two minutes. Part 3 involves a discussion between the examiner and the candidate on abstract issues related to the Part 2 topic, lasting four to five minutes. The test assesses English communication skills, considering fluency and coherence, lexical resources, grammatical range and accuracy, and pronunciation. Further details on assessment criteria are available at ielts.org.
 `,
      },
    ],
  };

  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export const FAQIELTS = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const data = {
    rows: [
      {
        title:
          "Is there any age or academic restriction to attending the IELTS examination?",
        content: `There is no restriction on age, gender, race, nationality, or religion for an individual to attend an IELTS examination. Any individual who wishes to migrate to or study in an English-speaking country can attend the IELTS exam.`,
      },
      {
        title: "Are all the tests conducted on the same day?",
        content:
          "No, three sections: listening, reading, and writing are conducted on the same day, whereas speaking is conducted separately (within a week) based on the local agreement with the administrator.",
      },
      {
        title: "Are there any breaks in between the tests?",
        content: `No, there are no breaks between the tests. The participant must be prepared to stay in the exam center until the exam finishes.

 `,
      },
      {
        title:
          "What is the preferred IELTS score to get admission to international universities or colleges?",
        content: `Most academic institutions prefer to have an IELTS overall score of 6.5 with a band score of not less than 6.0. However, countable institutions can accept the application up to 5.5.

`,
      },
    ],
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export const FAQ_TEST_DUOLINGO = () => {
  const styles = {
    bgColor: "transparent",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "black",
    arrowColor: "black",
    rowContentPaddingBottom: "20px",
  };

  const config = {
    animate: true,
    arrowIcon: "+",
    tabFocus: true,
    openOnload: 0,
    collapseIcon: "-",
    expandIcon: "+",
  };
  const data = {
    rows: [
      {
        title: (
          <>
            <img className="px-2" src={listening} />
            Literacy
          </>
        ),
        index: 1,
        content: `<b>Reading exercise</b>:  The Duolingo test evaluates the test-taker's ability to understand written language through reading exercises. This may include reading and comprehending sentences, phrases, or short passages in the intended language.`
        },
      {
        title: (
          <>
            <img className="px-2" src={Reading} />
            Comphrension
          </>
        ),
        index: 2,
        content: `<b>Listening exercise</b>:Learners may listen to spoken words or sentences in the target language via audio workouts on Duolingo. Because these activities require users to comprehend spoken language and connect it to written text, they improve comprehension abilities.

`,
      },
      {
        title: (
          <>
            <img className="px-2" src={Speaking} />
            Conversation
          </>
        ),
        index: 3,
        content: `<b>Speaking exercise </b>: Speaking exercises are a feature of several Duolingo courses, where students are asked to repeat phrases aloud or hold brief discussions. The development of conversational abilities, such as oral response and pronunciation, is the main goal of these activities.`,
      },
      {
        title: (
          <>
            <img className="px-2" src={Writing} />
            Production
          </>
        ),
        index: 4,
        content: `<b>Writing exercise</b>: Learners are encouraged to actively generate textual material in the target language with Duolingo. This might be finishing phrases, composing brief paragraphs, or even translating words from the original language into the target language. Writing assignments assist students in honing and strengthening their written communication skills.`,
      },
    ],
  };

  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQDUOLINGO = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
  };
  const data = {
    rows: [
      {
        title:
          "Is there any age or academic restriction to attending duolingo examination?",
        content: `An individual may take the Duolingo exam regardless of their age, gender, ethnicity, nationality, or religion. Anyone can take the Duolingo exam if they want to move to or study in the English-speaking nations.`
      },
      {
        title: "Are all the tests conducted on the same day?",
        content: `Duolingo offers online language proficiency tests. So, the testing process typically occurs in a single session.`,
      },
      {
        title: "Are there any breaks in between the tests? ",
        content: `No, there are no breaks between the tests. The participant must be prepared to stay in the exam until the exam finishes. `,
      },
      {
        title:
          "What is the preferred Duolingo score to get admission to international universities/colleges?",
        content: `Universities often accept scores between 100 and 120. To get admitted to prestigious colleges and professional programs such as MBA, MS in Data Science, Finance, Masters in Civil Engineering, etc., applicants must score higher than 120. A student needs a minimum score of 100 to be admitted to the best institutes.
`,
      },
    ],
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQ_TEST_PTE = () => {
  const styles = {
    bgColor: "transparent",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "black",
    arrowColor: "black",
    rowContentPaddingBottom: "20px",
  };

  const config = {
    animate: true,
    arrowIcon: "+",
    tabFocus: true,
    openOnload: 0,
    collapseIcon: "-",
    expandIcon: "+",
  };
  const data = {
    rows: [
      {
        title: (
          <>
            <img className="px-2" src={Writing} />
            Writing and speaking
          </>
        ),
        index: 1,
        content: `The PTE Writing section includes tasks assessing writing and speaking skills. The Summarize Written Text task involves a concise summary of a 300-word passage, while the Write Essay task requires 20 minutes to write an essay on a specific topic. The Read-aloud task evaluates pronunciation, fluency, and oral reading skills. The Repeat Sentence task assesses spoken English proficiency. The Describe Image task evaluates visual information interpretation. The Re-tell A lecture task evaluates listening and speaking skills, while the Answer Short Question task tests comprehension and verbal responses. 
`,
      },

      {
        title: (
          <>
            <img className="px-2" src={Reading} />
            Reading
          </>
        ),
        index: 2,
        content: `The PTE Academic Reading section includes exercises like fill-in-the-blanks, rearranging paragraphs, and multiple-choice questions. These tests evaluate understanding, comprehension of logical relationships, context comprehension, and language selection. Some questions provide a brief summary of the primary idea, assessing various reading and writing abilities in academic settings.

`,
      },
      {
        title: (
          <>
            <img className="px-2" src={listening} />
            Listening
          </>
        ),
        index: 3,
        content: `The listening section includes various challenges to assess proficiency, including summarizing spoken text, evaluating vocabulary, recognizing key concepts, contextual comprehension, and identifying errors in written English. These tasks contribute to the overall assessment of understanding and reacting to spoken information, ensuring a comprehensive understanding of the material.`,
      },
    ],
  };

  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQPTE = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const data = {
    rows: [
      {
        title:
          "Is there any age or academic restriction to attending the PTE examination?",
        content: `There is no restriction on age, gender, race, nationality, or religion for an individual to attend an IELTS examination. Any individual who wishes to migrate to or study in an English-speaking country can attend the PTE exam.`,
      },
      {
        title: "Are all the tests conducted on the same day?",
        content:
          "The PTE test assesses listening, reading, speaking, and writing all via computer in a single, three-hour test session on the same day itself.",
      },
      {
        title: "Are there any breaks in between the tests?",
        content: `No, there are no breaks between the tests. The participant must be prepared to stay in the exam center until the exam finishes. `,
      },
      {
        title:
          "What is the preferred PTE score to get admission to international universities or colleges?",
        content: `Most academic institutions prefer to have a PTE overall score of 60 with a band score of not less than 58. However, countable institutions can accept applications less than 55. 




.

`,
      },
    ],
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQ_TEST_TOFEL = () => {
  const styles = {
    bgColor: "transparent",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "black",
    arrowColor: "black",
    rowContentPaddingBottom: "20px",
  };

  const config = {
    animate: true,

    tabFocus: true,
    openOnload: 0,
    collapseIcon: "-",
    expandIcon: "+",
  };
  const data = {
    rows: [
      {
        title: (
          <>
            <img className="px-2" src={listening} />
            Listening
          </>
        ),
        index: 1,
        content: `The TOEFL Listening section evaluates test takers' English comprehension in lectures or conversations, covering topics like natural sciences and humanities. Multiple-choice and fill-in-the-blank questions assess main concept comprehension, purposeful grasping, and transition recognition.`,
      },

      {
        title: (
          <>
            <img className="px-2" src={Reading} />
            Reading
          </>
        ),
        index: 2,
        content: `The TOEFL Reading section evaluates a test-taker's academic comprehension and analytical skills, assessing vocabulary, major concepts, details, and conclusions from various passages. Candidates must recognize main ideas, draw conclusions, understand passage organization, and understand context. .
 


`,
      },
      {
        title: (
          <>
            <img className="px-2" src={Writing} />
            Writing
          </>
        ),
        index: 3,
        content: `The TOEFL Writing portion includes two tasks: Integrated Writing Task, which involves reading an academic piece and listening to a relevant lecture, and Independent Writing Task, which requires responding to a question or statement with thoughts on a broad subject. Scores range from 0 to 5, assessing writing competence, concept generation, organization, and language use. 

`,
      },
      {
        title: (
          <>
            <img className="px-2" src={Speaking} />
            Speaking
          </>
        ),
        index: 4,
        content: `The TOEFL exam's speaking section includes independent and integrated questions, with 15 seconds for preparation and 45 seconds for response. Integrated Tasks 3 through 6 involve reading, listening, and answering questions. Each task scores 0-4, with points awarded for grammar, vocabulary, coherence, clarity, and pronunciation, forming the TOEFL Speaking score.

`,
      },
    ],
  };

  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export const FAQTOFEL = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  const data = {
    rows: [
      {
        title:
          "Is there any age or academic restriction to attending the  TOEFL examination?",
        content: `ETS states that there are no age limitations for the TOEFL exam. Thus, regardless of your age, you have the chance to study for and sit for this test if your goal is to pursue further education overseas.`,
      },
      {
        title: "Are all the tests conducted on the same day?",
        content:
          "Yes, the most widely used format of the TOEFL, the iBT (Internet-Based Test), is usually administered on the same day. Reading, Listening, Speaking, and Writing are the four elements of the test that are typically taken on the same day because it is meant to be finished in one sitting.",
      },
      {
        title: "Are there any breaks in between the tests?",
        content: `After the first two exam portions, there will be a 10-minute break provided. Examinees are free to move about the exam room, stretch, eat, and drink during the interval. `,
      },
      {
        title:
          "What is the preferred TOEFL score to get admission to international universities or colleges?",
        content: `TOEFL usually has a minimum score requirement of 61 to 80 for admission to undergraduate programs in the United States. Higher test results, like 90 or above, may be necessary for admission to certain selective colleges.
`,
      },
    ],
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
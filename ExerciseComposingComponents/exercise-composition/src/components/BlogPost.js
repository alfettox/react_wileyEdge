import React from 'react';
import blogImage from './assets/images/exerciseComponentComposition04.jpg';

function BlogPost() {
  return (
    <article className="w-7/12 mx-auto py-4 pb-8">
      <header className="flex mx-auto flex-col justify-center text-center items-center">
        <h1 className="font-bold text-4xl my-2">
          Cyber skills shortage and the importance of strategic reskilling
        </h1>
        <p className="font-light text-gray-600">
          Article by <em className="text-purple-600">Becs Roycroft</em>, Senior Director at mthree. Originally published on
          <a
            className="pl-1 text-purple-600"
            target="_blank"
            href="https://business.express/cyber-skills-shortage-and-the-importance-of-strategic-reskilling/"
          >
            Business Express
          </a>
          .
        </p>
        <p className="font-light text-gray-60">13/01/2021</p>
      </header>
      <figure className="my-8 h-96 object-center object-cover overflow-hidden relative">
        <img className="" src={blogImage} alt="laptop and notebook" />
      </figure>
      <main className="mx-auto space-y-4 mb-16">
        <p>
          Our digital capabilities have been tested like never before in the last 12 months, both personally and
          professionally, with the global health crisis forcing many people into remote working and to do as much they
          can online, from socializing to shopping. Yet this increased reliance on digital technology has also exposed
          our cyber vulnerabilities. As early as March 2020, a report revealed that 80% of malicious activity had the
          coronavirus as the main theme in online attacks. What's worse is that with such a high level of cyber threat,
          cyber security skills are still severely lacking across UK businesses. Recent government-commissioned research
          by Ipsos Mori into the UK cybersecurity labor market found that almost 48% of organizations in the UK are unable
          to carry out even basic cyber tasks. Further, 64% of cyber firms have faced problems with technical cyber security
          skills gaps, either among existing staff or among job applicants, with 25% saying that such skills gaps have prevented
          them to a great extent from achieving business goals. While demand for cyber roles is increasing, businesses are
          clearly finding it difficult to source, hire and train new employees at the same rate. Below we explore what businesses
          can do to manage the need for cyber skills within their business and how they can recruit the best people for the job.
        </p>
        <h2 className="capitalize font-semibold text-3xl">how to hire the right People For The Job</h2>
        <p>
          The first hurdle to overcome when recruiting cyber talent, particularly at entry-level, is not to disregard a potential
          candidate if they do not have a technical, or cyber specific, background. While experienced cyber security professionals
          are hard to come by, there is no shortage of motivated, enthusiastic young candidates with a STEM background who would
          quickly become valuable additions to the team. These candidates have a pre-existing understanding of the sector and
          once brought on board can be given specific cyber skills training tailored to the needs of the business. This ensures
          a steady influx of junior talent that will help to tackle the cyber skills shortages at all levels within the company
          in the long term.
        </p>
        <h2 className="capitalize font-semibold text-3xl">consider how cyber jobs are advertised</h2>
        <p>
          Similarly, it is also important to consider how these roles are being advertised, to ensure that those who may have
          the suitable skills are being targeted in the correct way. The technology industry has commonly faced complaint for
          its lack of diversity, with only 15% of the technology industry being female, in comparison to 28% in the wider digital
          sector, and only 16% of tech employees coming from BAME backgrounds. This may partly be because not enough people from
          these groups are being introduced to the profession at a young age, and therefore do not have the required qualifications.
          However, it is equally possible that these candidates do have the skills but are not being targeted correctly. Businesses
          should therefore work to amend their job requirements, publicizing their roles to a wider variety of people and can actively
          encourage these candidates to apply. They should also make use of proofing tools when drafting their job adverts to identify
          and amend words or phrases that may unintentionally discourage applicants from certain demographic groups.
        </p>
        <h2 className="capitalize font-semibold text-3xl">the importance of strategic reskilling</h2>
        <p>
          Whilst new employees can be given cyber training once they join a business, it is also possible for businesses to upskill
          their current workforce, especially if hiring is not currently possible. Reskilling programs allow existing employees to be
          moved into tech, and cyber specific roles, in a cost-effective way, while also preventing redundancies in other departments.
          These programs can prioritize skills that a business needs and allow current employees to add to their existing skillset.
          This not only adds to their career development and enhances their value to the business, but it also minimizes the time and
          expense a business can spend on external recruitment, and removes any risks associated with making a bad hire. Investing
          in reskilling programs can also demonstrate to those outside of the business that there is an opportunity for progression
          and variation within the company too, helping to improve an organization's employer brand. The cyber skills gap continues
          to grow and has been widened even further as a consequence of the coronavirus pandemic. More and more businesses are needing
          to find new ways to find new talent as well as looking for cost-effective ways to upskill their current workforce to monitor
          this growing demand for cyber expertise. To manage this demand businesses should not only prioritize their talent recruitment
          practices, ensuring that more career starters and diverse candidates are welcomed into the sector, but also invest in reskilling
          programs as a cost-effective, sustainable way of bolstering their cyber security team.
        </p>
      </main>
    </article>
  );
}

export default BlogPost;

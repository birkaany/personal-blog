import React from "react";
export default function Post() {
  return (
    <article>
      <div className="post container mx-auto">
        <h1 className="text-by-black-800 text-3xl font-bold">Post Title</h1>
        <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">February 19, 2023</time>
        <p className="text-by-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur omnis consectetur fugiat eligendi voluptates assumenda deleniti vitae incidunt recusandae, adipisci perferendis
          necessitatibus ullam a pariatur minus. Eligendi, ullam doloremque. Neque tenetur rerum consequatur quas ratione dicta optio. Esse, nihil.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque dolore voluptates dolores animi saepe omnis quisquam et sint earum.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, rerum natus placeat totam aliquam tempore tempora quasi asperiores, dignissimos repellat, inventore alias officiis suscipit
          quas laboriosam consequatur ipsum nemo aspernatur temporibus necessitatibus magnam dolor voluptatibus facilis. Sequi enim quas, temporibus nemo sit sapiente, facere ipsam, accusamus atque ad
          consectetur porro.
        </p>
        <hr />
        <h2 className="text-by-black-800 text-xl font-bold">Subtitle</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nostrum. Quaerat minus quibusdam exercitationem voluptas ex adipisci tempore dignissimos repellendus deserunt incidunt, nulla
          inventore doloremque maxime sit non quisquam consectetur.
        </p>
      </div>
    </article>
  );
}

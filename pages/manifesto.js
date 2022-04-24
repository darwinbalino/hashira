import ContainerManifesto from "../components/ContainerManifesto";

export default function Manifesto() {
  return (
    <div className="h-screen bg-black text-gray-50">
      <ContainerManifesto>
        <div className="px-6">
          <h1 className="text-3xl font-black">
            THE MANIFESTO <span className="text-gray-600">//</span>
          </h1>
          <section className="pt-8 space-y-8 font-mono leading-loose tracking-wider text-tiny">
            <div>
              <p>Here comes a new wave...</p>
              <p>And surfing here is different.</p>
              <p>Breaking down barriers.</p>
              <p>Building open communities.</p>
              <p>Creating magic internet money with our friends.</p>
              <p>To those who don't get it, we tell them: gm.</p>
              <p>They'll come around eventually.</p>
            </div>
            <div>
              <p>
                Here's to the ones with the courage to jump down a peculiar
                rabbit hole.
              </p>
              <p>
                One that pulls you away from a world that's created by many and
                owned by few...
              </p>
              <p>To a world that's created by more and owned by all.</p>
              <p>
                From The Garden come the human beans that sprout into your
                family.
              </p>
            </div>
            <div>
              <p>We rise together.</p>
              <p>We build together.</p>
              <p>We grow together.</p>
            </div>
            <div>
              <p>Ready to take the blue bean?</p>
            </div>
          </section>
        </div>
      </ContainerManifesto>
    </div>
  );
}

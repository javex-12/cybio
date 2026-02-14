export const chap15Content: Record<string, string> = {
  "repro-amoeba-para": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Reproduction in Amoeba & Paramecium</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Unicellular organisms use division as their primary means of multiplication.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Binary Fission (Amoeba)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-blue-200">
            A single cell divides into two identical daughter cells. 
            <br/><br/>
            <strong>Atomic Logic:</strong> First the nucleus divides (Karyokinesis), then the cytoplasm divides (Cytokinesis).
          </p>
        </div>
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-indigo-900 text-lg uppercase mb-4 underline italic">Conjugation (Paramecium)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-indigo-200">
            A form of sexual reproduction where two individuals exchange genetic material via a cytoplasmic bridge.
          </p>
          <div class="p-4 bg-white rounded-2xl border border-indigo-200 text-[10px] font-black uppercase italic tracking-tighter text-indigo-600">
            Key: Conjugation introduces variation, helping the population survive environmental stress.
          </div>
        </div>
      </div>
    </div>
  `,

  "repro-spirogyra": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-emerald-600 pb-2 uppercase tracking-tighter italic">02. Reproduction in Spirogyra</h3>
      </section>

      <div class="p-10 bg-emerald-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400 italic">Conjugation in Algae</h4>
          <p class="text-sm text-emerald-100 leading-relaxed italic mb-8 font-bold">
            <em>Spirogyra</em> reproduces sexually through <strong>Lateral</strong> or <strong>Scalariform</strong> conjugation.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 italic">
              <h5 class="text-emerald-300 font-black mb-2 uppercase text-xs italic underline">Process</h5>
              <p class="text-[10px]">Contents of one cell move into another, forming a <strong>Zygospore</strong> which can survive harsh conditions.</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 italic font-black uppercase tracking-tighter text-emerald-300 flex items-center justify-center">
              Result: Genetic Recombination
            </div>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">GREEN</div>
      </div>
    </div>
  `,

  "repro-earthworm": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. Reproduction in Earthworm</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-rose-200">
          Earthworms are <strong>Hermaphrodites</strong> (Monoecious).
        </p>
      </section>

      <div class="p-10 bg-white border-4 border-slate-100 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        <h4 class="text-rose-600 font-black text-2xl mb-6 tracking-widest uppercase underline">The Paradox</h4>
        <p class="text-sm text-slate-600 leading-relaxed font-black italic uppercase tracking-wide mb-6">
          "Even though they have both male and female organs, they still need a partner to mate."
        </p>
        <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100 text-xs italic font-bold">
          Atomic Logic: <strong>Cross-fertilization</strong> is preferred to ensure genetic variation. They exchange sperm and store it in spermathecae before laying eggs in a cocoon produced by the <strong>Clitellum</strong>.
        </div>
      </div>
    </div>
  `,

  "repro-insects": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic">04. Reproduction in Cockroach & Housefly</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Cockroach -->
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-blue-400 font-black text-xl mb-4 italic uppercase underline">Cockroach</h4>
          <p class="text-xs text-slate-300 leading-relaxed italic font-bold mb-4">
            Incomplete Metamorphosis (Hemimetabolous).
          </p>
          <p class="text-[10px] font-black uppercase tracking-widest text-blue-300 italic underline underline-offset-4">Stages: Egg (in Ootheca) → Nymph → Adult.</p>
          <div class="absolute -right-4 -bottom-4 opacity-10 font-black text-6xl italic">NYMPH</div>
        </div>

        <!-- Housefly -->
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-xl mb-4 italic uppercase underline">Housefly</h4>
          <p class="text-xs text-slate-600 leading-relaxed italic font-bold mb-4">
            Complete Metamorphosis (Holometabolous).
          </p>
          <p class="text-[10px] font-black uppercase tracking-widest text-blue-700 italic underline underline-offset-4">Stages: Egg → Larva (Maggot) → Pupa → Adult.</p>
        </div>
      </div>
    </div>
  `,

  "repro-snail": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-amber-500 pb-2 uppercase tracking-tighter italic underline underline-offset-8">05. Reproduction in Garden Snail</h3>
      </section>

      <div class="p-10 bg-amber-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-amber-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-amber-400">Atomic Summary</h4>
          <p class="text-sm text-slate-100 leading-relaxed italic mb-8 font-bold underline decoration-amber-700 underline-offset-8">
            Garden snails are also hermaphrodites. They use a unique "Love Dart" during courtship to stimulate their partner before exchanging sperm.
          </p>
          <div class="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">Result: Eggs are buried in moist soil.</div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic uppercase">SNAIL</div>
      </div>
    </div>
  `
};

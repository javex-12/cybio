export const chap10Content: Record<string, string> = {
  "micro-class": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Classification of Microorganisms</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8 uppercase">
          Microorganisms are organisms too small to be seen with the naked eye. They require a microscope for observation.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-black italic tracking-tighter uppercase">
        <div class="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 shadow-sm">
          <h5 class="text-blue-600 mb-2">Bacteria</h5>
          <p class="text-[10px] text-slate-500">Unicellular Prokaryotes. Cocci, Bacilli, Spirilla.</p>
        </div>
        <div class="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 shadow-sm">
          <h5 class="text-indigo-600 mb-2">Viruses</h5>
          <p class="text-[10px] text-slate-500">Acellular. DNA or RNA in a protein coat.</p>
        </div>
        <div class="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 shadow-sm">
          <h5 class="text-amber-600 mb-2">Fungi</h5>
          <p class="text-[10px] text-slate-500">Yeasts (unicellular) and Moulds (multicellular).</p>
        </div>
      </div>
    </div>
  `,

  "micro-air-water": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Microorganisms in Air & Water</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          They are everywhere—in the air we breathe and the water we drink.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase">Microorganisms in Air</h4>
            <p class="text-sm text-indigo-100 leading-relaxed italic font-bold">
              Found as spores, cysts, or on dust particles. 
              <br/><br/>
              <strong>Atomic Fact:</strong> Most air microorganisms are non-pathogenic, but some cause diseases like TB and Common Cold.
            </p>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">AIR</div>
        </div>

        <div class="p-8 bg-white border-2 border-indigo-100 rounded-[2.5rem] shadow-lg">
          <h4 class="text-indigo-800 font-black text-xl mb-4 underline italic uppercase">Microorganisms in Water</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold">Mainly bacteria, protozoa, and algae.</p>
          <p class="text-[10px] text-slate-500 mt-4 italic font-medium underline decoration-slate-100">
            Atomic Concern: Water-borne pathogens cause <strong>Cholera</strong>, <strong>Typhoid</strong>, and <strong>Dysentery</strong>.
          </p>
        </div>
      </div>
    </div>
  `,

  "micro-carriers-benefits": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-emerald-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">03. Carriers & Beneficial Effects</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Carriers -->
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-emerald-900 text-lg uppercase mb-4 underline">Disease Carriers (Vectors)</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter uppercase text-emerald-700 underline decoration-emerald-200 underline-offset-4">
            <li>• Housefly: Cholera, Typhoid.</li>
            <li>• Mosquito: Malaria (Female Anopheles).</li>
            <li>• Tsetse fly: Sleeping sickness.</li>
          </ul>
        </div>

        <!-- Benefits -->
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline tracking-widest">Beneficial Effects</h4>
          <ul class="space-y-3 text-[10px] text-slate-300 italic font-bold underline decoration-slate-700 underline-offset-4">
            <li>1. Decomposition: Fungi and Bacteria recycling nutrients.</li>
            <li>2. Food Industry: Yeast in baking; Bacteria in Yogurt.</li>
            <li>3. Medicine: Production of Antibiotics (Penicillin).</li>
            <li>4. Digestion: Bacteria in the human gut synthesizing Vitamin K.</li>
          </ul>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">GOOD</div>
        </div>
      </div>
    </div>
  `
};

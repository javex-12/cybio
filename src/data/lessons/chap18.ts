export const chap18Content: Record<string, string> = {
  "breathing-mechanism": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Mechanism of Breathing</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Breathing is the physical process of inhalation and exhalation.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Inhalation (Inspiration)</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter text-blue-700 uppercase underline decoration-blue-100 underline-offset-4">
            <li>• Diaphragm contracts and flattens.</li>
            <li>• External Intercostal muscles contract.</li>
            <li>• Ribcage moves Up and Out.</li>
            <li>• Thoracic volume increases; Pressure decreases.</li>
            <li>• Air rushes IN.</li>
          </ul>
        </div>
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-indigo-900 text-lg uppercase mb-4 underline italic">Exhalation (Expiration)</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter text-indigo-700 uppercase underline decoration-indigo-100 underline-offset-4">
            <li>• Diaphragm relaxes and domes.</li>
            <li>• External Intercostal muscles relax.</li>
            <li>• Ribcage moves Down and In.</li>
            <li>• Thoracic volume decreases; Pressure increases.</li>
            <li>• Air rushes OUT.</li>
          </ul>
        </div>
      </div>
    </div>
  `,

  "cellular-respiration-deep": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Cellular Respiration Redux</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          The biochemical release of energy from glucose.
        </p>
      </section>

      <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400 italic">Glycolysis & Krebs Cycle</h4>
          <div class="space-y-6 text-sm text-indigo-100 leading-relaxed italic font-bold">
            <p class="p-4 bg-white/5 rounded-2xl border border-white/10 italic underline underline-offset-8 decoration-slate-700">1. Glycolysis: Occurs in the <strong>Cytoplasm</strong>. Breaks Glucose into Pyruvate. (2 ATP Net).</p>
            <p class="p-4 bg-white/5 rounded-2xl border border-white/10 italic underline underline-offset-8 decoration-slate-700">2. Krebs Cycle: Occurs in the <strong>Mitochondrial Matrix</strong>. Produces CO2 and Hydrogen carriers.</p>
            <p class="p-4 bg-white/5 rounded-2xl border border-white/10 italic underline underline-offset-8 decoration-slate-700">3. ETC: Occurs on the <strong>Cristae</strong>. Oxygen is the final acceptor. Yields massive ATP.</p>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">CELL</div>
      </div>
    </div>
  `
};

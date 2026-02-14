export const chap24Content: Record<string, string> = {
  "eye-anatomy": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. The Eye: Structure & Vision</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          The eye is a complex optical instrument that converts light into electrical signals.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Key Structures</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-slate-700 italic underline decoration-blue-100 underline-offset-4">
          <p>• <strong>Retina:</strong> The light-sensitive inner layer containing Rods (Dim light) and Cones (Color).</p>
          <p>• <strong>Iris:</strong> Controls the size of the Pupil (light entry).</p>
          <p>• <strong>Lens:</strong> Focuses light onto the retina via <strong>Accommodation</strong>.</p>
          <p>• <strong>Optic Nerve:</strong> Carries impulses to the Brain.</p>
        </div>
      </div>

      <div class="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic tracking-tighter uppercase underline">Accommodation</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-6 font-bold underline decoration-slate-700">
            The ability of the eye to focus on both near and distant objects by changing the curvature of the lens. 
            <br/><br/>
            <strong>Atomic Logic:</strong> Controlled by the Ciliary muscles and Suspensory ligaments.
          </p>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">FOCUS</div>
      </div>
    </div>
  `,

  "ear-anatomy": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. The Ear: Hearing & Balance</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline uppercase tracking-widest italic">Mechanism of Hearing</h4>
          <p class="text-xs text-slate-600 leading-relaxed italic font-bold mb-4">
            Pinna → Ear canal → Eardrum (Tympanum) → Ossicles → <strong>Cochlea</strong>.
          </p>
          <div class="p-4 bg-indigo-50 rounded-xl text-[10px] italic font-medium text-indigo-800">
            The <strong>Organ of Corti</strong> in the cochlea converts vibrations into nerve impulses.
          </div>
        </div>

        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase">Organ of Balance</h4>
            <p class="text-sm text-indigo-100 leading-relaxed italic font-bold mb-6">
              The <strong>Semicircular Canals</strong> in the inner ear.
            </p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic">
              They detect head rotation and maintain equilibrium.
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">STAY</div>
        </div>
      </div>
    </div>
  `,

  "other-senses": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">03. Skin, Nose & Tongue</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-bold italic tracking-tighter uppercase text-slate-600">
        <div class="p-6 bg-white border-2 border-rose-100 rounded-3xl shadow-sm">
          <h5 class="text-rose-600 font-black mb-2">Skin</h5>
          <p>Detects Pressure, Pain, Heat, and Cold via specialized receptors in the dermis.</p>
        </div>
        <div class="p-6 bg-white border-2 border-blue-100 rounded-3xl shadow-sm">
          <h5 class="text-blue-600 font-black mb-2">Nose (Olfaction)</h5>
          <p>Detects chemical vapours via Olfactory cells in the nasal cavity.</p>
        </div>
        <div class="p-6 bg-white border-2 border-emerald-100 rounded-3xl shadow-sm">
          <h5 class="text-emerald-600 font-black mb-2">Tongue (Taste)</h5>
          <p>Taste buds detect Sweet, Sour, Salt, and Bitter chemicals dissolved in saliva.</p>
        </div>
      </div>
    </div>
  `
};

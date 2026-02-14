export const chap16Content: Record<string, string> = {
  "digestive-anatomy": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Anatomy of the Alimentary Canal</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          The Alimentary Canal is a continuous muscular tube extending from the mouth to the anus.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">The Digestive Pathway</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-slate-700 italic">
          <div class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">
            <span class="font-black text-blue-600">Upper Tract:</span> Mouth, Oesophagus, Stomach.
          </div>
          <div class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">
            <span class="font-black text-blue-600">Lower Tract:</span> Small Intestine, Large Intestine, Rectum, Anus.
          </div>
        </div>
      </div>

      <div class="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic tracking-tighter uppercase underline">Peristalsis</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-6 font-bold underline decoration-slate-700">
            The rhythmic wave-like contraction and relaxation of the muscular walls of the gut that pushes food along. 
            <br/><br/>
            <strong>Atomic Logic:</strong> It is an involuntary action controlled by the autonomic nervous system.
          </p>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">WAVE</div>
      </div>
    </div>
  `,

  "mouth-stomach-digestion": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Digestion in the Mouth & Stomach</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Mouth -->
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline uppercase tracking-widest italic">The Mouth (Mechanical & Chemical)</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold mb-4">
            Teeth masticate food. Saliva contains <strong>Ptyalin</strong> (Salivary Amylase).
          </p>
          <div class="p-4 bg-indigo-50 rounded-xl text-xs italic font-medium text-indigo-800">
            <strong>Atomic Equation:</strong> Starch + Ptyalin → Maltose.
          </div>
        </div>

        <!-- Stomach -->
        <div class="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline uppercase italic">The Stomach (Acidic)</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic font-bold mb-6">
              Gastric juice contains HCl and enzymes (Pepsin, Rennin).
            </p>
            <div class="space-y-2 text-[10px] italic">
              <p>• <strong>HCl:</strong> Kills germs and provides acidic pH (2.0) for pepsin.</p>
              <p>• <strong>Pepsin:</strong> Proteins → Peptones.</p>
              <p>• <strong>Rennin:</strong> Curdles milk in infants.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  "intestine-absorption": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. The Small Intestine & Absorption</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase underline decoration-rose-200">
          The site of final digestion and nutrient absorption.
        </p>
      </section>

      <div class="p-10 bg-white border-4 border-rose-100 rounded-[3rem] shadow-xl relative overflow-hidden">
        <h4 class="text-rose-600 font-black text-2xl mb-6 tracking-widest uppercase underline">The Villi</h4>
        <p class="text-sm text-slate-600 leading-relaxed font-black italic uppercase tracking-wide mb-6">
          Finger-like projections that increase the surface area for absorption.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs italic font-bold">
          <div class="p-4 bg-rose-50 rounded-xl">Glucose and Amino Acids enter the <strong>Blood Capillaries</strong>.</div>
          <div class="p-4 bg-rose-50 rounded-xl">Fatty Acids and Glycerol enter the <strong>Lacteals</strong> (Lymph system).</div>
        </div>
      </div>
    </div>
  `,

  "liver-pancreas": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-emerald-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">04. The Liver & Pancreas</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-emerald-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">The Liver</h4>
          <p class="text-sm text-emerald-100 leading-relaxed italic font-bold underline decoration-emerald-700 mb-6">The body's chemical factory.</p>
          <ul class="space-y-2 text-xs">
            <li>• Produces <strong>Bile</strong> (Emulsifies fats).</li>
            <li>• <strong>Deamination:</strong> Breaks down excess amino acids.</li>
            <li>• <strong>Detoxification:</strong> Neutralizes poisons.</li>
            <li>• Stores glycogen.</li>
          </ul>
        </div>
        <div class="p-10 bg-blue-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-blue-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">The Pancreas</h4>
          <p class="text-sm text-blue-100 leading-relaxed italic font-bold underline decoration-blue-700 mb-6">Dual organ: Endocrine and Exocrine.</p>
          <ul class="space-y-2 text-xs">
            <li>• Produces <strong>Insulin</strong> (Regulates blood sugar).</li>
            <li>• Secretes <strong>Pancreatic Juice</strong> containing Amylase, Trypsin, and Lipase.</li>
          </ul>
        </div>
      </div>
    </div>
  `
};

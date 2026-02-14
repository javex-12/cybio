export const chap26Content: Record<string, string> = {
  "homeostasis-intro": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Principles of Homeostasis</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Homeostasis is the maintenance of a constant internal environment despite changes in the external environment.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Regulated Factors</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-slate-700 italic underline decoration-blue-100 underline-offset-4">
          <p>• Body Temperature (Thermoregulation).</p>
          <p>• Water and Salt levels (Osmoregulation).</p>
          <p>• Blood Glucose concentration.</p>
          <p>• Blood pH (Acid-Base balance).</p>
        </div>
      </div>
    </div>
  `,

  "osmo-thermo-reg": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">02. Osmoregulation & Thermoregulation</h3>
      </section>

      <div class="space-y-8">
        <!-- Osmoregulation -->
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline uppercase italic tracking-widest">Osmoregulation</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold mb-4">
            Controlled by the <strong>Kidneys</strong> and <strong>ADH</strong>.
          </p>
          <p class="text-xs text-slate-500 italic font-medium underline decoration-indigo-50">
            If blood is too concentrated, the pituitary releases more ADH, causing the kidney to reabsorb more water (Small amount of concentrated urine).
          </p>
        </div>

        <!-- Thermoregulation -->
        <div class="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline uppercase italic">Thermoregulation</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic font-bold mb-6">
              Maintenance of constant body temperature (37°C in humans).
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] italic">
              <p class="p-4 bg-white/5 rounded-xl border border-white/10"><strong>Hot Conditions:</strong> Vasodilation (vessels widen), Sweating, and Hair lies flat.</p>
              <p class="p-4 bg-white/5 rounded-xl border border-white/10"><strong>Cold Conditions:</strong> Vasoconstriction (vessels narrow), Shivering, and Goosebumps (hair stands up).</p>
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">STABLE</div>
        </div>
      </div>
    </div>
  `,

  "liver-homeostasis": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. Liver Functions in Homeostasis</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter underline decoration-rose-200">
          The liver is the primary homeostatic regulator.
        </p>
      </section>

      <div class="p-10 bg-white border-4 border-slate-100 rounded-[3rem] shadow-xl relative overflow-hidden">
        <h4 class="text-rose-600 font-black text-2xl mb-6 tracking-widest uppercase underline">Key Liver Processes</h4>
        <div class="space-y-6 text-sm font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-rose-50 underline-offset-4">
          <p>• <strong>Blood Sugar Regulation:</strong> Converts Glucose to Glycogen (via Insulin) or Glycogen to Glucose (via Glucagon).</p>
          <p>• <strong>Deamination:</strong> Converting excess amino acids into Urea.</p>
          <p>• <strong>Detoxification:</strong> Converting toxic substances (Alcohol, Drugs) into harmless ones.</p>
          <p>• <strong>Bile Production:</strong> For fat emulsification and neutralizing stomach acid.</p>
        </div>
      </div>
    </div>
  `
};

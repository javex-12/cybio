export const chap25Content: Record<string, string> = {
  "endocrine-system": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-emerald-600 pb-2 mb-6 uppercase italic tracking-tighter">01. The Endocrine System</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-emerald-200 underline-offset-8">
          The Endocrine system provides chemical coordination via <strong>Hormones</strong>.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">What are Hormones?</h4>
        <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-blue-200">
          Hormones are chemical messengers secreted by <strong>Ductless Glands</strong> directly into the bloodstream.
        </p>
        <div class="p-4 bg-white rounded-2xl border border-blue-200 text-[10px] font-black uppercase italic tracking-tighter text-blue-600">
          Atomic Logic: Unlike nerve impulses, hormones are slow but their effects are often long-lasting.
        </div>
      </div>
    </div>
  `,

  "major-glands": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">02. Pituitary, Thyroid & Adrenal Glands</h3>
      </section>

      <div class="space-y-8">
        <!-- Pituitary -->
        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-2xl mb-4 tracking-tighter uppercase underline italic">The Pituitary (Master Gland)</h4>
            <p class="text-sm text-indigo-100 leading-relaxed italic font-bold mb-6">Located at the base of the brain.</p>
            <ul class="space-y-2 text-xs font-bold underline decoration-indigo-700 underline-offset-4">
              <li>• ADH: Controls water reabsorption.</li>
              <li>• Growth Hormone (GH): Regulates body growth.</li>
              <li>• TSH: Stimulates the thyroid.</li>
            </ul>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">MASTER</div>
        </div>

        <!-- Thyroid and Adrenal -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg">
            <h4 class="font-black text-rose-600 text-xl mb-4 underline uppercase italic">The Thyroid</h4>
            <p class="text-xs text-slate-600 italic font-bold mb-4">Secretes <strong>Thyroxine</strong>.</p>
            <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest underline decoration-rose-50">Regulates basal metabolic rate (BMR). Iodine is essential for its production.</p>
          </div>
          <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg">
            <h4 class="font-black text-orange-600 text-xl mb-4 underline uppercase italic">The Adrenal</h4>
            <p class="text-xs text-slate-600 italic font-bold mb-4">Secretes <strong>Adrenaline</strong>.</p>
            <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest underline decoration-orange-50">The "Emergency" hormone. Prepares the body for 'Fight or Flight' by increasing heart rate and blood sugar.</p>
          </div>
        </div>
      </div>
    </div>
  `
};

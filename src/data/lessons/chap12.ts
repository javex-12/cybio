export const chap12Content: Record<string, string> = {
  "micro-control": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Control of Microorganisms</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Breaking the chain of infection is key to better health.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Sterilization Methods</h4>
          <ul class="space-y-4 text-xs font-bold italic tracking-tighter text-blue-700 uppercase underline decoration-blue-100 underline-offset-4">
            <li>• <strong>High Temperature:</strong> Boiling, Autoclaving (steam under pressure).</li>
            <li>• <strong>Chemicals:</strong> Disinfectants (on surfaces) and Antiseptics (on skin).</li>
            <li>• <strong>Radiation:</strong> UV light and Gamma rays for medical equipment.</li>
            <li>• <strong>Dehydration:</strong> Removing water to stop growth (Salting, Smoking).</li>
          </ul>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline tracking-widest">Personal Hygiene</h4>
          <p class="text-[10px] text-slate-300 italic mb-6 font-bold leading-relaxed underline underline-offset-8 decoration-slate-700">
            Hand washing, proper sewage disposal, and using clean water.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">CLEAN</div>
        </div>
      </div>
    </div>
  `,

  "public-health": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Public Health</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          The organized effort of society to keep everyone healthy.
        </p>
      </section>

      <div class="p-10 bg-indigo-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400">Public Health Functions</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm font-bold italic tracking-tighter uppercase leading-relaxed underline decoration-indigo-700 underline-offset-8">
            <div class="space-y-4">
              <p>1. Provision of clean water (Filtering, Chlorination).</p>
              <p>2. Refuse and Sewage disposal (Sanitary landfills).</p>
            </div>
            <div class="space-y-4">
              <p>3. Immunization programs (Vaccination schedules).</p>
              <p>4. Health education and disease surveillance.</p>
            </div>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">SOCIETY</div>
      </div>

      <div class="p-8 bg-rose-50 border-2 border-rose-100 rounded-[2.5rem] shadow-lg">
        <h4 class="text-rose-800 font-black text-lg mb-4 uppercase underline tracking-widest">Health Organizations</h4>
        <p class="text-xs italic font-bold leading-relaxed mb-4 underline decoration-rose-200 underline-offset-8">
          • <strong>WHO (World Health Organization):</strong> Global health coordination. <br/>
          • <strong>UNICEF:</strong> Focus on children's health and nutrition. <br/>
          • <strong>NCDC:</strong> Local disease control (in Nigeria).
        </p>
      </div>
    </div>
  `
};

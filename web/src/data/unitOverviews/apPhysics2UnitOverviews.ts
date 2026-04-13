import type { SubjectUnitOverview, UnitOverview } from './types'

const AP_PHYSICS_2_UNITS: UnitOverview[] = [
  {
    unitNumber: 1,
    title: 'Thermodynamics',
    subunits: [
      {
        id: '1-1',
          title: 'Kinetic Theory of Temperature and Pressure',
          summary:
            'The kinetic theory of gases provides a microscopic explanation for the macroscopic quantities of temperature and pressure. According to this model, a gas consists of a very large number of tiny particles (atoms or molecules) in constant, random motion. These particles collide elastically with one another and with the walls of their container. The temperature of a gas is directly proportional to the average translational kinetic energy of its molecules, expressed as \\(\\tfrac{3}{2} k_B T = \\tfrac{1}{2} m v_{\\text{rms}}^2\\), where \\(k_B\\) is Boltzmann\'s constant, \\(T\\) is absolute temperature in kelvins, \\(m\\) is the mass of a single molecule, and \\(v_{\\text{rms}}\\) is the root mean square speed of the molecules. This relationship means that temperature is not a measure of total energy but of the average energy per particle.\n\n' +
            'Pressure arises from the collective effect of countless molecular collisions against the walls of a container. Each collision transfers a small amount of momentum to the wall, and the net effect of billions of collisions per second produces a steady, measurable force per unit area. The kinetic theory result for pressure is \\(P = \\tfrac{1}{3} \\tfrac{N}{V} m v_{\\text{rms}}^2\\), where \\(N/V\\) is the number density of molecules. This shows that pressure increases when you either pack more molecules into the same volume, increase their mass, or raise their speeds (that is, raise the temperature).\n\n' +
            'To use kinetic theory in problem solving, start by identifying whether the question asks about temperature, pressure, or molecular speed. Use \\(K_{\\text{avg}} = \\tfrac{3}{2} k_B T\\) to connect temperature to average kinetic energy, and use \\(v_{\\text{rms}} = \\sqrt{3 k_B T / m}\\) to find root mean square speeds. Remember that all temperatures must be in kelvins. When comparing different gases at the same temperature, note that lighter molecules move faster on average because kinetic energy depends on both mass and speed. These microscopic relationships underpin all the macroscopic gas laws discussed in subsequent sections.',
          keyIdeas: [
            'Temperature measures the average translational kinetic energy of gas molecules: \\(K_{\\text{avg}} = \\tfrac{3}{2} k_B T\\).',
            'Pressure results from the cumulative momentum transfer of molecular collisions with container walls.',
            'Root mean square speed is given by \\(v_{\\text{rms}} = \\sqrt{3 k_B T / m}\\); lighter molecules move faster at the same temperature.',
            'All kinetic theory calculations require temperature in kelvins.',
          ],
          exampleCode:
            'Example question: Nitrogen gas (\\(N_2\\), molecular mass \\(4.65 \\times 10^{-26}\\,\\text{kg}\\)) is at a temperature of 300 K. (a) Calculate the average translational kinetic energy of a nitrogen molecule. (b) Find the root mean square speed of the nitrogen molecules.\n\n' +
            'Step 1: Use \\(K_{\\text{avg}} = \\tfrac{3}{2} k_B T = \\tfrac{3}{2}(1.38 \\times 10^{-23})(300) \\approx 6.21 \\times 10^{-21}\\,\\text{J}\\).\n' +
            'Step 2: Use \\(v_{\\text{rms}} = \\sqrt{3 k_B T / m} = \\sqrt{3(1.38 \\times 10^{-23})(300) / (4.65 \\times 10^{-26})} \\approx 517\\,\\text{m/s}\\).',
          exampleExplanation:
            'Apply the kinetic theory formulas directly, ensuring temperature is in kelvins and mass is the mass of a single molecule, not a mole of molecules.',
        },
        {
          id: '1-2',
          title: 'The Ideal Gas Law',
          summary:
            'The ideal gas law combines the empirical relationships discovered by Boyle, Charles, and Gay Lussac into a single equation: \\(PV = nRT\\), where \\(P\\) is pressure, \\(V\\) is volume, \\(n\\) is the number of moles of gas, \\(R\\) is the universal gas constant (\\(8.314\\,\\mathrm{J/(mol\\cdot K)}\\)), and \\(T\\) is absolute temperature. Equivalently, when working with individual molecules instead of moles, the law can be written as \\(PV = Nk_BT\\), where \\(N\\) is the total number of molecules and \\(k_B\\) is Boltzmann\'s constant. This equation is a powerful tool for predicting how a gas responds when any of its state variables change.\n\n' +
            'An ideal gas is a theoretical model in which the molecules occupy negligible volume and exert no intermolecular forces except during brief elastic collisions. Real gases approximate ideal behavior well at high temperatures and low pressures, where molecules are far apart and moving fast enough that attractive forces are negligible. When applying the ideal gas law to processes in which a fixed amount of gas changes state, the combined form \\(P_1 V_1 / T_1 = P_2 V_2 / T_2\\) is especially useful because it eliminates the need to know \\(n\\) or \\(R\\) explicitly.\n\n' +
            'To solve ideal gas law problems, first identify which variables are known and which are changing. Make sure all quantities are in SI units, with temperature in kelvins. If the gas undergoes a process at constant temperature (isothermal), constant pressure (isobaric), or constant volume (isochoric), simplify the equation accordingly. For instance, at constant temperature, \\(P_1 V_1 = P_2 V_2\\) (Boyle\'s law); at constant pressure, \\(V_1/T_1 = V_2/T_2\\) (Charles\'s law). Recognizing these special cases makes algebraic work more straightforward and helps you check whether your answer makes physical sense.',
          keyIdeas: [
            'The ideal gas law is \\(PV = nRT\\) or equivalently \\(PV = Nk_BT\\).',
            'Ideal gases assume negligible molecular volume and no intermolecular forces.',
            'For a fixed amount of gas, \\(P_1 V_1 / T_1 = P_2 V_2 / T_2\\) relates initial and final states.',
            'Special cases include isothermal (\\(PV = \\text{const}\\)), isobaric (\\(V/T = \\text{const}\\)), and isochoric (\\(P/T = \\text{const}\\)) processes.',
          ],
          exampleCode:
            'Example question: A sealed container holds 2.0 mol of an ideal gas at 1.0 \\(\\times 10^5\\,\\text{Pa}\\) and 300 K. The gas is heated at constant volume until its temperature reaches 600 K. (a) Find the initial volume of the gas. (b) Find the final pressure.\n\n' +
            'Step 1: Use \\(PV = nRT\\) to find the initial volume: \\(V = nRT/P = (2.0)(8.314)(300)/(1.0 \\times 10^5) \\approx 0.050\\,\\text{m}^3\\).\n' +
            'Step 2: At constant volume, \\(P_1/T_1 = P_2/T_2\\), so \\(P_2 = P_1(T_2/T_1) = (1.0 \\times 10^5)(600/300) = 2.0 \\times 10^5\\,\\text{Pa}\\).',
          exampleExplanation:
            'Use the ideal gas law to find an unknown state variable, then apply the constant volume condition to relate pressure and temperature changes directly.',
        },
        {
          id: '1-3',
          title: 'Thermal Energy Transfer and Equilibrium',
          summary:
            'Thermal energy transfer occurs whenever two systems at different temperatures interact. Energy flows spontaneously from the hotter system to the cooler one until both reach the same temperature, a condition called thermal equilibrium. This principle is sometimes stated as the Zeroth Law of Thermodynamics: if system A is in thermal equilibrium with system C, and system B is also in thermal equilibrium with system C, then A and B are in thermal equilibrium with each other. This law justifies the use of thermometers and the very concept of temperature as a consistently measurable quantity.\n\n' +
            'There are three primary mechanisms of thermal energy transfer. Conduction is the transfer of energy through direct molecular contact, as when heat passes through a metal rod from a flame to your hand. Convection involves the bulk movement of fluid carrying thermal energy, as warm air rising from a heater to circulate through a room. Radiation is the transfer of energy through electromagnetic waves, requiring no material medium at all, as in the warmth you feel from the sun. In most real situations, more than one mechanism operates simultaneously.\n\n' +
            'In problem solving, thermal equilibrium problems often involve setting the heat lost by the hotter object equal to the heat gained by the cooler object: \\(Q_{\\text{lost}} = Q_{\\text{gained}}\\). This relies on conservation of energy in an isolated system. The direction of energy flow is always from higher temperature to lower temperature, and the process continues until a uniform final temperature is established. Identifying the system boundaries and whether the system is truly isolated (no energy entering or leaving) is an essential first step in any equilibrium calculation.',
          keyIdeas: [
            'Thermal energy transfers spontaneously from hotter objects to cooler ones until equilibrium is reached.',
            'The Zeroth Law of Thermodynamics establishes temperature as a well defined, transitive property.',
            'Conduction, convection, and radiation are the three mechanisms of thermal energy transfer.',
            'In an isolated system at equilibrium, total energy is conserved: \\(Q_{\\text{lost}} = Q_{\\text{gained}}\\).',
          ],
          exampleCode:
            'Example question: A 0.50 kg block of copper at 200°C is placed in 1.0 kg of water at 20°C in an insulated container. The specific heat of copper is 385 J/(kg·K) and water is 4186 J/(kg·K). Find the final equilibrium temperature.\n\n' +
            'Step 1: Set heat lost by copper equal to heat gained by water: \\(m_c c_c (T_{c,i} - T_f) = m_w c_w (T_f - T_{w,i})\\).\n' +
            'Step 2: Substitute: \\((0.50)(385)(200 - T_f) = (1.0)(4186)(T_f - 20)\\).\n' +
            'Step 3: Simplify: \\(192.5(200 - T_f) = 4186(T_f - 20)\\). Expanding gives \\(38500 - 192.5 T_f = 4186 T_f - 83720\\). Solving: \\(122220 = 4378.5 T_f\\), so \\(T_f \\approx 27.9°\\text{C}\\).',
          exampleExplanation:
            'Apply conservation of energy in an insulated system by equating the heat lost by the hot object to the heat gained by the cold object, then solve for the unknown final temperature.',
        },
        {
          id: '1-4',
          title: 'The First Law of Thermodynamics',
          summary:
            'The First Law of Thermodynamics is a statement of energy conservation applied to thermodynamic systems. It is written as \\(\\Delta U = Q - W\\), where \\(\\Delta U\\) is the change in internal energy of the system, \\(Q\\) is the net heat added to the system, and \\(W\\) is the net work done by the system on its surroundings. Internal energy for an ideal gas depends only on temperature, so \\(\\Delta U = 0\\) for any isothermal process. When heat is added to a system, it can increase the internal energy, do work (such as expanding against a piston), or both.\n\n' +
            'Several important thermodynamic processes are defined by holding one variable constant. In an isothermal process (constant temperature), all heat added is converted into work, and \\(\\Delta U = 0\\). In an isochoric (constant volume) process, no work is done because the volume does not change, so \\(W = 0\\) and all heat goes into changing internal energy. In an isobaric (constant pressure) process, work is \\(W = P \\Delta V\\), and heat splits between internal energy change and work. In an adiabatic process, no heat enters or leaves the system (\\(Q = 0\\)), so any work done comes at the expense of internal energy, causing the temperature to drop if the gas expands.\n\n' +
            'PV diagrams are essential tools for visualizing thermodynamic processes. On a PV diagram, the work done by the gas equals the area under the process curve. A closed loop on a PV diagram represents a thermodynamic cycle, where the net work done equals the enclosed area. To solve First Law problems, identify the type of process, determine which variables are zero or constant, and apply \\(\\Delta U = Q - W\\) with appropriate substitutions. For an ideal monatomic gas, \\(\\Delta U = \\tfrac{3}{2} n R \\Delta T\\), providing a direct link between internal energy changes and temperature changes.',
          keyIdeas: [
            'The First Law of Thermodynamics: \\(\\Delta U = Q - W\\) (energy conservation for thermodynamic systems).',
            'Key processes: isothermal (\\(\\Delta U = 0\\)), isochoric (\\(W = 0\\)), isobaric (\\(W = P\\Delta V\\)), adiabatic (\\(Q = 0\\)).',
            'On a PV diagram, the work done by the gas is the area under the curve.',
            'For an ideal monatomic gas, \\(\\Delta U = \\tfrac{3}{2} n R \\Delta T\\).',
          ],
          exampleCode:
            'Example question: An ideal monatomic gas undergoes an isobaric expansion at \\(P = 2.0 \\times 10^5\\,\\text{Pa}\\). Its volume increases from 0.010 m\\(^3\\) to 0.030 m\\(^3\\), and 8000 J of heat is added. (a) Find the work done by the gas. (b) Find the change in internal energy.\n\n' +
            'Step 1: Work done at constant pressure: \\(W = P \\Delta V = (2.0 \\times 10^5)(0.030 - 0.010) = 4000\\,\\text{J}\\).\n' +
            'Step 2: Apply the First Law: \\(\\Delta U = Q - W = 8000 - 4000 = 4000\\,\\text{J}\\).',
          exampleExplanation:
            'For an isobaric process, compute work using \\(W = P \\Delta V\\), then apply the First Law to find the change in internal energy from the heat input and work output.',
        },
        {
          id: '1-5',
          title: 'Specific Heat and Thermal Conductivity',
          summary:
            'Specific heat capacity describes how much energy is needed to raise the temperature of a unit mass of a substance by one degree. The relationship is \\(Q = mc\\Delta T\\), where \\(Q\\) is the heat transferred, \\(m\\) is the mass, \\(c\\) is the specific heat capacity, and \\(\\Delta T\\) is the temperature change. Substances with high specific heats, such as water (\\(c \\approx 4186\\,\\mathrm{J/(kg\\cdot K)}\\)), require large amounts of energy to change temperature, which is why coastal climates are more moderate than inland ones. Metals typically have low specific heats, meaning they heat up and cool down quickly.\n\n' +
            'When a substance changes phase (melting, freezing, boiling, condensing), energy is transferred without a change in temperature. The energy required for a phase change is \\(Q = mL\\), where \\(L\\) is the latent heat of the transition: the latent heat of fusion for melting and freezing, and the latent heat of vaporization for boiling and condensing. During a phase change, added energy breaks or forms intermolecular bonds rather than increasing kinetic energy, which is why temperature remains constant throughout the transition.\n\n' +
            'Thermal conductivity measures how readily a material conducts heat. The rate of heat flow through a slab of material is given by \\(P = kA\\Delta T / L\\), where \\(k\\) is the thermal conductivity, \\(A\\) is the cross sectional area, \\(\\Delta T\\) is the temperature difference across the slab, and \\(L\\) is the thickness. Materials with high thermal conductivity (like metals) are good conductors, while materials with low thermal conductivity (like wood or foam) are insulators. In solving problems, determine whether the process involves a temperature change (use \\(Q = mc\\Delta T\\)), a phase change (use \\(Q = mL\\)), or steady state conduction (use the conduction rate equation).',
          keyIdeas: [
            'Specific heat: \\(Q = mc\\Delta T\\) relates heat, mass, and temperature change.',
            'Latent heat: \\(Q = mL\\) gives the energy for phase changes at constant temperature.',
            'Thermal conductivity: \\(P = kA\\Delta T / L\\) gives the rate of heat conduction through a material.',
            'High specific heat means slow temperature changes; high thermal conductivity means rapid heat transfer.',
          ],
          exampleCode:
            'Example question: How much energy is required to heat 0.50 kg of ice at 0°C to steam at 100°C? Use \\(c_{\\text{water}} = 4186\\,\\mathrm{J/(kg\\cdot K)}\\), \\(L_f = 3.34 \\times 10^5\\,\\text{J/kg}\\), \\(L_v = 2.26 \\times 10^6\\,\\text{J/kg}\\).\n\n' +
            'Step 1: Melt the ice: \\(Q_1 = mL_f = (0.50)(3.34 \\times 10^5) = 1.67 \\times 10^5\\,\\text{J}\\).\n' +
            'Step 2: Heat the water from 0°C to 100°C: \\(Q_2 = mc\\Delta T = (0.50)(4186)(100) = 2.09 \\times 10^5\\,\\text{J}\\).\n' +
            'Step 3: Boil the water: \\(Q_3 = mL_v = (0.50)(2.26 \\times 10^6) = 1.13 \\times 10^6\\,\\text{J}\\).\n' +
            'Step 4: Total energy: \\(Q = Q_1 + Q_2 + Q_3 \\approx 1.51 \\times 10^6\\,\\text{J}\\).',
          exampleExplanation:
            'Break the process into stages: phase change (melting), temperature change (heating liquid), and phase change (vaporization), computing the energy for each stage and summing them.',
        },
        {
          id: '1-6',
          title: 'Entropy and the Second Law of Thermodynamics',
          summary:
            'Entropy is a thermodynamic quantity that measures the disorder or the number of microscopic arrangements (microstates) available to a system. The Second Law of Thermodynamics states that the total entropy of an isolated system never decreases; in any real (irreversible) process, the total entropy of the system plus its surroundings always increases. Only in idealized reversible processes does entropy remain constant. This law explains the directionality of natural processes: heat flows from hot to cold, gases expand to fill their containers, and mixed substances do not spontaneously unmix.\n\n' +
            'For a reversible process at constant temperature, the entropy change is \\(\\Delta S = Q/T\\), where \\(Q\\) is the heat transferred and \\(T\\) is the absolute temperature. When heat flows from a hot reservoir at \\(T_H\\) to a cold reservoir at \\(T_C\\), the entropy decrease of the hot reservoir (\\(Q/T_H\\)) is smaller in magnitude than the entropy increase of the cold reservoir (\\(Q/T_C\\)), so the net entropy change is positive. This is a concrete mathematical statement of why heat flows spontaneously from hot to cold but not the reverse.\n\n' +
            'The Second Law also limits the efficiency of heat engines. A heat engine takes in heat \\(Q_H\\) from a hot reservoir, converts some of it into work \\(W\\), and exhausts waste heat \\(Q_C\\) to a cold reservoir. The efficiency is \\(e = W/Q_H = 1 - Q_C/Q_H\\). The maximum possible efficiency is that of a Carnot engine: \\(e_{\\text{Carnot}} = 1 - T_C/T_H\\), where temperatures are in kelvins. No real engine can exceed this limit. In solving entropy and Second Law problems, always check that total entropy is non decreasing, use absolute temperatures, and remember that higher temperature differences between reservoirs allow more efficient energy conversion.',
          keyIdeas: [
            'Entropy measures disorder; \\(\\Delta S = Q/T\\) for reversible processes at constant temperature.',
            'The Second Law: total entropy of an isolated system never decreases.',
            'Heat naturally flows from hot to cold because this increases total entropy.',
            'Maximum heat engine efficiency is the Carnot limit: \\(e_{\\text{Carnot}} = 1 - T_C/T_H\\).',
          ],
          exampleCode:
            'Example question: A heat engine operates between a hot reservoir at 600 K and a cold reservoir at 300 K. It absorbs 1000 J of heat per cycle. (a) What is the maximum possible efficiency? (b) What is the maximum work output per cycle?\n\n' +
            'Step 1: Carnot efficiency: \\(e_{\\text{max}} = 1 - T_C/T_H = 1 - 300/600 = 0.50\\) or 50%.\n' +
            'Step 2: Maximum work: \\(W_{\\text{max}} = e_{\\text{max}} \\times Q_H = (0.50)(1000) = 500\\,\\text{J}\\).',
          exampleExplanation:
            'Apply the Carnot efficiency formula using absolute temperatures, then multiply by the heat input to find the maximum theoretical work output.',
        },
      ],
    },
    {
      unitNumber: 2,
      title: 'Fluid Systems',
      subunits: [
        {
          id: '2-1',
          title: 'Internal Structure and Density',
          summary:
            'Fluids are substances that can flow and take the shape of their container, including both liquids and gases. Unlike solids, whose particles are locked into place, fluid particles move freely past one another. In liquids, the particles are relatively close together but still mobile; in gases, the particles are much farther apart and move rapidly in all directions. These microscopic arrangements explain why gases are highly compressible while most liquids are not.\n\n' +
            'Density is a key property that characterizes how much mass is contained in a given volume. It is defined as \\(\\rho = m/V\\), where \\(m\\) is mass and \\(V\\) is volume. Objects and fluids with higher density contain more mass in the same space than those with lower density. Density determines whether objects float or sink in a fluid: if an object’s average density is less than that of the fluid, it will float; if greater, it will sink.\n\n' +
            'In many natural and engineered systems, density variations drive fluid behavior. Warm air rises because it is less dense than cooler surrounding air; saltwater and freshwater layers in the ocean arrange themselves according to density; and hot fluid in convection currents rises while cooler fluid sinks. Understanding how density differences produce buoyancy and flow patterns is essential for explaining weather, ocean circulation, and many engineering applications.\n\n' +
            'To use density in problem solving, first compute \\(\\rho = m/V\\) for the relevant substance or use a tabulated value. Compare densities to predict floating or sinking behavior, or use density in fluid‑statics equations like pressure versus depth. When objects are partially submerged, you will later combine density with volume displaced to compute buoyant forces and analyze equilibrium conditions.',
          keyIdeas: [
            'Fluids include liquids and gases, whose particles move freely and allow flow.',
            'Density is defined as \\(\\rho = m/V\\) and determines many floating and sinking behaviors.',
            'Density differences in fluids drive buoyancy and large‑scale circulation patterns.',
            'Density is a foundational quantity for later fluid‑statics and buoyancy calculations.',
          ],
          exampleCode:
            'Example question: A small metal object has a mass of 0.24 kg and displaces 3.0 \\(\\text{cm}^3\\) of water when fully submerged. (a) Calculate its density in \\(\\text{kg/m}^3\\). (b) Based on its density, would this object float or sink if gently placed in water? \n\n' +
            'Step 1: Convert the displaced volume to cubic meters: \\(3.0\\,\\text{cm}^3 = 3.0 \\times 10^{-6}\\,\\text{m}^3\\). Compute density using \\(\\rho = m/V\\): \\(\\rho = 0.24 / (3.0 \\times 10^{-6}) = 8.0 \\times 10^4\\,\\text{kg/m}^3\\). \n' +
            'Step 2: Compare this density to that of water (\\(\\approx 1.0 \\times 10^3\\,\\text{kg/m}^3\\)). Since the object’s density is much greater than water’s, it will sink when placed in water.',
          exampleExplanation:
            'Compute density from mass and volume, convert units carefully, then compare to the fluid’s density to predict whether an object will float or sink.',
        },
        {
          id: '2-2',
          title: 'Pressure in Fluids',
          summary:
            'Pressure in a fluid measures how much force is exerted per unit area. It is defined as \\(P = F/A\\), where \\(F\\) is the normal force acting on an area \\(A\\). In fluids, pressure arises from the random motion and collisions of fluid particles with surfaces and with each other. The SI unit of pressure is the pascal (Pa), equal to one newton per square meter.\n\n' +
            'In a fluid at rest, pressure increases with depth because the fluid above exerts weight on the layers below. The pressure at a depth \\(h\\) in a fluid of density \\(\\rho\\) under gravity \\(g\\) is given by \\(P = P_0 + \\rho g h\\), where \\(P_0\\) is the pressure at the surface. This relationship explains why divers experience greater pressure as they go deeper underwater and why submarines and dams must be designed to withstand high pressures at depth.\n\n' +
            'Pressure in a fluid acts equally in all directions at a point, pushing on the surfaces of objects immersed in the fluid. Differences in pressure between different depths or locations lead to net forces, such as buoyant forces or flows from high‑pressure regions to low‑pressure regions.\n\n' +
            'To solve basic fluid‑pressure problems, identify the depth and density of the fluid and apply \\(P = P_0 + \\rho g h\\). Decide whether you need absolute pressure (including atmospheric pressure) or gauge pressure (pressure above atmospheric). Draw diagrams showing depths and surfaces, and use pressure differences to compute forces on submerged areas or to reason about why fluids move from one place to another.',
          keyIdeas: [
            'Pressure is force per unit area: \\(P = F/A\\), measured in pascals (Pa).',
            'In a static fluid, pressure increases with depth according to \\(P = P_0 + \\rho g h\\).',
            'Fluid pressure at a point acts equally in all directions.',
            'Pressure differences across surfaces produce net forces that can compress, support, or accelerate objects.',
          ],
          exampleCode:
            'Example question: A diver swims to a depth of 8.0 m in a freshwater lake. (a) Find the absolute pressure at this depth, given atmospheric pressure \\(P_0 \\approx 1.0 \\times 10^5\\,\\text{Pa}\\) and water density \\(\\rho = 1000\\,\\text{kg/m}^3\\). (b) What is the net upward force on a horizontal hatch of area 0.80 \\(\\text{m}^2\\) at this depth due to the water pressure alone? \n\n' +
            'Step 1: Use \\(P = P_0 + \\rho g h\\). Here \\(P = 1.0 \\times 10^5 + (1000)(9.8)(8.0) \\approx 1.78 \\times 10^5\\,\\text{Pa}\\). \n' +
            'Step 2: The gauge pressure from the water is \\(\\Delta P = \\rho g h \\approx 7.8 \\times 10^4\\,\\text{Pa}\\). The net force from the water on the hatch is \\(F = \\Delta P A = (7.8 \\times 10^4)(0.80) \\approx 6.2 \\times 10^4\\,\\text{N}\\) upward.',
          exampleExplanation:
            'First find pressure at depth using \\(P = P_0 + \\rho g h\\), then multiply the gauge pressure by area to obtain the net fluid force on a submerged surface.',
        },
        {
          id: '2-3',
          title: 'Fluids and Newton’s Laws',
          summary:
            'Newton’s laws of motion apply to fluids just as they do to solids, but in fluids the forces are often distributed and arise from pressure differences. One of the most important fluid forces is buoyant force, which explains why some objects float while others sink. According to Archimedes’ Principle, the buoyant force on an object immersed in a fluid equals the weight of the fluid displaced by that object.\n\n' +
            'If the buoyant force equals the object’s weight, the object floats at rest or with constant velocity in the fluid. If the buoyant force is greater than the weight, the object accelerates upward; if less, it accelerates downward. These behaviors can be analyzed by drawing free‑body diagrams for objects in fluids, including weight downward and buoyant force upward, and applying Newton’s Second Law in the vertical direction.\n\n' +
            'Fluids in motion also exert forces that can accelerate objects, such as drag forces opposing motion through air or water. While detailed drag formulas can be complex, qualitative understanding of how drag grows with speed and cross‑sectional area is often sufficient in AP Physics 2 contexts.\n\n' +
            'To solve buoyancy and fluid‑force problems, begin by determining the volume of fluid displaced by the object and use the fluid density to find the weight of that fluid (\\(\\rho V g\\)). This gives the buoyant force. Draw a free‑body diagram for the object including weight and buoyant force, then apply \\(\\sum F_y = m a_y\\) to determine whether the object sinks, floats, or rises and to calculate its acceleration if it is not in equilibrium.',
          keyIdeas: [
            'Archimedes’ Principle: buoyant force equals the weight of displaced fluid.',
            'Objects float, sink, or rise depending on the balance of buoyant force and weight.',
            'Free‑body diagrams for immersed objects include both weight and buoyant force.',
            'Newton’s laws apply to fluids and submerged objects, with forces arising from pressure differences and drag.',
          ],
          exampleCode:
            'Example question: A solid cube of side 0.20 m and density 500 \\(\\text{kg/m}^3\\) is gently placed in water of density 1000 \\(\\text{kg/m}^3\\). (a) What fraction of the cube’s volume is submerged at equilibrium? (b) What is the magnitude of the buoyant force on the cube? \n\n' +
            'Step 1: At equilibrium, the upward buoyant force equals the cube’s weight: \\(F_B = W_{\\text{cube}}\\). Using \\(F_B = \\rho_{\\text{water}} g V_{\\text{sub}}\\) and \\(W_{\\text{cube}} = \\rho_{\\text{cube}} g V\\), set them equal to get \\(\\rho_{\\text{water}} g V_{\\text{sub}} = \\rho_{\\text{cube}} g V\\). \n' +
            'Step 2: Cancel \\(g\\) and solve for the submerged fraction: \\(V_{\\text{sub}}/V = \\rho_{\\text{cube}} / \\rho_{\\text{water}} = 500/1000 = 0.50\\), so half the cube’s volume is submerged. \n' +
            'Step 3: Compute the cube’s volume: \\(V = (0.20)^3 = 0.0080\\,\\text{m}^3\\), so \\(V_{\\text{sub}} = 0.0040\\,\\text{m}^3\\). The buoyant force is then \\(F_B = \\rho_{\\text{water}} g V_{\\text{sub}} = (1000)(9.8)(0.0040) \\approx 39\\,\\text{N}\\).',
          exampleExplanation:
            'Apply Archimedes’ Principle by equating buoyant force to weight at equilibrium, use density ratios to find the submerged fraction, then plug into \\(F_B = \\rho V g\\) to compute the buoyant force.',
        },
        {
          id: '2-4',
          title: 'Fluids and Conservation Laws',
          summary:
            'Fluid motion is governed by conservation laws of mass and energy. For incompressible, steady flow through a pipe or channel, the continuity equation expresses conservation of mass: \\(A_1 v_1 = A_2 v_2\\), where \\(A\\) is cross‑sectional area and \\(v\\) is flow speed. If a pipe narrows, the fluid must speed up to carry the same volume per unit time, and if it widens, the fluid slows down.\n\n' +
            'Bernoulli’s equation is a statement of energy conservation for flowing fluids. In one common form, it reads \\(P + \\tfrac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}\\) along a streamline, combining pressure energy, kinetic energy per unit volume, and gravitational potential energy per unit volume. Where fluid speeds up, the \\(\\tfrac{1}{2} \\rho v^2\\) term increases, so the pressure term \\(P\\) must decrease if height \\(h\\) stays the same, and vice versa.\n\n' +
            'These relationships explain many everyday phenomena. Airplane wings create lift because air moves faster over the top surface than below, leading to lower pressure above the wing. Water from a faucet speeds up as it falls, narrowing the stream, because gravitational potential energy converts into kinetic energy while continuity maintains a constant flow rate.\n\n' +
            'To solve fluid‑flow problems using conservation laws, first decide whether the fluid can be treated as incompressible and the flow as steady. Apply the continuity equation to relate speeds and areas at different points. Then, if needed, apply Bernoulli’s equation between two locations along a streamline, choosing points where you know or can relate pressure, speed, and height. Keep track of which terms can be neglected (for example, height changes in horizontal pipes) to simplify the algebra and focus on the main physical effect.',
          keyIdeas: [
            'The continuity equation, \\(A_1 v_1 = A_2 v_2\\), expresses conservation of mass in steady incompressible flow.',
            "Bernoulli’s equation combines pressure, kinetic, and gravitational potential energy per unit volume along a streamline.",
            'Faster fluid flow is associated with lower pressure in many practical situations.',
            'Applying continuity and Bernoulli together explains a wide range of fluid‑flow behaviors in pipes and around objects.',
          ],
          exampleCode:
            'Example question: Water flows steadily through a horizontal pipe that narrows from an area of 4.0 \\(\\text{cm}^2\\) to 1.0 \\(\\text{cm}^2\\). The speed of the water in the wide section is 1.5 m/s and the pressure there is \\(2.0 \\times 10^5\\,\\text{Pa}\\). (a) Find the speed in the narrow section. (b) Assuming the pipe is horizontal and the fluid is incompressible, find the pressure in the narrow section. \n\n' +
            'Step 1: Use continuity, \\(A_1 v_1 = A_2 v_2\\). Since \\(A_2 = (1.0/4.0) A_1\\), the speed in the narrow section is \\(v_2 = (A_1/A_2) v_1 = 4.0 \\times 1.5 = 6.0\\,\\text{m/s}\\). \n' +
            'Step 2: Apply Bernoulli’s equation between the two horizontal sections: \\(P_1 + \\tfrac{1}{2} \\rho v_1^2 = P_2 + \\tfrac{1}{2} \\rho v_2^2\\). Solve for \\(P_2\\): \\(P_2 = P_1 + \\tfrac{1}{2} \\rho (v_1^2 - v_2^2)\\). \n' +
            'Step 3: With water density \\(\\rho \\approx 1000\\,\\text{kg/m}^3\\), substitute values: \\(P_2 = 2.0 \\times 10^5 + \\tfrac{1}{2} (1000)(1.5^2 - 6.0^2)\\). This gives \\(P_2 \\approx 2.0 \\times 10^5 - 1.7 \\times 10^4 \\approx 1.8 \\times 10^5\\,\\text{Pa}\\), which is lower than \\(P_1\\) because the fluid speeds up.',
          exampleExplanation:
            'Use continuity to relate flow speeds in different cross‑sections, then apply Bernoulli’s equation along a horizontal streamline to connect changes in speed with changes in pressure.',
        },
      ],
    },
    {
      unitNumber: 3,
      title: 'Electric Force, Field, and Potential',
      subunits: [
        {
          id: '3-1',
          title: 'Electric Charge and Electric Force',
          summary:
            'Electric charge is a fundamental property of matter that comes in two types: positive and negative. Like charges repel each other, and unlike charges attract. Charge is quantized, meaning it exists in integer multiples of the elementary charge \\(e \\approx 1.6 \\times 10^{-19}\\,\\text{C}\\). Protons carry a charge of \\(+e\\) and electrons carry a charge of \\(-e\\). Charge is also conserved: in any process, the total charge of an isolated system remains constant, though charge can be transferred from one object to another.\n\n' +
            'The force between two point charges is described by Coulomb\'s law: \\(F = k|q_1 q_2|/r^2\\), where \\(k \\approx 8.99 \\times 10^9\\,\\mathrm{N\\cdot m^2/C^2}\\) is Coulomb\'s constant, \\(q_1\\) and \\(q_2\\) are the charges, and \\(r\\) is the distance between them. This is an inverse square law, structurally identical to Newton\'s law of gravitation but vastly stronger in magnitude. Unlike gravity, which is always attractive, the electric force can be either attractive or repulsive depending on the signs of the charges involved.\n\n' +
            'When multiple charges are present, the net force on any one charge is the vector sum of the individual Coulomb forces from all other charges. This is called the superposition principle. To solve problems involving Coulomb\'s law, draw a diagram showing all charges and the distances between them. Calculate the magnitude of each pairwise force, determine the direction (attraction or repulsion), and then add the force vectors using components. Pay careful attention to signs and directions, as the vector nature of force is critical for obtaining the correct net result.',
          keyIdeas: [
            'Charge comes in two types (positive and negative), is quantized in multiples of \\(e\\), and is conserved.',
            'Coulomb\'s law: \\(F = k|q_1 q_2|/r^2\\); an inverse square law for electric force.',
            'Electric force can be attractive or repulsive, unlike gravity.',
            'Superposition: the net force on a charge is the vector sum of all individual Coulomb forces.',
          ],
          exampleCode:
            'Example question: Two point charges, \\(q_1 = +3.0\\,\\mu\\text{C}\\) and \\(q_2 = -5.0\\,\\mu\\text{C}\\), are separated by 0.20 m. (a) Find the magnitude of the electric force between them. (b) Is the force attractive or repulsive?\n\n' +
            'Step 1: Convert charges to coulombs: \\(q_1 = 3.0 \\times 10^{-6}\\,\\text{C}\\), \\(q_2 = 5.0 \\times 10^{-6}\\,\\text{C}\\).\n' +
            'Step 2: Apply Coulomb\'s law: \\(F = (8.99 \\times 10^9)(3.0 \\times 10^{-6})(5.0 \\times 10^{-6})/(0.20)^2 \\approx 3.4\\,\\text{N}\\).\n' +
            'Step 3: Since the charges have opposite signs, the force is attractive.',
          exampleExplanation:
            'Substitute known values into Coulomb\'s law after converting units, then determine the direction from the signs of the charges.',
        },
        {
          id: '3-2',
          title: 'The Process of Charging',
          summary:
            'Objects become electrically charged through the transfer of electrons rather than protons, because electrons are mobile while protons are bound within atomic nuclei. There are three primary methods of charging. Charging by friction (triboelectric charging) occurs when two different materials are rubbed together and electrons transfer from one to the other, leaving one positively charged and the other negatively charged. The triboelectric series ranks materials by their tendency to gain or lose electrons during contact.\n\n' +
            'Charging by conduction occurs when a charged object is brought into direct contact with an uncharged conductor. Excess charge flows from the charged object to the uncharged one until both reach the same potential. After separation, both objects carry charge of the same sign. In contrast, charging by induction does not require direct contact. When a charged object is brought near a conductor, it induces a separation of charge in the conductor (polarization). If the far side of the conductor is then grounded, charges flow to or from ground, and when the ground connection is removed followed by the charged object, the conductor is left with a net charge opposite to that of the inducing object.\n\n' +
            'Polarization also occurs in insulators, though the charges do not flow freely. Instead, the molecules within the insulator align slightly, with one end of each molecule shifting toward the external charge and the other end shifting away. This is why a charged rod can attract small pieces of neutral paper or a thin stream of water. In solving charging problems, always track where electrons move (toward positive regions, away from negative regions) and verify that the total charge of the system is conserved throughout the process.',
          keyIdeas: [
            'Charging occurs through electron transfer; protons remain fixed in nuclei.',
            'Friction transfers electrons between materials; conduction shares charge through contact; induction produces opposite charge without contact.',
            'Grounding during induction allows charge to flow to or from an effectively infinite reservoir.',
            'Polarization explains why charged objects attract neutral insulators.',
          ],
          exampleCode:
            'Example question: A metal sphere carrying a charge of \\(-6.0\\,\\mu\\text{C}\\) is brought into contact with an identical uncharged metal sphere and then separated. (a) What is the final charge on each sphere? (b) How many excess electrons does each sphere carry?\n\n' +
            'Step 1: By symmetry, charge distributes equally: each sphere gets \\(-6.0/2 = -3.0\\,\\mu\\text{C}\\).\n' +
            'Step 2: Number of excess electrons: \\(n = q/e = (3.0 \\times 10^{-6})/(1.6 \\times 10^{-19}) \\approx 1.9 \\times 10^{13}\\) electrons.',
          exampleExplanation:
            'For identical conductors in contact, charge distributes equally. Divide by the elementary charge to find the number of excess electrons.',
        },
        {
          id: '3-3',
          title: 'Electric Fields',
          summary:
            'An electric field is a vector field that represents the force per unit positive test charge at every point in space. It is defined as \\(\\vec{E} = \\vec{F}/q_0\\), where \\(\\vec{F}\\) is the electric force on a small positive test charge \\(q_0\\). For a point charge \\(Q\\), the electric field has magnitude \\(E = kQ/r^2\\) and points radially outward from a positive charge or radially inward toward a negative charge. The concept of the electric field is powerful because it allows us to describe the electrical influence of a charge distribution at every point in space without needing a second charge to be present.\n\n' +
            'Electric field lines are a visual tool for representing the field. They start on positive charges and end on negative charges, and their density at any location indicates the field strength. The field lines never cross, and the tangent to a field line at any point gives the direction of \\(\\vec{E}\\). For a uniform field, such as between two large parallel plates carrying equal and opposite charges, the field lines are parallel and equally spaced, indicating constant field strength and direction throughout the region.\n\n' +
            'When multiple charges are present, the net electric field at any point is the vector sum of the fields from each individual charge (superposition). To solve electric field problems, calculate the magnitude and direction of the field contribution from each source charge at the point of interest, resolve into components, and add. Once the field is known, the force on any charge \\(q\\) placed in the field is \\(\\vec{F} = q\\vec{E}\\). A positive charge experiences a force in the direction of the field; a negative charge experiences a force opposite to the field.',
          keyIdeas: [
            'Electric field is force per unit positive test charge: \\(\\vec{E} = \\vec{F}/q_0\\).',
            'For a point charge: \\(E = kQ/r^2\\), directed radially outward (positive) or inward (negative).',
            'Electric field lines start on positive charges, end on negative charges, and never cross.',
            'Superposition: the net field is the vector sum of individual contributions.',
          ],
          exampleCode:
            'Example question: Two charges, \\(q_1 = +4.0\\,\\mu\\text{C}\\) at the origin and \\(q_2 = -4.0\\,\\mu\\text{C}\\) at \\(x = 0.30\\,\\text{m}\\), form a dipole. Find the electric field at the midpoint between them.\n\n' +
            'Step 1: The midpoint is at \\(x = 0.15\\,\\text{m}\\), a distance \\(r = 0.15\\,\\text{m}\\) from each charge.\n' +
            'Step 2: Each field magnitude: \\(E = (8.99 \\times 10^9)(4.0 \\times 10^{-6})/(0.15)^2 \\approx 1.60 \\times 10^6\\,\\text{N/C}\\).\n' +
            'Step 3: \\(\\vec{E}_1\\) points to the right (away from \\(q_1\\)) and \\(\\vec{E}_2\\) also points to the right (toward \\(q_2\\)). Both fields add: \\(E_{\\text{net}} \\approx 3.2 \\times 10^6\\,\\text{N/C}\\) to the right.',
          exampleExplanation:
            'At the midpoint of a dipole, both field contributions point in the same direction (from positive toward negative), so they add constructively.',
        },
        {
          id: '3-4',
          title: 'Electric Potential Energy',
          summary:
            'Electric potential energy is the energy stored in a system of charges due to their positions relative to one another. For two point charges \\(q_1\\) and \\(q_2\\) separated by a distance \\(r\\), the electric potential energy is \\(U = kq_1 q_2 / r\\). Unlike the force equation, this expression retains the signs of the charges: if both charges are of the same sign, \\(U\\) is positive (the system has stored energy that could be released as kinetic energy if the charges are freed to repel); if the charges are of opposite sign, \\(U\\) is negative (energy must be added to separate them). The reference point is at infinite separation, where \\(U = 0\\).\n\n' +
            'When a charge moves through an electric field, work is done on the charge by the field, and the potential energy changes. If the field does positive work, the potential energy decreases and kinetic energy increases, and vice versa. This is entirely analogous to gravitational potential energy near the Earth\'s surface, where lifting an object increases gravitational potential energy and dropping it converts potential energy to kinetic energy.\n\n' +
            'For systems of more than two charges, the total potential energy is the sum of the potential energies of all unique pairs. To compute it, list every distinct pair of charges, calculate \\(U = kq_1 q_2 / r\\) for each pair, and add all terms together, keeping track of signs. In energy conservation problems, set the total energy (kinetic plus potential) at one configuration equal to the total energy at another, adjusting for any external work done. This approach is powerful for finding speeds of released charges, minimum approach distances, and equilibrium configurations.',
          keyIdeas: [
            'Electric potential energy of two point charges: \\(U = kq_1 q_2 / r\\), with signs retained.',
            'Positive \\(U\\) for like charges (repulsive), negative \\(U\\) for unlike charges (attractive).',
            'Potential energy changes when charges move; the field does work equal to \\(-\\Delta U\\).',
            'For multiple charges, total \\(U\\) is the sum over all unique pairs.',
          ],
          exampleCode:
            'Example question: Three charges are arranged at the corners of an equilateral triangle with side length 0.10 m: \\(q_1 = +1.0\\,\\mu\\text{C}\\), \\(q_2 = +1.0\\,\\mu\\text{C}\\), \\(q_3 = -1.0\\,\\mu\\text{C}\\). Find the total electric potential energy of the system.\n\n' +
            'Step 1: Calculate each pair: \\(U_{12} = k(1.0 \\times 10^{-6})(1.0 \\times 10^{-6})/(0.10) = +0.090\\,\\text{J}\\).\n' +
            'Step 2: \\(U_{13} = k(1.0 \\times 10^{-6})(-1.0 \\times 10^{-6})/(0.10) = -0.090\\,\\text{J}\\).\n' +
            'Step 3: \\(U_{23} = k(1.0 \\times 10^{-6})(-1.0 \\times 10^{-6})/(0.10) = -0.090\\,\\text{J}\\).\n' +
            'Step 4: Total: \\(U = 0.090 - 0.090 - 0.090 = -0.090\\,\\text{J}\\).',
          exampleExplanation:
            'Sum the potential energy of all unique pairs, retaining charge signs, to find the total system potential energy.',
        },
        {
          id: '3-5',
          title: 'Electric Potential',
          summary:
            'Electric potential (often called voltage) is the electric potential energy per unit charge at a point in space: \\(V = U/q\\), measured in volts (V), where 1 V = 1 J/C. For a point charge \\(Q\\), the potential at a distance \\(r\\) is \\(V = kQ/r\\). Unlike the electric field, potential is a scalar quantity, which makes it easier to calculate in systems with multiple charges: simply add the potentials from each charge algebraically without worrying about direction.\n\n' +
            'The potential difference between two points, \\(\\Delta V = V_B - V_A\\), determines how much work is done per unit charge as a charge moves from point A to point B. A positive charge naturally moves from high potential to low potential, just as a ball rolls downhill. The relationship between the electric field and potential in a uniform field is \\(\\Delta V = -Ed\\), where \\(d\\) is the displacement along the field direction. Equipotential surfaces are surfaces on which the potential is constant; the electric field is always perpendicular to these surfaces.\n\n' +
            'To solve potential problems, identify all source charges and calculate their individual contributions at the point of interest, then add them as scalars. When finding the work done on a charge moving between two points, use \\(W = -q\\Delta V\\) or equivalently \\(W = q(V_A - V_B)\\). Remember that a positive charge gains kinetic energy when moving toward lower potential (the field does positive work), while a negative charge gains kinetic energy when moving toward higher potential. Equipotential maps and the relationship \\(E = -\\Delta V / d\\) are useful for connecting field and potential descriptions of the same situation.',
          keyIdeas: [
            'Electric potential: \\(V = kQ/r\\) for a point charge; a scalar quantity measured in volts.',
            'Potential difference \\(\\Delta V\\) determines the work done per unit charge: \\(W = -q\\Delta V\\).',
            'Positive charges move spontaneously from high to low potential.',
            'In a uniform field, \\(\\Delta V = -Ed\\); the field is perpendicular to equipotential surfaces.',
          ],
          exampleCode:
            'Example question: A proton (\\(q = 1.6 \\times 10^{-19}\\,\\text{C}\\), \\(m = 1.67 \\times 10^{-27}\\,\\text{kg}\\)) is accelerated from rest through a potential difference of 500 V. Find its final speed.\n\n' +
            'Step 1: The kinetic energy gained equals the work done: \\(\\tfrac{1}{2}mv^2 = q\\Delta V\\).\n' +
            'Step 2: Solve for \\(v\\): \\(v = \\sqrt{2q\\Delta V/m} = \\sqrt{2(1.6 \\times 10^{-19})(500)/(1.67 \\times 10^{-27})} \\approx 3.1 \\times 10^5\\,\\text{m/s}\\).',
          exampleExplanation:
            'Use the work energy theorem with \\(W = q\\Delta V\\) to convert the potential difference into kinetic energy, then solve for the final speed.',
        },
        {
          id: '3-6',
          title: 'Capacitors',
          summary:
            'A capacitor is a device that stores electric charge and energy, typically consisting of two parallel conducting plates separated by an insulating material (dielectric) or vacuum. The capacitance \\(C\\) measures how much charge the capacitor stores per unit voltage: \\(C = Q/V\\), where \\(Q\\) is the magnitude of charge on either plate and \\(V\\) is the potential difference between them. Capacitance is measured in farads (F), where 1 F = 1 C/V. For a parallel plate capacitor with plate area \\(A\\) and separation \\(d\\), the capacitance is \\(C = \\varepsilon_0 A/d\\), where \\(\\varepsilon_0 \\approx 8.85 \\times 10^{-12}\\,\\text{F/m}\\) is the permittivity of free space.\n\n' +
            'Inserting a dielectric material between the plates increases the capacitance by a factor \\(\\kappa\\), the dielectric constant: \\(C = \\kappa \\varepsilon_0 A/d\\). The dielectric reduces the effective electric field between the plates because its molecules polarize and partially cancel the applied field. This allows the capacitor to store more charge at the same voltage, or equivalently, to hold the same charge at a lower voltage.\n\n' +
            'The energy stored in a charged capacitor is \\(U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}QV = Q^2/(2C)\\). This energy resides in the electric field between the plates. To solve capacitor problems, identify the geometry and whether a dielectric is present to find \\(C\\), use \\(Q = CV\\) to relate charge and voltage, and compute stored energy with \\(U = \\tfrac{1}{2}CV^2\\). When capacitors are combined, the effective capacitance depends on whether they are in parallel (\\(C_{\\text{eq}} = C_1 + C_2 + \\cdots\\)) or in series (\\(1/C_{\\text{eq}} = 1/C_1 + 1/C_2 + \\cdots\\)).',
          keyIdeas: [
            'Capacitance: \\(C = Q/V\\); for parallel plates, \\(C = \\varepsilon_0 A/d\\).',
            'A dielectric increases capacitance by a factor \\(\\kappa\\).',
            'Stored energy: \\(U = \\tfrac{1}{2}CV^2\\).',
            'Capacitors add directly in parallel and reciprocally in series.',
          ],
          exampleCode:
            'Example question: A parallel plate capacitor has plates of area \\(0.020\\,\\text{m}^2\\), separated by 1.0 mm, with a dielectric of \\(\\kappa = 3.0\\). (a) Find the capacitance. (b) If connected to a 12 V battery, find the stored energy.\n\n' +
            'Step 1: \\(C = \\kappa \\varepsilon_0 A/d = (3.0)(8.85 \\times 10^{-12})(0.020)/(0.001) \\approx 5.3 \\times 10^{-10}\\,\\text{F}\\) or about 0.53 nF.\n' +
            'Step 2: \\(U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(5.3 \\times 10^{-10})(12)^2 \\approx 3.8 \\times 10^{-8}\\,\\text{J}\\).',
          exampleExplanation:
            'Calculate capacitance from geometry and dielectric constant, then use the stored energy formula with the applied voltage.',
        },
        {
          id: '3-7',
          title: 'Conservation of Electric Energy',
          summary:
            'The principle of conservation of energy applies to systems of charged particles and fields just as it does in mechanics. The total energy of a charged particle system is the sum of kinetic energy and electric potential energy: \\(K + U = \\text{constant}\\) in an isolated system. As a charge moves through an electric field, it exchanges kinetic and potential energy. A positive charge accelerated through a potential drop gains kinetic energy equal to \\(q\\Delta V\\), while a charge moving against the field loses kinetic energy.\n\n' +
            'Energy conservation is especially useful for problems involving charges released from rest or moving between points at different potentials. For example, when two like charges are released from a fixed separation, they repel and accelerate apart. The initial potential energy is converted entirely into kinetic energy. In the case of a charge moving in a non uniform field (such as toward or away from another charge), applying Newton\'s laws directly can be very difficult, but energy conservation provides a straightforward path to the answer.\n\n' +
            'To solve energy conservation problems with electric charges, define the initial and final states clearly, including positions and velocities of all charges. Write \\(K_i + U_i = K_f + U_f\\), where \\(U\\) includes the potential energy from all pairs of interacting charges and any external field. If the system is not isolated, include the work done by external forces. This approach is particularly powerful for finding speeds at specific separations, closest approach distances (where \\(K_f = 0\\) momentarily), and escape conditions.',
          keyIdeas: [
            'Conservation of energy: \\(K_i + U_i = K_f + U_f\\) for isolated charged particle systems.',
            'Kinetic energy gained equals potential energy lost: \\(\\Delta K = -\\Delta U = q\\Delta V\\).',
            'Energy methods avoid the complexity of force based approaches in non uniform fields.',
            'Closest approach occurs when all initial kinetic energy has been converted to potential energy.',
          ],
          exampleCode:
            'Example question: An alpha particle (\\(q = 3.2 \\times 10^{-19}\\,\\text{C}\\), \\(m = 6.64 \\times 10^{-27}\\,\\text{kg}\\)) is launched directly toward a stationary gold nucleus (\\(Q = 1.26 \\times 10^{-17}\\,\\text{C}\\)) with a kinetic energy of \\(5.0 \\times 10^{-13}\\,\\text{J}\\). Find the distance of closest approach.\n\n' +
            'Step 1: At closest approach, all kinetic energy has been converted to potential energy: \\(K_i = U_f = kqQ/r_{\\text{min}}\\).\n' +
            'Step 2: Solve for \\(r_{\\text{min}}\\): \\(r_{\\text{min}} = kqQ/K_i = (8.99 \\times 10^9)(3.2 \\times 10^{-19})(1.26 \\times 10^{-17})/(5.0 \\times 10^{-13}) \\approx 7.3 \\times 10^{-14}\\,\\text{m}\\).',
          exampleExplanation:
            'Set the initial kinetic energy equal to the electric potential energy at the turning point, then solve for the separation distance.',
        },
      ],
    },
    {
      unitNumber: 4,
      title: 'Electric Circuits',
      subunits: [
        {
          id: '4-1',
          title: 'Electric Current',
          summary:
            'Electric current is the rate at which electric charge flows through a cross section of a conductor. It is defined as \\(I = \\Delta Q / \\Delta t\\), where \\(\\Delta Q\\) is the charge passing through a surface in time \\(\\Delta t\\). The SI unit of current is the ampere (A), equal to one coulomb per second. By convention, the direction of current is the direction positive charges would flow, which is opposite to the actual direction of electron flow in a metal conductor. This convention dates back to Benjamin Franklin and is universally used in circuit analysis.\n\n' +
            'Current exists whenever there is a net motion of charge carriers. In metals, the carriers are free electrons that drift through a lattice of positive ions when an electric field is applied. The drift velocity of electrons is typically very slow (on the order of millimeters per second), but the electric field that drives the current propagates at nearly the speed of light, which is why a light turns on almost instantly when a switch is flipped. In electrolyte solutions, both positive and negative ions serve as charge carriers, and both contribute to the current.\n\n' +
            'For current to flow continuously, there must be a complete conducting path (a closed circuit) and an energy source such as a battery that maintains a potential difference across the circuit. An open switch or a break in the wire interrupts the circuit and stops all current flow. In circuit analysis, current is typically assumed to be steady (direct current, or DC), meaning it does not change with time. This simplification applies to most AP Physics 2 problems involving batteries and resistors.',
          keyIdeas: [
            'Current is the rate of charge flow: \\(I = \\Delta Q / \\Delta t\\), measured in amperes.',
            'Conventional current flows from high to low potential; electron flow is opposite.',
            'A complete (closed) circuit and an energy source are required for sustained current.',
            'Drift velocity of electrons is slow, but the electric signal propagates at nearly the speed of light.',
          ],
          exampleCode:
            'Example question: A wire carries a steady current of 2.5 A. (a) How much charge passes through a cross section of the wire in 4.0 s? (b) How many electrons is this?\n\n' +
            'Step 1: \\(\\Delta Q = I \\Delta t = (2.5)(4.0) = 10\\,\\text{C}\\).\n' +
            'Step 2: Number of electrons: \\(n = \\Delta Q / e = 10 / (1.6 \\times 10^{-19}) = 6.25 \\times 10^{19}\\).',
          exampleExplanation:
            'Multiply current by time to find total charge, then divide by the elementary charge to find the number of electrons.',
        },
        {
          id: '4-2',
          title: 'Simple Circuits',
          summary:
            'A simple circuit consists of a source of emf (such as a battery), one or more resistors, and connecting wires forming a closed loop. The battery provides a constant potential difference (its emf, \\(\\mathcal{E}\\)) that drives current through the circuit. In the simplest case, a single resistor \\(R\\) connected to a battery of emf \\(\\mathcal{E}\\) with negligible internal resistance carries a current \\(I = \\mathcal{E}/R\\). The current flows from the positive terminal of the battery through the external circuit to the negative terminal and back through the battery internally.\n\n' +
            'When resistors are connected in series, the same current flows through each one and the total resistance is the sum of the individual resistances: \\(R_{\\text{eq}} = R_1 + R_2 + \\cdots\\). The voltage drops across individual resistors add up to equal the battery\'s emf. When resistors are connected in parallel, each resistor has the same voltage across it, but the currents through each may differ. The equivalent resistance is found from \\(1/R_{\\text{eq}} = 1/R_1 + 1/R_2 + \\cdots\\), and the total current from the battery is the sum of the branch currents.\n\n' +
            'To analyze simple circuits, first identify whether the resistors are in series, parallel, or a combination. Reduce the circuit to find the total equivalent resistance, then calculate the total current from the battery. Work backward to find the current through and voltage across each individual resistor. Verify your results by checking that the voltage drops sum to the emf (for series) and that the branch currents sum to the total current (for parallel). Schematic diagrams are essential tools for tracking these relationships.',
          keyIdeas: [
            'In series: same current through all resistors, \\(R_{\\text{eq}} = R_1 + R_2 + \\cdots\\).',
            'In parallel: same voltage across all resistors, \\(1/R_{\\text{eq}} = 1/R_1 + 1/R_2 + \\cdots\\).',
            'Total voltage drops in a series loop equal the emf of the source.',
            'Branch currents in parallel add to the total current from the source.',
          ],
          exampleCode:
            'Example question: A 12 V battery is connected to two resistors in series: \\(R_1 = 4.0\\,\\Omega\\) and \\(R_2 = 8.0\\,\\Omega\\). (a) Find the current. (b) Find the voltage across each resistor.\n\n' +
            'Step 1: \\(R_{\\text{eq}} = 4.0 + 8.0 = 12.0\\,\\Omega\\). Current: \\(I = \\mathcal{E}/R_{\\text{eq}} = 12/12 = 1.0\\,\\text{A}\\).\n' +
            'Step 2: \\(V_1 = IR_1 = (1.0)(4.0) = 4.0\\,\\text{V}\\); \\(V_2 = IR_2 = (1.0)(8.0) = 8.0\\,\\text{V}\\). Check: \\(4.0 + 8.0 = 12\\,\\text{V}\\).',
          exampleExplanation:
            'Add series resistances to find the equivalent, compute current from Ohm\'s law, then find individual voltage drops.',
        },
        {
          id: '4-3',
          title: 'Resistance, Resistivity, and Ohm\'s Law',
          summary:
            'Resistance quantifies how much a component opposes the flow of current. Ohm\'s law states that for many materials, the voltage across a resistor is proportional to the current through it: \\(V = IR\\), where \\(V\\) is the voltage in volts, \\(I\\) is the current in amperes, and \\(R\\) is the resistance in ohms (\\(\\Omega\\)). Materials that obey this linear relationship are called ohmic; common examples include metal wires at constant temperature. Non ohmic devices, such as diodes and light bulbs, have resistance that varies with voltage or current.\n\n' +
            'The resistance of a uniform conductor depends on its material properties and geometry: \\(R = \\rho L / A\\), where \\(\\rho\\) is the resistivity of the material (measured in \\(\\Omega \\cdot \\text{m}\\)), \\(L\\) is the length of the conductor, and \\(A\\) is its cross sectional area. Longer conductors have more resistance, and thicker conductors have less, which is intuitive: a longer hallway is harder to walk through, and a wider hallway is easier. Resistivity is an intrinsic property of the material; for example, copper has a very low resistivity while rubber has an extremely high one.\n\n' +
            'Temperature affects resistivity: for most metals, resistivity increases with temperature because increased thermal vibrations of the lattice impede electron flow. Semiconductors, by contrast, generally have resistivity that decreases with temperature because higher temperatures liberate more charge carriers. In problem solving, use \\(V = IR\\) to relate voltage, current, and resistance in a circuit element, and use \\(R = \\rho L/A\\) when the physical dimensions or material of the conductor are relevant.',
          keyIdeas: [
            'Ohm\'s law: \\(V = IR\\); defines the linear relationship between voltage and current for ohmic materials.',
            'Resistance depends on material and geometry: \\(R = \\rho L / A\\).',
            'Resistivity is an intrinsic material property; it generally increases with temperature for metals.',
            'Non ohmic devices do not follow \\(V = IR\\) with a constant \\(R\\).',
          ],
          exampleCode:
            'Example question: A copper wire has a resistivity of \\(1.7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}\\), a length of 10 m, and a cross sectional area of \\(1.0 \\times 10^{-6}\\,\\text{m}^2\\). (a) Find its resistance. (b) If a 5.0 V potential difference is applied, find the current.\n\n' +
            'Step 1: \\(R = \\rho L / A = (1.7 \\times 10^{-8})(10)/(1.0 \\times 10^{-6}) = 0.17\\,\\Omega\\).\n' +
            'Step 2: \\(I = V/R = 5.0/0.17 \\approx 29\\,\\text{A}\\).',
          exampleExplanation:
            'Compute resistance from resistivity and geometry, then apply Ohm\'s law to find the resulting current.',
        },
        {
          id: '4-4',
          title: 'Electric Power',
          summary:
            'Electric power is the rate at which electrical energy is converted to other forms (heat, light, motion, etc.) in a circuit element. It is defined as \\(P = IV\\), where \\(I\\) is the current through the element and \\(V\\) is the voltage across it. Power is measured in watts (W). Using Ohm\'s law, this can also be expressed as \\(P = I^2 R\\) (useful when current is known) or \\(P = V^2/R\\) (useful when voltage is known). In a resistor, all electrical energy is dissipated as thermal energy.\n\n' +
            'The total power delivered by a battery to a circuit equals the product of its emf and the total current: \\(P_{\\text{source}} = \\mathcal{E} I\\). If the battery has internal resistance \\(r\\), some of this power is dissipated within the battery itself (\\(P_{\\text{internal}} = I^2 r\\)), and the rest is delivered to the external circuit. The terminal voltage of a real battery is \\(V_{\\text{terminal}} = \\mathcal{E} - Ir\\), which is less than the emf when current flows.\n\n' +
            'Electrical energy consumed over time is \\(E = Pt\\), often measured in kilowatt hours (kWh) for household billing. To solve power problems, identify the current through and voltage across each component, then apply the appropriate form of the power equation. In series circuits, the component with the largest resistance dissipates the most power (since \\(P = I^2 R\\) and the current is the same). In parallel circuits, the component with the smallest resistance dissipates the most power (since \\(P = V^2/R\\) and the voltage is the same).',
          keyIdeas: [
            'Electric power: \\(P = IV = I^2 R = V^2/R\\).',
            'Power delivered by a battery: \\(P = \\mathcal{E} I\\); power lost internally: \\(P = I^2 r\\).',
            'In series, the largest resistor dissipates the most power; in parallel, the smallest resistor does.',
            'Energy consumed: \\(E = Pt\\), often measured in kilowatt hours.',
          ],
          exampleCode:
            'Example question: A 100 W light bulb operates on a 120 V supply. (a) Find the current through the bulb. (b) Find the resistance of the bulb.\n\n' +
            'Step 1: \\(I = P/V = 100/120 \\approx 0.83\\,\\text{A}\\).\n' +
            'Step 2: \\(R = V/I = 120/0.83 \\approx 144\\,\\Omega\\). Alternatively, \\(R = V^2/P = (120)^2/100 = 144\\,\\Omega\\).',
          exampleExplanation:
            'Use the power equation in the form that matches the known quantities, then apply Ohm\'s law to find remaining unknowns.',
        },
        {
          id: '4-5',
          title: 'Compound Direct Current (DC) Circuits',
          summary:
            'Compound circuits contain resistors that are neither purely in series nor purely in parallel but rather a combination of both. Analyzing such circuits requires a systematic approach: identify groups of resistors that are in series or parallel, reduce each group to a single equivalent resistor, and repeat until the entire network is reduced to one equivalent resistance. Then work forward from the source to find the total current and backward through the reductions to find currents and voltages for each original resistor.\n\n' +
            'When a battery has internal resistance \\(r\\), the circuit analysis must account for the voltage drop inside the battery. The terminal voltage is \\(V_{\\text{terminal}} = \\mathcal{E} - Ir\\), and the total current is \\(I = \\mathcal{E}/(R_{\\text{ext}} + r)\\). This means that under heavy load (large current), the terminal voltage drops noticeably. The power dissipated in the internal resistance represents energy wasted as heat inside the battery.\n\n' +
            'Solving compound circuit problems often requires careful bookkeeping. Label all resistors with their values and positions. At each stage of simplification, note which original resistors are grouped together and record the equivalent resistance. After finding the total current, trace back through each grouping: for resistors that were in series, they share the total current; for resistors that were in parallel, they share the total voltage of that parallel block. Check your results by verifying that Kirchhoff\'s rules (discussed in subsequent sections) are satisfied at every junction and around every loop.',
          keyIdeas: [
            'Compound circuits require step by step reduction of series and parallel combinations.',
            'Internal resistance of a battery reduces the terminal voltage: \\(V = \\mathcal{E} - Ir\\).',
            'After reducing the circuit, work backward to find individual currents and voltages.',
            'Always verify results using Kirchhoff\'s laws as a consistency check.',
          ],
          exampleCode:
            'Example question: A 9.0 V battery with internal resistance 1.0 \\(\\Omega\\) is connected to two resistors: \\(R_1 = 4.0\\,\\Omega\\) and \\(R_2 = 12\\,\\Omega\\) in parallel. (a) Find the equivalent external resistance. (b) Find the total current and the terminal voltage.\n\n' +
            'Step 1: \\(1/R_{\\text{eq}} = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12\\), so \\(R_{\\text{eq}} = 3.0\\,\\Omega\\).\n' +
            'Step 2: Total current: \\(I = \\mathcal{E}/(R_{\\text{eq}} + r) = 9.0/(3.0 + 1.0) = 2.25\\,\\text{A}\\).\n' +
            'Step 3: Terminal voltage: \\(V = \\mathcal{E} - Ir = 9.0 - (2.25)(1.0) = 6.75\\,\\text{V}\\).',
          exampleExplanation:
            'Reduce the parallel combination first, include the internal resistance with the external equivalent, find the total current, and compute the terminal voltage.',
        },
        {
          id: '4-6',
          title: 'Kirchhoff\'s Loop Rule',
          summary:
            'Kirchhoff\'s loop rule (also called the voltage law or KVL) states that the sum of all voltage changes around any closed loop in a circuit equals zero: \\(\\sum \\Delta V = 0\\). This is a direct consequence of conservation of energy. As a charge traverses a complete loop and returns to its starting point, it must have the same potential it started with, so all the potential gains (from batteries) and potential drops (across resistors) must cancel.\n\n' +
            'To apply the loop rule, choose a direction to traverse the loop (clockwise or counterclockwise). As you move through a battery from the negative to the positive terminal, record a positive voltage gain \\(+\\mathcal{E}\\); from positive to negative, record \\(-\\mathcal{E}\\). As you move through a resistor in the direction of current, record a voltage drop \\(-IR\\); against the current, record \\(+IR\\). Sum all terms and set the result equal to zero. This produces an algebraic equation that can be solved for an unknown current or emf.\n\n' +
            'The loop rule is indispensable for circuits that cannot be simplified by series and parallel reduction alone, such as circuits with multiple batteries or complex interconnections. In multi loop circuits, you write one loop equation per independent loop and solve the resulting system of equations simultaneously. Choose loops that include as many unknowns as possible to minimize the number of equations needed. Combining the loop rule with the junction rule (discussed next) provides a complete toolkit for analyzing any DC circuit.',
          keyIdeas: [
            'Kirchhoff\'s loop rule: \\(\\sum \\Delta V = 0\\) around any closed loop.',
            'It is a statement of conservation of energy applied to electric circuits.',
            'Assign signs to voltage changes based on the direction of traversal relative to current flow and battery orientation.',
            'Multiple loop equations can be solved simultaneously for unknown currents or voltages.',
          ],
          exampleCode:
            'Example question: A loop contains a 12 V battery and two resistors in series, \\(R_1 = 3.0\\,\\Omega\\) and \\(R_2 = 6.0\\,\\Omega\\). Use the loop rule to find the current.\n\n' +
            'Step 1: Traverse the loop in the direction of current. Starting at the battery: \\(+12 - I(3.0) - I(6.0) = 0\\).\n' +
            'Step 2: \\(12 - 9.0I = 0\\), so \\(I = 12/9.0 \\approx 1.33\\,\\text{A}\\).',
          exampleExplanation:
            'Write the loop rule equation by adding the battery\'s emf and subtracting each resistor voltage drop, then solve for the current.',
        },
        {
          id: '4-7',
          title: 'Kirchhoff\'s Junction Rule',
          summary:
            'Kirchhoff\'s junction rule (also called the current law or KCJ) states that the total current entering any junction in a circuit equals the total current leaving that junction: \\(\\sum I_{\\text{in}} = \\sum I_{\\text{out}}\\). This is a statement of conservation of charge: charge cannot accumulate at or vanish from a point in a steady state circuit. Every electron that arrives at a junction must leave through one of the available branches.\n\n' +
            'To use the junction rule, first assign a direction to the current in each branch of the circuit. These assignments are initial guesses; if the actual direction is opposite, the algebra will yield a negative value for that current, which is perfectly valid and simply means the current flows the other way. At each junction, write an equation equating the sum of incoming currents to the sum of outgoing currents. In a circuit with \\(N\\) junctions, you will get \\(N - 1\\) independent junction equations (the last junction\'s equation is always a combination of the others).\n\n' +
            'In practice, the junction rule and loop rule are used together to analyze complex circuits. First, label all branch currents and assign directions. Then write junction equations at nodes where branches meet. Next, write loop equations around independent loops. Solve the system of equations for all unknown currents. Verify your solution by substituting the values back into any equations you did not use. This systematic approach, often called Kirchhoff\'s method, can solve any DC circuit, no matter how complex.',
          keyIdeas: [
            'Junction rule: \\(\\sum I_{\\text{in}} = \\sum I_{\\text{out}}\\) at any node; conservation of charge.',
            'If a current is calculated to be negative, its actual direction is opposite to the assumed direction.',
            'Combine the junction rule with the loop rule to solve complex multi loop circuits.',
            'A circuit with \\(N\\) junctions provides \\(N - 1\\) independent junction equations.',
          ],
          exampleCode:
            'Example question: At a junction in a circuit, three wires meet. Wire A carries 3.0 A into the junction, wire B carries 1.0 A out of the junction. (a) What is the current in wire C, and in which direction does it flow?\n\n' +
            'Step 1: Apply the junction rule: \\(I_A = I_B + I_C\\).\n' +
            'Step 2: \\(3.0 = 1.0 + I_C\\), so \\(I_C = 2.0\\,\\text{A}\\) flowing out of the junction.',
          exampleExplanation:
            'Apply conservation of charge at the junction to find the unknown current as the difference between the total incoming and known outgoing currents.',
        },
        {
          id: '4-8',
          title: 'Resistor Capacitor (RC) Circuits',
          summary:
            'An RC circuit consists of a resistor and a capacitor connected in series with a source of emf or with each other. When a battery is first connected to an uncharged capacitor through a resistor, the capacitor charges exponentially: the charge on the capacitor as a function of time is \\(Q(t) = C\\mathcal{E}(1 - e^{-t/RC})\\) and the current is \\(I(t) = (\\mathcal{E}/R)e^{-t/RC}\\). The product \\(\\tau = RC\\) is called the time constant and represents the time it takes for the capacitor to reach about 63% of its maximum charge.\n\n' +
            'During charging, the current starts at its maximum value \\(I_0 = \\mathcal{E}/R\\) (when the capacitor is uncharged and all the battery voltage appears across the resistor) and decreases exponentially to zero as the capacitor becomes fully charged and its voltage equals the emf. Conversely, when a charged capacitor is disconnected from the battery and allowed to discharge through a resistor, the charge decays as \\(Q(t) = Q_0 e^{-t/RC}\\) and the current decays as \\(I(t) = (Q_0/RC)e^{-t/RC}\\). The time constant \\(\\tau = RC\\) again sets the scale of the decay.\n\n' +
            'To solve RC circuit problems, first determine whether the capacitor is charging or discharging. Use the appropriate exponential function for charge, voltage, or current. At \\(t = 0\\), an uncharged capacitor acts like a short circuit (zero voltage, maximum current). After a long time (\\(t \\gg RC\\)), a fully charged capacitor acts like an open circuit (zero current, maximum voltage). These limiting behaviors are extremely useful for quickly sketching the qualitative behavior of the circuit and for checking calculated results.',
          keyIdeas: [
            'Charging: \\(Q(t) = C\\mathcal{E}(1 - e^{-t/RC})\\); current decays exponentially from \\(\\mathcal{E}/R\\) to zero.',
            'Discharging: \\(Q(t) = Q_0 e^{-t/RC}\\); charge and current both decay exponentially.',
            'The time constant \\(\\tau = RC\\) sets the timescale for charging and discharging.',
            'At \\(t = 0\\), an uncharged capacitor is a short circuit; at \\(t \\to \\infty\\), it is an open circuit.',
          ],
          exampleCode:
            'Example question: A 20 \\(\\mu\\text{F}\\) capacitor is charged through a 50 k\\(\\Omega\\) resistor by a 10 V battery. (a) Find the time constant. (b) Find the charge on the capacitor at \\(t = 1.0\\,\\text{s}\\).\n\n' +
            'Step 1: \\(\\tau = RC = (50 \\times 10^3)(20 \\times 10^{-6}) = 1.0\\,\\text{s}\\).\n' +
            'Step 2: \\(Q(1.0) = C\\mathcal{E}(1 - e^{-1.0/1.0}) = (20 \\times 10^{-6})(10)(1 - e^{-1}) \\approx (2.0 \\times 10^{-4})(0.632) \\approx 1.26 \\times 10^{-4}\\,\\text{C}\\).',
          exampleExplanation:
            'Calculate the time constant from \\(RC\\), then substitute into the charging equation to find the charge at the given time.',
        },
      ],
    },
    {
      unitNumber: 5,
      title: 'Magnetism and Electromagnetic Induction',
      subunits: [
        {
          id: '5-1',
          title: 'Magnetic Fields',
          summary:
            'Magnetic fields are produced by moving charges and by permanent magnets. Unlike electric fields, which begin and end on charges, magnetic field lines always form closed loops. They emerge from the north pole of a magnet and curve around to enter the south pole, continuing through the interior of the magnet. The magnetic field is a vector quantity, denoted \\(\\vec{B}\\), and its SI unit is the tesla (T). The Earth itself has a magnetic field resembling that of a bar magnet, with the geographic north pole near the magnetic south pole.\n\n' +
            'Magnetic fields can be generated by current carrying wires. A long straight wire carrying current \\(I\\) produces a magnetic field that circles the wire, with magnitude \\(B = \\mu_0 I / (2\\pi r)\\), where \\(\\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A}\\) is the permeability of free space and \\(r\\) is the distance from the wire. The direction of the field is given by the right hand rule: point the thumb of your right hand in the direction of the current, and your fingers curl in the direction of the magnetic field lines.\n\n' +
            'A solenoid (a coil of wire with many turns) produces a nearly uniform magnetic field inside it, given by \\(B = \\mu_0 n I\\), where \\(n\\) is the number of turns per unit length. Inside the solenoid the field is strong and uniform; outside it is weak and diverges, much like the field of a bar magnet. Understanding the geometry of magnetic fields from wires and solenoids is essential for analyzing forces on charges and other conductors in those fields.',
          keyIdeas: [
            'Magnetic field lines form closed loops from north to south poles externally.',
            'A long straight wire: \\(B = \\mu_0 I / (2\\pi r)\\); direction given by the right hand rule.',
            'A solenoid: \\(B = \\mu_0 n I\\) inside, nearly uniform.',
            'The SI unit of magnetic field strength is the tesla (T).',
          ],
          exampleCode:
            'Example question: A long straight wire carries a current of 10 A. Find the magnetic field at a distance of 0.050 m from the wire.\n\n' +
            'Step 1: \\(B = \\mu_0 I / (2\\pi r) = (4\\pi \\times 10^{-7})(10) / (2\\pi \\times 0.050)\\).\n' +
            'Step 2: Simplify: \\(B = (4 \\times 10^{-6}) / (0.10) = 4.0 \\times 10^{-5}\\,\\text{T}\\).',
          exampleExplanation:
            'Substitute the current and distance directly into the formula for the magnetic field of a long straight wire.',
        },
        {
          id: '5-2',
          title: 'Magnetism and Moving Charges',
          summary:
            'A charged particle moving through a magnetic field experiences a force given by \\(\\vec{F} = q\\vec{v} \\times \\vec{B}\\). The magnitude of this force is \\(F = qvB\\sin\\theta\\), where \\(\\theta\\) is the angle between the velocity vector and the magnetic field. Because the force is always perpendicular to the velocity, the magnetic force does no work on the particle and cannot change its speed, only its direction. A charged particle moving perpendicular to a uniform magnetic field follows a circular path.\n\n' +
            'The radius of this circular path can be found by setting the magnetic force equal to the centripetal force: \\(qvB = mv^2/r\\), which gives \\(r = mv/(qB)\\). This relationship is the basis of many devices, including cyclotrons (particle accelerators) and mass spectrometers (which separate ions by mass). Faster particles or heavier particles trace larger circles; stronger fields or more highly charged particles trace smaller circles.\n\n' +
            'The direction of the magnetic force is found using a right hand rule for positive charges: point the fingers of your right hand in the direction of \\(\\vec{v}\\), curl them toward \\(\\vec{B}\\), and your thumb points in the direction of \\(\\vec{F}\\). For negative charges, the force is in the opposite direction. If the velocity has a component parallel to the field, that component is unaffected, and the particle traces a helical path. In problem solving, always check the angle between \\(\\vec{v}\\) and \\(\\vec{B}\\); if they are parallel, the force is zero.',
          keyIdeas: [
            'Magnetic force on a moving charge: \\(F = qvB\\sin\\theta\\); always perpendicular to velocity.',
            'The magnetic force does no work and cannot change a particle\'s speed, only its direction.',
            'Circular motion in a uniform field: \\(r = mv/(qB)\\).',
            'Direction determined by the right hand rule (reversed for negative charges).',
          ],
          exampleCode:
            'Example question: A proton (\\(m = 1.67 \\times 10^{-27}\\,\\text{kg}\\), \\(q = 1.6 \\times 10^{-19}\\,\\text{C}\\)) moves at \\(3.0 \\times 10^6\\,\\text{m/s}\\) perpendicular to a 0.50 T magnetic field. (a) Find the magnetic force. (b) Find the radius of its circular path.\n\n' +
            'Step 1: \\(F = qvB = (1.6 \\times 10^{-19})(3.0 \\times 10^6)(0.50) = 2.4 \\times 10^{-13}\\,\\text{N}\\).\n' +
            'Step 2: \\(r = mv/(qB) = (1.67 \\times 10^{-27})(3.0 \\times 10^6)/((1.6 \\times 10^{-19})(0.50)) \\approx 0.063\\,\\text{m}\\).',
          exampleExplanation:
            'Compute the magnetic force directly, then equate it to the centripetal force requirement to find the radius of circular motion.',
        },
        {
          id: '5-3',
          title: 'Magnetism and Current Carrying Wires',
          summary:
            'A current carrying wire placed in an external magnetic field experiences a force, since the wire contains moving charges. The force on a straight wire of length \\(L\\) carrying current \\(I\\) in a magnetic field \\(B\\) is \\(F = BIL\\sin\\theta\\), where \\(\\theta\\) is the angle between the wire and the field. This is the principle behind electric motors, loudspeakers, and many other electromagnetic devices. The direction of the force is given by the right hand rule: point your fingers in the direction of the current and curl them toward \\(\\vec{B}\\); your thumb gives the force direction.\n\n' +
            'Two parallel current carrying wires exert magnetic forces on each other. If the currents flow in the same direction, the wires attract; if the currents flow in opposite directions, the wires repel. Each wire creates a magnetic field at the location of the other, and the other wire, carrying current in that field, feels a force. The force per unit length between two long parallel wires separated by a distance \\(d\\) and carrying currents \\(I_1\\) and \\(I_2\\) is \\(F/L = \\mu_0 I_1 I_2 / (2\\pi d)\\).\n\n' +
            'Current loops and coils placed in magnetic fields experience torques that tend to align the plane of the loop perpendicular to the field. The torque on a rectangular loop of area \\(A\\) carrying current \\(I\\) in a field \\(B\\) is \\(\\tau = NIAB\\sin\\theta\\), where \\(N\\) is the number of turns and \\(\\theta\\) is the angle between the normal to the loop and the field. This torque is maximized when the loop is parallel to the field and zero when it is perpendicular. Electric motors exploit this torque by using commutators to reverse the current direction each half turn, sustaining continuous rotation.',
          keyIdeas: [
            'Force on a current carrying wire: \\(F = BIL\\sin\\theta\\).',
            'Parallel wires with same direction currents attract; opposite direction currents repel.',
            'Torque on a current loop: \\(\\tau = NIAB\\sin\\theta\\).',
            'These forces and torques are the basis of motors and many electromagnetic devices.',
          ],
          exampleCode:
            'Example question: A straight wire 0.30 m long carries a current of 5.0 A perpendicular to a uniform 0.40 T magnetic field. Find the force on the wire.\n\n' +
            'Step 1: Since the wire is perpendicular to the field, \\(\\sin\\theta = 1\\).\n' +
            'Step 2: \\(F = BIL = (0.40)(5.0)(0.30) = 0.60\\,\\text{N}\\).',
          exampleExplanation:
            'With the wire perpendicular to the field, the force formula simplifies to \\(F = BIL\\). Substitute the known values directly.',
        },
        {
          id: '5-4',
          title: 'Electromagnetic Induction and Faraday\'s Law',
          summary:
            'Electromagnetic induction is the phenomenon in which a changing magnetic flux through a loop of wire induces an electromotive force (emf) in the loop. The magnetic flux through a loop of area \\(A\\) in a field \\(B\\) is \\(\\Phi_B = BA\\cos\\theta\\), where \\(\\theta\\) is the angle between the magnetic field and the normal to the loop. Faraday\'s law states that the induced emf is equal to the negative rate of change of magnetic flux: \\(\\mathcal{E} = -d\\Phi_B/dt\\). For a coil with \\(N\\) turns, \\(\\mathcal{E} = -N \\, d\\Phi_B/dt\\). The emf can be induced by changing the field strength, the area of the loop, or the angle between the field and the loop.\n\n' +
            'Lenz\'s law provides the direction of the induced current: the induced current flows in a direction that opposes the change in flux that produced it. If the flux through a loop is increasing, the induced current creates a magnetic field that opposes the increase; if the flux is decreasing, the induced current creates a field to maintain it. Lenz\'s law is a consequence of conservation of energy: if the induced current aided the flux change, it would create a runaway feedback loop that generates energy from nothing.\n\n' +
            'Applications of electromagnetic induction are vast. Electric generators convert mechanical energy into electrical energy by rotating a coil in a magnetic field, continually changing the flux and inducing an alternating emf. Transformers transfer electrical energy between circuits at different voltages using mutual induction between coils. In problem solving, determine the magnetic flux at different times, compute the rate of change, and apply Faraday\'s law to find the emf. Use Lenz\'s law to determine the direction of induced current and verify that energy is conserved.',
          keyIdeas: [
            'Magnetic flux: \\(\\Phi_B = BA\\cos\\theta\\); Faraday\'s law: \\(\\mathcal{E} = -N \\, d\\Phi_B/dt\\).',
            'Lenz\'s law: induced current opposes the change in flux, ensuring conservation of energy.',
            'Changing \\(B\\), \\(A\\), or \\(\\theta\\) can each induce an emf.',
            'Generators and transformers are major applications of electromagnetic induction.',
          ],
          exampleCode:
            'Example question: A circular loop of radius 0.10 m and 50 turns is in a magnetic field that decreases uniformly from 0.80 T to 0 in 0.20 s. The field is perpendicular to the loop. Find the magnitude of the induced emf.\n\n' +
            'Step 1: Area: \\(A = \\pi r^2 = \\pi(0.10)^2 \\approx 0.0314\\,\\text{m}^2\\).\n' +
            'Step 2: Change in flux: \\(\\Delta \\Phi = \\Delta B \\cdot A = (0 - 0.80)(0.0314) = -0.0251\\,\\text{Wb}\\).\n' +
            'Step 3: \\(|\\mathcal{E}| = N|\\Delta \\Phi / \\Delta t| = 50(0.0251/0.20) \\approx 6.3\\,\\text{V}\\).',
          exampleExplanation:
            'Compute the area and the change in flux, then divide by the time interval and multiply by the number of turns to find the induced emf magnitude.',
        },
      ],
    },
    {
      unitNumber: 6,
      title: 'Geometric Optics',
      subunits: [
        {
          id: '6-1',
          title: 'Reflection',
          summary:
            'Reflection occurs when a wave (such as light) encounters a boundary between two media and bounces back into the original medium. The law of reflection states that the angle of incidence equals the angle of reflection: \\(\\theta_i = \\theta_r\\), where both angles are measured from the normal to the surface at the point of incidence. This law applies to all reflecting surfaces, whether flat (planar) or curved, with the normal drawn at the specific point where the ray strikes.\n\n' +
            'Specular reflection occurs on smooth surfaces like polished mirrors, where parallel incident rays produce parallel reflected rays and a clear image can be formed. Diffuse reflection occurs on rough surfaces, where parallel incident rays scatter in many directions because the surface normals point in different directions at different points. Most everyday surfaces produce diffuse reflection, which is why we see objects illuminated from many angles rather than seeing mirror images of light sources.\n\n' +
            'When analyzing reflection problems, draw incident and reflected rays, mark the normal at the point of incidence, and measure angles from the normal (not from the surface). For flat mirrors, every reflected ray obeys the same simple law. For curved mirrors, the normal at each point is the radius drawn to that point. The law of reflection is the foundational principle upon which all mirror imaging in geometric optics is built.',
          keyIdeas: [
            'Law of reflection: \\(\\theta_i = \\theta_r\\), measured from the surface normal.',
            'Specular reflection produces clear images; diffuse reflection scatters light.',
            'The normal direction varies with position on curved surfaces.',
            'Reflection applies equally to all waves, not just visible light.',
          ],
          exampleCode:
            'Example question: A ray of light strikes a flat mirror at an angle of 35° from the surface. (a) What is the angle of incidence? (b) What is the angle of reflection? (c) What is the angle between the incident and reflected rays?\n\n' +
            'Step 1: The angle of incidence is measured from the normal, not the surface: \\(\\theta_i = 90° - 35° = 55°\\).\n' +
            'Step 2: By the law of reflection, \\(\\theta_r = \\theta_i = 55°\\).\n' +
            'Step 3: The angle between the incident and reflected rays is \\(\\theta_i + \\theta_r = 55° + 55° = 110°\\).',
          exampleExplanation:
            'Convert the angle from the surface to the angle from the normal, apply the law of reflection, and add the two angles from the normal to find the total angle between the rays.',
        },
        {
          id: '6-2',
          title: 'Images Formed by Mirrors',
          summary:
            'Flat mirrors produce virtual images that appear to be behind the mirror at the same distance as the object is in front. The image is upright, the same size as the object, and laterally inverted (left and right are swapped). Virtual images are formed where reflected rays appear to diverge from, even though the light does not actually pass through that location. Flat mirror images cannot be projected onto a screen.\n\n' +
            'Concave (converging) mirrors curve inward and can form both real and virtual images depending on the object\'s position relative to the focal point. When the object is beyond the focal point, the mirror forms a real, inverted image that can be projected onto a screen. When the object is inside the focal point, the mirror forms a virtual, upright, magnified image. The mirror equation relates the object distance \\(d_o\\), image distance \\(d_i\\), and focal length \\(f\\): \\(1/d_o + 1/d_i = 1/f\\). The magnification is \\(M = -d_i/d_o\\), where a negative magnification indicates an inverted image.\n\n' +
            'Convex (diverging) mirrors curve outward and always produce virtual, upright, reduced images. These mirrors have a negative focal length by sign convention. They are commonly used as side mirrors on vehicles because they provide a wide field of view. To solve mirror problems, draw a ray diagram using at least two principal rays (parallel to the axis, through the focal point, or through the center of curvature), then use the mirror equation and magnification formula to calculate precise image locations and sizes. The sign conventions are essential: positive distances are on the reflecting side, negative on the other side.',
          keyIdeas: [
            'Mirror equation: \\(1/d_o + 1/d_i = 1/f\\); magnification: \\(M = -d_i/d_o\\).',
            'Concave mirrors can form real (inverted) or virtual (upright) images.',
            'Convex mirrors always form virtual, upright, reduced images.',
            'Ray diagrams use principal rays to locate images graphically.',
          ],
          exampleCode:
            'Example question: An object is placed 30 cm in front of a concave mirror with a focal length of 20 cm. (a) Find the image distance. (b) Find the magnification and describe the image.\n\n' +
            'Step 1: \\(1/d_i = 1/f - 1/d_o = 1/20 - 1/30 = 3/60 - 2/60 = 1/60\\), so \\(d_i = 60\\,\\text{cm}\\).\n' +
            'Step 2: \\(M = -d_i/d_o = -60/30 = -2.0\\). The image is real (\\(d_i > 0\\)), inverted (\\(M < 0\\)), and magnified (\\(|M| > 1\\)).',
          exampleExplanation:
            'Apply the mirror equation to find the image distance, then use the magnification formula to determine size and orientation.',
        },
        {
          id: '6-3',
          title: 'Refraction',
          summary:
            'Refraction is the bending of light as it passes from one transparent medium to another with a different optical density. The change in direction occurs because light travels at different speeds in different media. The index of refraction of a medium is defined as \\(n = c/v\\), where \\(c\\) is the speed of light in vacuum and \\(v\\) is the speed of light in the medium. Materials with higher indices of refraction slow light more and bend it more toward the normal when light enters from a less dense medium.\n\n' +
            'Snell\'s law governs the relationship between the angles of incidence and refraction: \\(n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2\\), where subscripts 1 and 2 refer to the incident and refracted media, respectively. When light passes from a medium with a lower index to one with a higher index, it bends toward the normal; when it passes to a medium with a lower index, it bends away from the normal. If the angle of incidence exceeds the critical angle when going from a denser to a less dense medium, total internal reflection occurs and no light is transmitted.\n\n' +
            'The critical angle for total internal reflection is found from \\(\\sin\\theta_c = n_2/n_1\\), where \\(n_1 > n_2\\). Total internal reflection is the operating principle of fiber optics and is responsible for the sparkle of diamonds (which have a very high index of refraction and a small critical angle). When solving refraction problems, draw the normal at the point of incidence, apply Snell\'s law to find the unknown angle, and check whether total internal reflection is possible before assuming a refracted ray exists.',
          keyIdeas: [
            'Index of refraction: \\(n = c/v\\); higher \\(n\\) means slower light.',
            'Snell\'s law: \\(n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2\\).',
            'Light bends toward the normal entering denser media, away from the normal entering less dense media.',
            'Total internal reflection occurs above the critical angle: \\(\\sin\\theta_c = n_2/n_1\\).',
          ],
          exampleCode:
            'Example question: Light passes from water (\\(n = 1.33\\)) into glass (\\(n = 1.50\\)) at an angle of incidence of 40°. Find the angle of refraction.\n\n' +
            'Step 1: Apply Snell\'s law: \\(n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2\\).\n' +
            'Step 2: \\(\\sin\\theta_2 = (n_1/n_2)\\sin\\theta_1 = (1.33/1.50)\\sin 40° = (0.887)(0.643) = 0.570\\).\n' +
            'Step 3: \\(\\theta_2 = \\arcsin(0.570) \\approx 34.8°\\). The light bends toward the normal because it enters a denser medium.',
          exampleExplanation:
            'Substitute known values into Snell\'s law and solve for the refracted angle, confirming the direction of bending based on relative indices.',
        },
        {
          id: '6-4',
          title: 'Images Formed by Lenses',
          summary:
            'Lenses form images by refracting light. A converging (convex) lens brings parallel rays to a focus at the focal point on the far side of the lens. A diverging (concave) lens causes parallel rays to spread as if they came from a focal point on the same side as the incoming light. The thin lens equation has the same form as the mirror equation: \\(1/d_o + 1/d_i = 1/f\\), with \\(f\\) positive for converging lenses and negative for diverging lenses. The magnification is \\(M = -d_i/d_o\\), identical in form to the mirror magnification.\n\n' +
            'For a converging lens, when the object is beyond the focal length, the image is real, inverted, and on the opposite side of the lens. When the object is inside the focal length, the image is virtual, upright, and on the same side as the object (this is how a magnifying glass works). For a diverging lens, the image is always virtual, upright, and reduced, formed on the same side as the object.\n\n' +
            'Ray diagrams for lenses use three principal rays: a ray parallel to the axis refracts through the focal point (converging) or appears to come from the focal point (diverging); a ray through the center of the lens passes straight through undeviated; and a ray through the near focal point emerges parallel to the axis. The intersection of any two of these rays locates the image. When solving lens problems, apply the thin lens equation with correct sign conventions (positive \\(d_i\\) for real images on the opposite side, negative for virtual images on the same side as the object) and use the magnification to determine image size and orientation.',
          keyIdeas: [
            'Thin lens equation: \\(1/d_o + 1/d_i = 1/f\\); \\(f > 0\\) converging, \\(f < 0\\) diverging.',
            'Magnification: \\(M = -d_i/d_o\\); same sign conventions as mirrors.',
            'Converging lenses can form real or virtual images depending on object position.',
            'Diverging lenses always form virtual, upright, reduced images.',
          ],
          exampleCode:
            'Example question: An object is placed 15 cm in front of a diverging lens with a focal length of \\(-10\\) cm. (a) Find the image distance. (b) Describe the image.\n\n' +
            'Step 1: \\(1/d_i = 1/f - 1/d_o = 1/(-10) - 1/15 = -3/30 - 2/30 = -5/30\\), so \\(d_i = -6.0\\,\\text{cm}\\).\n' +
            'Step 2: \\(M = -d_i/d_o = -(-6.0)/15 = +0.40\\). The image is virtual (\\(d_i < 0\\)), upright (\\(M > 0\\)), and reduced (\\(|M| < 1\\)).',
          exampleExplanation:
            'Apply the thin lens equation with a negative focal length for the diverging lens, then interpret the signs of \\(d_i\\) and \\(M\\) to describe the image.',
        },
      ],
    },
    {
      unitNumber: 7,
      title: 'Waves, Sound, and Physical Optics',
      subunits: [
        {
          id: '7-1',
          title: 'Properties of Wave Pulses and Waves',
          summary:
            'A wave is a disturbance that transfers energy from one location to another without transferring matter. A wave pulse is a single disturbance, while a continuous wave involves repeated disturbances. Waves can be transverse, where the displacement of the medium is perpendicular to the direction of wave propagation (like waves on a string), or longitudinal, where the displacement is parallel to the propagation direction (like sound waves). Some waves, such as surface water waves, are a combination of both.\n\n' +
            'The key parameters that describe a wave include amplitude (the maximum displacement from equilibrium), wavelength (\\(\\lambda\\), the distance between successive identical points), frequency (\\(f\\), the number of cycles per second, measured in hertz), and period (\\(T = 1/f\\), the time for one complete cycle). These are related to wave speed by the fundamental wave equation: \\(v = f\\lambda\\). The speed of a wave depends on the properties of the medium, not on the frequency or amplitude of the wave.\n\n' +
            'Wave pulses traveling along a medium maintain their shape and speed as long as the medium is uniform. When two pulses meet, they pass through each other and superpose (add together) at the overlap region before continuing on their original paths unchanged. This superposition principle is fundamental to understanding interference, standing waves, and diffraction in later sections.',
          keyIdeas: [
            'Waves transfer energy without transferring matter; they are transverse, longitudinal, or a combination.',
            'Fundamental wave equation: \\(v = f\\lambda\\); wave speed depends on the medium.',
            'Key parameters: amplitude, wavelength, frequency, period.',
            'Superposition: overlapping waves add their displacements at each point.',
          ],
          exampleCode:
            'Example question: A wave on a string has a frequency of 12 Hz and a wavelength of 0.50 m. (a) Find the wave speed. (b) Find the period.\n\n' +
            'Step 1: \\(v = f\\lambda = (12)(0.50) = 6.0\\,\\text{m/s}\\).\n' +
            'Step 2: \\(T = 1/f = 1/12 \\approx 0.083\\,\\text{s}\\).',
          exampleExplanation:
            'Use the wave equation to find speed from frequency and wavelength, and take the reciprocal of frequency to find the period.',
        },
        {
          id: '7-2',
          title: 'Periodic Waves',
          summary:
            'A periodic wave is a wave that repeats its pattern at regular intervals in both space and time. Sinusoidal waves are the most common type of periodic wave and can be described mathematically as \\(y(x, t) = A \\sin(kx - \\omega t + \\phi)\\), where \\(A\\) is the amplitude, \\(k = 2\\pi/\\lambda\\) is the wave number, \\(\\omega = 2\\pi f\\) is the angular frequency, and \\(\\phi\\) is the phase constant. This equation describes the displacement \\(y\\) at any position \\(x\\) and time \\(t\\).\n\n' +
            'The energy carried by a wave is proportional to the square of its amplitude. Doubling the amplitude quadruples the energy. For waves on a string, the intensity (power per unit area) depends on the amplitude squared, the frequency squared, and the linear mass density and tension of the string. For three dimensional waves such as sound or light spreading from a point source, the intensity decreases with distance according to the inverse square law: \\(I \\propto 1/r^2\\), because the energy spreads over an ever larger spherical surface.\n\n' +
            'In analyzing periodic waves, distinguish carefully between the motion of individual medium particles (which oscillate back and forth in place) and the motion of the wave pattern itself (which advances through space at speed \\(v\\)). At any instant, a snapshot of a transverse periodic wave looks like a sine curve, but this shape moves to the right (or left) as time progresses while each particle of the medium simply oscillates vertically about its equilibrium position.',
          keyIdeas: [
            'Sinusoidal wave: \\(y = A\\sin(kx - \\omega t + \\phi)\\); describes displacement as a function of position and time.',
            'Wave energy is proportional to amplitude squared.',
            'Intensity from a point source follows the inverse square law: \\(I \\propto 1/r^2\\).',
            'Medium particles oscillate in place while the wave pattern propagates through space.',
          ],
          exampleCode:
            'Example question: A sound source emits 100 W of power uniformly in all directions. Find the intensity at a distance of 5.0 m from the source.\n\n' +
            'Step 1: The power spreads over a sphere: \\(A = 4\\pi r^2 = 4\\pi(5.0)^2 \\approx 314\\,\\text{m}^2\\).\n' +
            'Step 2: \\(I = P/A = 100/314 \\approx 0.32\\,\\text{W/m}^2\\).',
          exampleExplanation:
            'Divide the total power by the surface area of a sphere at the given distance to find the intensity.',
        },
        {
          id: '7-3',
          title: 'Boundary Behavior of Waves and Polarization',
          summary:
            'When a wave reaches a boundary between two media, part of the wave is reflected and part is transmitted. The behavior of the reflected wave depends on the boundary conditions. At a fixed end (like a string attached to a wall), the reflected pulse is inverted; at a free end (like a string attached to a ring that can slide freely), the reflected pulse is upright. The transmitted portion continues into the new medium at a speed determined by that medium\'s properties, and its amplitude depends on how much energy crosses the boundary.\n\n' +
            'When a wave passes from a less dense medium to a denser medium (like a light string connected to a heavy string), the reflected wave is inverted and the transmitted wave continues with a smaller amplitude and lower speed. Going from a denser to a less dense medium produces an upright reflected wave and a transmitted wave with greater speed. These boundary behaviors are analogous to what happens when light reflects off surfaces (with possible phase changes) and when sound enters a different material.\n\n' +
            'Polarization is a property unique to transverse waves. An unpolarized transverse wave vibrates in all directions perpendicular to its propagation. A polarizer filters the wave so that it vibrates in only one direction. When polarized light passes through a second polarizer (analyzer), the transmitted intensity follows Malus\'s law: \\(I = I_0 \\cos^2\\theta\\), where \\(\\theta\\) is the angle between the polarization direction and the analyzer\'s transmission axis. At \\(\\theta = 90°\\), no light passes through. Polarization is used in sunglasses, LCD screens, and many optical instruments.',
          keyIdeas: [
            'Fixed end reflection inverts the pulse; free end reflection keeps it upright.',
            'Part of a wave is reflected and part transmitted at a boundary; speeds change in different media.',
            'Polarization applies only to transverse waves.',
            'Malus\'s law: \\(I = I_0 \\cos^2\\theta\\) for polarized light through an analyzer.',
          ],
          exampleCode:
            'Example question: Polarized light of intensity \\(200\\,\\text{W/m}^2\\) passes through a polarizer whose axis is at 60° to the polarization direction. Find the transmitted intensity.\n\n' +
            'Step 1: Apply Malus\'s law: \\(I = I_0 \\cos^2\\theta = 200 \\cos^2(60°) = 200(0.25) = 50\\,\\text{W/m}^2\\).',
          exampleExplanation:
            'Substitute the angle and initial intensity into Malus\'s law and evaluate the cosine squared term.',
        },
        {
          id: '7-4',
          title: 'Electromagnetic Waves',
          summary:
            'Electromagnetic (EM) waves are transverse waves consisting of oscillating electric and magnetic fields that are perpendicular to each other and to the direction of propagation. They do not require a medium and travel through vacuum at the speed of light: \\(c \\approx 3.0 \\times 10^8\\,\\text{m/s}\\). The wave equation \\(c = f\\lambda\\) relates the frequency and wavelength of any EM wave. James Clerk Maxwell showed theoretically that oscillating electric and magnetic fields sustain each other, and Heinrich Hertz confirmed this experimentally.\n\n' +
            'The electromagnetic spectrum spans an enormous range of frequencies and wavelengths, from radio waves (longest wavelength, lowest frequency) to gamma rays (shortest wavelength, highest frequency). In order of increasing frequency, the spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X rays, and gamma rays. Visible light is a narrow band of the spectrum, ranging from about 380 nm (violet) to 750 nm (red). All EM waves carry energy; the intensity of an EM wave is proportional to the square of the electric field amplitude.\n\n' +
            'EM waves exhibit all standard wave behaviors: reflection, refraction, diffraction, interference, and polarization. The relationship between the electric and magnetic field amplitudes in an EM wave is \\(E = cB\\). When EM waves interact with matter, they can be absorbed, reflected, or transmitted depending on the frequency and the material. Different regions of the spectrum have different applications: radio waves for communication, microwaves for cooking and radar, infrared for thermal imaging, ultraviolet for sterilization, X rays for medical imaging, and gamma rays for cancer treatment.',
          keyIdeas: [
            'EM waves are transverse, with perpendicular \\(\\vec{E}\\) and \\(\\vec{B}\\) fields, traveling at \\(c = 3.0 \\times 10^8\\,\\text{m/s}\\).',
            'The spectrum ranges from radio waves to gamma rays; \\(c = f\\lambda\\) applies throughout.',
            'EM waves need no medium; the fields sustain each other.',
            'Intensity is proportional to \\(E^2\\); the relationship \\(E = cB\\) connects field amplitudes.',
          ],
          exampleCode:
            'Example question: A radio station broadcasts at a frequency of 98.5 MHz. Find the wavelength of the signal.\n\n' +
            'Step 1: Convert frequency: \\(f = 98.5 \\times 10^6\\,\\text{Hz}\\).\n' +
            'Step 2: \\(\\lambda = c/f = (3.0 \\times 10^8)/(98.5 \\times 10^6) \\approx 3.05\\,\\text{m}\\).',
          exampleExplanation:
            'Divide the speed of light by the broadcast frequency to find the wavelength.',
        },
        {
          id: '7-5',
          title: 'The Doppler Effect',
          summary:
            'The Doppler effect is the change in observed frequency of a wave when there is relative motion between the source and the observer. When the source and observer are moving closer together, the observer perceives a higher frequency (shorter wavelength); when they are moving apart, the observer perceives a lower frequency (longer wavelength). For sound waves, the formula is \\(f_{\\text{obs}} = f_s (v \\pm v_o)/(v \\mp v_s)\\), where \\(v\\) is the speed of sound, \\(v_o\\) is the observer\'s speed, and \\(v_s\\) is the source\'s speed. The upper signs apply when approaching and the lower signs when receding.\n\n' +
            'The Doppler effect for sound depends on whether it is the source, the observer, or both that are moving, because sound requires a medium and the motion of each relative to the medium matters independently. For electromagnetic waves, which do not require a medium, the Doppler effect depends only on the relative velocity between source and observer. At speeds much less than \\(c\\), the relativistic formula simplifies to \\(\\Delta f / f \\approx v/c\\), where \\(v\\) is the relative speed.\n\n' +
            'Applications of the Doppler effect are widespread. Police radar guns measure vehicle speed by detecting the frequency shift of reflected microwaves. Medical ultrasound uses the Doppler effect to measure blood flow velocity. In astronomy, redshift (a decrease in observed frequency) indicates that distant galaxies are moving away from us, providing evidence for the expansion of the universe. When solving Doppler problems, carefully determine the relative motion (approaching or receding), choose the correct signs in the formula, and remember that the effect is about observed frequency, not emitted frequency.',
          keyIdeas: [
            'Approaching: observed frequency increases; receding: observed frequency decreases.',
            'Sound Doppler formula: \\(f_{\\text{obs}} = f_s (v \\pm v_o)/(v \\mp v_s)\\).',
            'For EM waves, only relative velocity matters; redshift and blueshift describe the effect for light.',
            'Applications include radar, medical imaging, and astronomical redshift.',
          ],
          exampleCode:
            'Example question: An ambulance siren emits sound at 700 Hz. The ambulance approaches a stationary observer at 30 m/s. If the speed of sound is 343 m/s, find the frequency heard by the observer.\n\n' +
            'Step 1: Observer stationary (\\(v_o = 0\\)), source approaching (use minus in denominator): \\(f_{\\text{obs}} = f_s \\cdot v/(v - v_s)\\).\n' +
            'Step 2: \\(f_{\\text{obs}} = 700 \\times 343/(343 - 30) = 700 \\times 343/313 \\approx 767\\,\\text{Hz}\\).',
          exampleExplanation:
            'Apply the Doppler formula with the source approaching (denominator gets smaller), which increases the observed frequency.',
        },
        {
          id: '7-6',
          title: 'Wave Interference and Standing Waves',
          summary:
            'Interference occurs when two or more waves overlap in space. Constructive interference happens when the waves are in phase (crests align with crests), producing a resultant wave with greater amplitude. Destructive interference happens when the waves are out of phase (crests align with troughs), producing a resultant wave with reduced or zero amplitude. The superposition principle states that the resultant displacement at any point is the algebraic sum of the individual displacements.\n\n' +
            'Standing waves are a special case of interference that occurs when two waves of the same frequency and amplitude travel in opposite directions through the same medium. The result is a pattern that appears to stand still, with fixed points of zero displacement called nodes and points of maximum displacement called antinodes. On a string fixed at both ends, standing waves can only exist at specific frequencies: the fundamental (first harmonic) has one antinode and a wavelength of \\(\\lambda_1 = 2L\\), while the \\(n\\)th harmonic has \\(n\\) antinodes and \\(\\lambda_n = 2L/n\\).\n\n' +
            'Standing waves also occur in air columns, such as in organ pipes and wind instruments. In a pipe open at both ends, both ends are antinodes, and all harmonics are present: \\(f_n = nv/(2L)\\). In a pipe closed at one end, the closed end is a node and the open end is an antinode, so only odd harmonics are present: \\(f_n = nv/(4L)\\) for \\(n = 1, 3, 5, \\ldots\\). To solve standing wave problems, draw the standing wave pattern, count nodes and antinodes to determine the harmonic number, and use the appropriate formula to find the frequency or wavelength.',
          keyIdeas: [
            'Constructive interference: waves in phase, amplitudes add. Destructive: waves out of phase, amplitudes cancel.',
            'Standing waves: fixed nodes and antinodes from superposition of equal, opposite traveling waves.',
            'String fixed at both ends: \\(\\lambda_n = 2L/n\\); all harmonics present.',
            'Open pipe: all harmonics, \\(f_n = nv/(2L)\\). Closed pipe: odd harmonics only, \\(f_n = nv/(4L)\\).',
          ],
          exampleCode:
            'Example question: A guitar string of length 0.65 m vibrates in its third harmonic. (a) Find the wavelength. (b) If the wave speed on the string is 200 m/s, find the frequency.\n\n' +
            'Step 1: Third harmonic: \\(\\lambda_3 = 2L/3 = 2(0.65)/3 \\approx 0.433\\,\\text{m}\\).\n' +
            'Step 2: \\(f_3 = v/\\lambda_3 = 200/0.433 \\approx 462\\,\\text{Hz}\\).',
          exampleExplanation:
            'Use the standing wave formula for a string fixed at both ends to find the wavelength, then divide wave speed by wavelength to find frequency.',
        },
        {
          id: '7-7',
          title: 'Diffraction',
          summary:
            'Diffraction is the bending and spreading of waves as they pass through an opening or around an obstacle. It is most noticeable when the size of the opening or obstacle is comparable to the wavelength of the wave. For a single slit of width \\(a\\), the condition for the first minimum (dark fringe) in the diffraction pattern is \\(a \\sin\\theta = m\\lambda\\), where \\(m = 1, 2, 3, \\ldots\\) for the successive minima. The central maximum is the brightest and widest feature of the pattern, with secondary maxima that are much dimmer.\n\n' +
            'Single slit diffraction produces a pattern characterized by a broad central bright region flanked by alternating dark and bright fringes that decrease in intensity with distance from the center. The width of the central maximum is inversely proportional to the slit width: narrower slits produce wider diffraction patterns, and wider slits produce narrower ones. This inverse relationship is a general feature of wave phenomena and is related to the Heisenberg uncertainty principle in quantum mechanics.\n\n' +
            'Diffraction limits the resolution of optical instruments such as telescopes and microscopes. The Rayleigh criterion states that two point sources are just resolvable when the central maximum of one diffraction pattern coincides with the first minimum of the other. For a circular aperture of diameter \\(D\\), the minimum angular separation is \\(\\theta_{\\text{min}} \\approx 1.22 \\lambda / D\\). Larger apertures and shorter wavelengths provide better resolution. In problem solving, identify the geometry (single slit, circular aperture), use the appropriate diffraction formula, and remember that diffraction effects become significant only when the wavelength is not negligibly small compared to the aperture size.',
          keyIdeas: [
            'Diffraction: bending/spreading of waves around obstacles or through apertures.',
            'Single slit minima: \\(a \\sin\\theta = m\\lambda\\); central maximum is widest and brightest.',
            'Narrower slits produce wider diffraction patterns.',
            'Rayleigh criterion for resolution: \\(\\theta_{\\text{min}} \\approx 1.22\\lambda/D\\).',
          ],
          exampleCode:
            'Example question: Light of wavelength 550 nm passes through a single slit of width 0.10 mm. Find the angular position of the first minimum.\n\n' +
            'Step 1: Use \\(a\\sin\\theta = m\\lambda\\) with \\(m = 1\\): \\(\\sin\\theta = \\lambda/a = (550 \\times 10^{-9})/(0.10 \\times 10^{-3}) = 5.5 \\times 10^{-3}\\).\n' +
            'Step 2: \\(\\theta = \\arcsin(5.5 \\times 10^{-3}) \\approx 0.315°\\).',
          exampleExplanation:
            'Apply the single slit diffraction condition for the first minimum and take the arcsine to find the angle.',
        },
        {
          id: '7-8',
          title: 'Double Slit Interference and Diffraction Gratings',
          summary:
            'In Young\'s double slit experiment, light passing through two narrow slits produces an interference pattern of alternating bright and dark fringes on a distant screen. Bright fringes (constructive interference) occur where the path difference between the two slits is a whole number of wavelengths: \\(d\\sin\\theta = m\\lambda\\), where \\(d\\) is the slit separation, \\(m = 0, \\pm 1, \\pm 2, \\ldots\\) is the order number, and \\(\\theta\\) is the angle from the central axis. Dark fringes (destructive interference) occur where the path difference is a half integer number of wavelengths: \\(d\\sin\\theta = (m + \\tfrac{1}{2})\\lambda\\).\n\n' +
            'The fringe spacing on the screen is approximately \\(\\Delta y = \\lambda L / d\\), where \\(L\\) is the distance from the slits to the screen. This relationship shows that larger slit separations produce more closely spaced fringes, and longer wavelengths produce more widely spaced fringes. The double slit experiment was historically important because it provided strong evidence for the wave nature of light.\n\n' +
            'A diffraction grating consists of many equally spaced slits (often thousands per centimeter) and produces the same constructive interference condition as the double slit: \\(d\\sin\\theta = m\\lambda\\). However, because there are so many slits, the bright fringes (called principal maxima) are extremely narrow and sharp, making gratings ideal for precise wavelength measurements. The resolving power of a grating increases with the number of slits. In problem solving, use the same \\(d\\sin\\theta = m\\lambda\\) equation and determine \\(d\\) from the grating specification (for example, 500 lines/mm means \\(d = 1/500\\,\\text{mm} = 2.0\\,\\mu\\text{m}\\)).',
          keyIdeas: [
            'Double slit constructive interference: \\(d\\sin\\theta = m\\lambda\\); destructive: \\(d\\sin\\theta = (m + \\tfrac{1}{2})\\lambda\\).',
            'Fringe spacing: \\(\\Delta y = \\lambda L / d\\).',
            'Diffraction gratings use many slits to produce sharp, well defined maxima.',
            'Grating line spacing \\(d\\) is the reciprocal of the number of lines per unit length.',
          ],
          exampleCode:
            'Example question: A diffraction grating has 600 lines/mm. Light of wavelength 500 nm is incident on the grating. Find the angle of the second order maximum.\n\n' +
            'Step 1: \\(d = 1/(600 \\times 10^3)\\,\\text{m} = 1.67 \\times 10^{-6}\\,\\text{m}\\).\n' +
            'Step 2: \\(d\\sin\\theta = m\\lambda\\): \\(\\sin\\theta = m\\lambda/d = (2)(500 \\times 10^{-9})/(1.67 \\times 10^{-6}) = 0.599\\).\n' +
            'Step 3: \\(\\theta = \\arcsin(0.599) \\approx 36.8°\\).',
          exampleExplanation:
            'Convert the grating specification to slit spacing, apply the constructive interference condition, and solve for the angle.',
        },
        {
          id: '7-9',
          title: 'Thin Film Interference',
          summary:
            'Thin film interference occurs when light reflects off the top and bottom surfaces of a thin transparent film (such as a soap bubble or an oil slick) and the two reflected beams interfere with each other. The path difference between the two beams depends on the film thickness \\(t\\) and the index of refraction \\(n\\) of the film. For light at near normal incidence, the optical path difference is approximately \\(2nt\\).\n\n' +
            'A critical factor in thin film interference is whether a phase change occurs upon reflection. When light reflects off a surface where the index increases (from lower \\(n\\) to higher \\(n\\)), the reflected wave undergoes a phase shift of \\(\\pi\\) (equivalent to half a wavelength). When light reflects off a surface where the index decreases, there is no phase shift. The conditions for constructive and destructive interference depend on the total number of phase shifts. If both reflections have the same phase behavior (both shift or neither shifts), constructive interference occurs when \\(2nt = m\\lambda\\) and destructive when \\(2nt = (m + \\tfrac{1}{2})\\lambda\\). If only one reflection produces a phase shift, the conditions are swapped.\n\n' +
            'Thin film interference explains the iridescent colors seen in soap bubbles and oil films. Different thicknesses of film cause constructive interference for different wavelengths, producing a rainbow of colors. Anti reflection coatings on lenses use thin films designed so that the reflected waves interfere destructively at a specific wavelength, minimizing unwanted reflections. To solve thin film problems, identify the refractive indices of all three layers (the medium above, the film, and the medium below), determine which reflections have phase changes, and apply the appropriate interference condition for the net path difference including any phase shift corrections.',
          keyIdeas: [
            'Optical path difference for thin films at near normal incidence: \\(2nt\\).',
            'Phase change of \\(\\pi\\) occurs on reflection when going from lower to higher \\(n\\).',
            'Constructive or destructive conditions depend on the number of phase shifts at the two surfaces.',
            'Thin film interference explains iridescent colors and is used in anti reflection coatings.',
          ],
          exampleCode:
            'Example question: A thin film of oil (\\(n = 1.40\\)) of thickness 200 nm floats on water (\\(n = 1.33\\)). Light is incident from air (\\(n = 1.00\\)). For what visible wavelength is reflected light strongest (constructive interference)?\n\n' +
            'Step 1: Phase changes: air to oil (lower to higher \\(n\\)) gives a phase shift at the top surface. Oil to water (higher to lower \\(n\\)) gives no phase shift at the bottom surface. One phase shift total.\n' +
            'Step 2: With one phase shift, constructive interference: \\(2nt = (m + \\tfrac{1}{2})\\lambda\\).\n' +
            'Step 3: \\(\\lambda = 2nt/(m + \\tfrac{1}{2})\\). For \\(m = 0\\): \\(\\lambda = 2(1.40)(200)/(0.5) = 1120\\,\\text{nm}\\) (infrared, not visible). For \\(m = 1\\): \\(\\lambda = 560/1.5 = 373\\,\\text{nm}\\) (near violet edge). The strongest visible reinforcement is near 373 nm, at the violet end of the spectrum.',
          exampleExplanation:
            'Determine the number of phase shifts, apply the correct interference condition, and test different order numbers to find wavelengths in the visible range.',
        },
      ],
    },
    {
      unitNumber: 8,
      title: 'Quantum, Atomic, and Nuclear Physics',
      subunits: [
        {
          id: '8-1',
          title: 'Quantum Theory and Wave Particle Duality',
          summary:
            'At the turn of the twentieth century, several experiments revealed that classical physics could not explain phenomena at the atomic and subatomic scale. Max Planck proposed that energy is quantized, emitted and absorbed in discrete packets called quanta, with energy \\(E = hf\\), where \\(h = 6.63 \\times 10^{-34}\\,\\mathrm{J\\cdot s}\\) is Planck\'s constant and \\(f\\) is the frequency. This idea was initially introduced to explain blackbody radiation but turned out to be far more fundamental, signaling the birth of quantum mechanics.\n\n' +
            'Wave particle duality is the concept that all matter and radiation exhibit both wave like and particle like properties. Light, traditionally understood as a wave, behaves as a stream of particles (photons) in phenomena such as the photoelectric effect and Compton scattering. Conversely, particles such as electrons exhibit wave like behavior, as demonstrated by electron diffraction experiments. Louis de Broglie proposed that any particle with momentum \\(p\\) has an associated wavelength: \\(\\lambda = h/p = h/(mv)\\). This de Broglie wavelength is significant for particles of very small mass and becomes negligible for everyday macroscopic objects.\n\n' +
            'The Heisenberg uncertainty principle places fundamental limits on what can be known simultaneously about a particle. It states that the product of the uncertainties in position and momentum is at least \\(\\Delta x \\Delta p \\geq h/(4\\pi)\\). This is not a limitation of measurement technology but a fundamental property of nature. The wave particle duality and the uncertainty principle together form the philosophical and mathematical foundation of quantum mechanics, radically different from the deterministic world of classical physics.',
          keyIdeas: [
            'Energy is quantized: \\(E = hf\\); Planck\'s constant \\(h = 6.63 \\times 10^{-34}\\,\\mathrm{J\\cdot s}\\).',
            'Wave particle duality: light and matter exhibit both wave and particle properties.',
            'de Broglie wavelength: \\(\\lambda = h/p = h/(mv)\\).',
            'Heisenberg uncertainty principle: \\(\\Delta x \\Delta p \\geq h/(4\\pi)\\).',
          ],
          exampleCode:
            'Example question: An electron (\\(m = 9.11 \\times 10^{-31}\\,\\text{kg}\\)) moves at \\(1.0 \\times 10^6\\,\\text{m/s}\\). Find its de Broglie wavelength.\n\n' +
            'Step 1: \\(p = mv = (9.11 \\times 10^{-31})(1.0 \\times 10^6) = 9.11 \\times 10^{-25}\\,\\mathrm{kg\\cdot m/s}\\).\n' +
            'Step 2: \\(\\lambda = h/p = (6.63 \\times 10^{-34})/(9.11 \\times 10^{-25}) \\approx 7.3 \\times 10^{-10}\\,\\text{m}\\) or about 0.73 nm.',
          exampleExplanation:
            'Calculate the electron\'s momentum, then divide Planck\'s constant by the momentum to find the de Broglie wavelength.',
        },
        {
          id: '8-2',
          title: 'The Bohr Model of Atomic Structure',
          summary:
            'Niels Bohr proposed a model of the hydrogen atom in 1913 that combined classical mechanics with the new quantum ideas. In the Bohr model, the electron orbits the nucleus only in certain allowed circular orbits, each with a specific, quantized energy. The electron does not radiate energy while in one of these stationary states, contrary to classical electrodynamics. The energy levels of hydrogen are given by \\(E_n = -13.6/n^2\\,\\text{eV}\\), where \\(n = 1, 2, 3, \\ldots\\) is the principal quantum number and \\(n = 1\\) is the ground state.\n\n' +
            'Transitions between energy levels occur when the atom absorbs or emits a photon whose energy exactly equals the difference between two levels: \\(E_{\\text{photon}} = |E_f - E_i| = hf\\). When an electron drops from a higher level to a lower level, a photon is emitted; when an electron absorbs a photon of just the right energy, it jumps to a higher level. The ionization energy of hydrogen is 13.6 eV, the energy needed to completely remove the electron from the ground state (bring it to \\(n = \\infty\\) where \\(E = 0\\)).\n\n' +
            'Although the Bohr model successfully predicts the hydrogen spectrum, it has significant limitations. It does not correctly predict the spectra of multi electron atoms, it does not account for the fine structure of spectral lines, and it treats the electron as a classical particle in a well defined orbit rather than as a quantum mechanical wave function. Modern quantum mechanics, based on the Schrödinger equation, replaced the Bohr model and describes electrons as probability clouds (orbitals) rather than orbiting particles. Nonetheless, the Bohr model remains a useful introduction to quantized energy levels and photon transitions.',
          keyIdeas: [
            'Bohr model energy levels for hydrogen: \\(E_n = -13.6/n^2\\,\\text{eV}\\).',
            'Photon energy in transitions: \\(E_{\\text{photon}} = |E_f - E_i| = hf\\).',
            'The ground state is \\(n = 1\\); ionization energy is 13.6 eV.',
            'The Bohr model works well for hydrogen but fails for multi electron atoms.',
          ],
          exampleCode:
            'Example question: A hydrogen atom transitions from the \\(n = 3\\) level to the \\(n = 2\\) level. (a) Find the energy of the emitted photon. (b) Find the wavelength of the photon.\n\n' +
            'Step 1: \\(E_3 = -13.6/9 = -1.51\\,\\text{eV}\\); \\(E_2 = -13.6/4 = -3.40\\,\\text{eV}\\).\n' +
            'Step 2: \\(E_{\\text{photon}} = E_3 - E_2 = -1.51 - (-3.40) = 1.89\\,\\text{eV}\\).\n' +
            'Step 3: Convert to joules: \\(1.89 \\times 1.6 \\times 10^{-19} = 3.02 \\times 10^{-19}\\,\\text{J}\\). Then \\(\\lambda = hc/E = (6.63 \\times 10^{-34})(3.0 \\times 10^8)/(3.02 \\times 10^{-19}) \\approx 659\\,\\text{nm}\\) (red light).',
          exampleExplanation:
            'Calculate the energy levels, find the photon energy from their difference, and use \\(E = hc/\\lambda\\) to find the wavelength.',
        },
        {
          id: '8-3',
          title: 'Emission and Absorption Spectra',
          summary:
            'When atoms are excited (by heat, electrical discharge, or photon absorption), they emit light at specific discrete wavelengths, producing an emission spectrum. Each element has a unique set of emission lines, serving as a fingerprint that allows identification of the element. The emission spectrum of hydrogen, for example, consists of several well known series: the Lyman series (transitions to \\(n = 1\\), ultraviolet), the Balmer series (transitions to \\(n = 2\\), visible), and the Paschen series (transitions to \\(n = 3\\), infrared).\n\n' +
            'An absorption spectrum is produced when white light passes through a cool gas. The gas absorbs photons at exactly the same wavelengths it would emit, producing dark lines in an otherwise continuous spectrum. The pattern of absorption lines matches the emission lines for the same element. This complementarity is a direct consequence of the quantized energy levels of atoms: the same set of energy differences governs both emission and absorption.\n\n' +
            'Spectroscopy, the study of emission and absorption spectra, is one of the most powerful tools in science. In astronomy, the absorption lines in starlight reveal the chemical composition, temperature, and velocity of distant stars and galaxies. In chemistry and materials science, spectroscopy identifies unknown substances. In quantum mechanics, spectral measurements provide precise data on atomic energy levels. When solving spectroscopy problems, use the photon energy equation \\(E = hf = hc/\\lambda\\) and the energy level formulas for the relevant atom to connect observed wavelengths with specific electronic transitions.',
          keyIdeas: [
            'Emission spectra consist of discrete bright lines from atomic transitions.',
            'Absorption spectra have dark lines at the same wavelengths, superimposed on a continuous background.',
            'Each element has a unique spectral fingerprint.',
            'Spectroscopy reveals composition, temperature, and motion of distant objects.',
          ],
          exampleCode:
            'Example question: A hydrogen atom absorbs a photon and the electron transitions from \\(n = 1\\) to \\(n = 4\\). Find the wavelength of the absorbed photon.\n\n' +
            'Step 1: \\(E_1 = -13.6\\,\\text{eV}\\); \\(E_4 = -13.6/16 = -0.85\\,\\text{eV}\\).\n' +
            'Step 2: \\(E_{\\text{photon}} = E_4 - E_1 = -0.85 - (-13.6) = 12.75\\,\\text{eV} = 2.04 \\times 10^{-18}\\,\\text{J}\\).\n' +
            'Step 3: \\(\\lambda = hc/E = (6.63 \\times 10^{-34})(3.0 \\times 10^8)/(2.04 \\times 10^{-18}) \\approx 97.5\\,\\text{nm}\\) (Lyman series, ultraviolet).',
          exampleExplanation:
            'Find the energy difference between levels, convert to joules, and use \\(E = hc/\\lambda\\) to find the wavelength.',
        },
        {
          id: '8-4',
          title: 'Blackbody Radiation',
          summary:
            'A blackbody is an idealized object that absorbs all electromagnetic radiation incident on it and, when in thermal equilibrium, emits radiation with a characteristic spectrum that depends only on its temperature. The intensity of blackbody radiation as a function of wavelength peaks at a specific wavelength given by Wien\'s displacement law: \\(\\lambda_{\\text{max}} T = 2.898 \\times 10^{-3}\\,\\mathrm{m\\cdot K}\\). As temperature increases, the peak wavelength shifts to shorter (bluer) wavelengths, which is why hot objects glow first red, then orange, then white, then blue white as they heat up.\n\n' +
            'The total power radiated by a blackbody is given by the Stefan Boltzmann law: \\(P = \\sigma A T^4\\), where \\(\\sigma = 5.67 \\times 10^{-8}\\,\\mathrm{W/(m^2\\cdot K^4)}\\) is the Stefan Boltzmann constant, \\(A\\) is the surface area, and \\(T\\) is the absolute temperature. The \\(T^4\\) dependence means that small increases in temperature produce large increases in radiated power; doubling the temperature increases the radiated power by a factor of 16.\n\n' +
            'Classical physics failed to explain the shape of the blackbody spectrum, predicting an infinite amount of energy at short wavelengths (the "ultraviolet catastrophe"). Planck resolved this crisis by proposing that energy is emitted in discrete quanta of \\(E = hf\\). This quantization suppresses the high frequency contributions and produces the correct spectral shape. Planck\'s hypothesis was the first step toward quantum mechanics. In problem solving, use Wien\'s law to relate peak wavelength and temperature, and the Stefan Boltzmann law to calculate total radiated power.',
          keyIdeas: [
            'Wien\'s displacement law: \\(\\lambda_{\\text{max}} T = 2.898 \\times 10^{-3}\\,\\mathrm{m\\cdot K}\\).',
            'Stefan Boltzmann law: \\(P = \\sigma A T^4\\); radiated power scales as \\(T^4\\).',
            'The ultraviolet catastrophe was resolved by Planck\'s quantization of energy.',
            'Blackbody spectra depend only on temperature, not on the material.',
          ],
          exampleCode:
            'Example question: The surface of a star has a temperature of 6000 K. (a) Find the peak wavelength of its radiation. (b) If the star has a radius of \\(7.0 \\times 10^8\\,\\text{m}\\), find its total luminosity.\n\n' +
            'Step 1: \\(\\lambda_{\\text{max}} = (2.898 \\times 10^{-3})/6000 \\approx 4.83 \\times 10^{-7}\\,\\text{m}\\) or about 483 nm (blue green visible light).\n' +
            'Step 2: \\(A = 4\\pi r^2 = 4\\pi(7.0 \\times 10^8)^2 \\approx 6.16 \\times 10^{18}\\,\\text{m}^2\\).\n' +
            'Step 3: \\(P = \\sigma A T^4 = (5.67 \\times 10^{-8})(6.16 \\times 10^{18})(6000)^4 \\approx 4.5 \\times 10^{26}\\,\\text{W}\\).',
          exampleExplanation:
            'Apply Wien\'s law for the peak wavelength and the Stefan Boltzmann law for the total luminosity, using the star\'s temperature and surface area.',
        },
        {
          id: '8-5',
          title: 'The Photoelectric Effect',
          summary:
            'The photoelectric effect is the emission of electrons from a metal surface when light of sufficiently high frequency shines on it. Einstein explained this effect in 1905 by proposing that light consists of photons, each carrying energy \\(E = hf\\). For an electron to be ejected, the photon must have energy at least equal to the work function \\(\\phi\\) of the metal, which is the minimum energy needed to free an electron from the surface. The maximum kinetic energy of the ejected electron is \\(K_{\\text{max}} = hf - \\phi\\).\n\n' +
            'Several key observations of the photoelectric effect cannot be explained by classical wave theory. First, there exists a threshold frequency \\(f_0 = \\phi/h\\) below which no electrons are emitted regardless of the light\'s intensity. Second, increasing the intensity of the light increases the number of ejected electrons (the photocurrent) but does not increase their maximum kinetic energy. Third, the photoelectric effect is essentially instantaneous; there is no measurable time delay between the arrival of light and the emission of electrons. All three of these observations follow naturally from Einstein\'s photon model.\n\n' +
            'The stopping potential \\(V_s\\) is the voltage needed to bring the fastest photoelectrons to a halt: \\(eV_s = K_{\\text{max}} = hf - \\phi\\). Plotting \\(V_s\\) versus frequency yields a straight line with slope \\(h/e\\) and x intercept at the threshold frequency \\(f_0\\). This experiment provides a direct measurement of Planck\'s constant. In solving photoelectric effect problems, identify the work function of the metal, calculate the photon energy from the frequency or wavelength of the incoming light, and apply \\(K_{\\text{max}} = hf - \\phi\\) to find the kinetic energy or stopping potential of the photoelectrons.',
          keyIdeas: [
            'Photoelectric equation: \\(K_{\\text{max}} = hf - \\phi\\); photon must exceed the work function to eject an electron.',
            'Threshold frequency: \\(f_0 = \\phi / h\\); below this, no emission occurs at any intensity.',
            'Intensity affects the number of ejected electrons, not their maximum kinetic energy.',
            'Stopping potential: \\(eV_s = K_{\\text{max}}\\).',
          ],
          exampleCode:
            'Example question: Light of wavelength 400 nm strikes a metal surface with a work function of 2.0 eV. (a) Find the energy of each photon. (b) Find the maximum kinetic energy of ejected electrons.\n\n' +
            'Step 1: \\(E = hc/\\lambda = (6.63 \\times 10^{-34})(3.0 \\times 10^8)/(400 \\times 10^{-9}) = 4.97 \\times 10^{-19}\\,\\text{J} \\approx 3.1\\,\\text{eV}\\).\n' +
            'Step 2: \\(K_{\\text{max}} = hf - \\phi = 3.1 - 2.0 = 1.1\\,\\text{eV}\\).',
          exampleExplanation:
            'Calculate the photon energy from its wavelength, then subtract the work function to find the maximum kinetic energy of the photoelectrons.',
        },
        {
          id: '8-6',
          title: 'Compton Scattering',
          summary:
            'Compton scattering is the phenomenon in which a photon collides with a free or loosely bound electron, transferring some of its energy and momentum to the electron and emerging with a longer wavelength (lower energy). This process provides direct evidence that photons carry momentum as well as energy. The change in wavelength is given by the Compton formula: \\(\\Delta\\lambda = \\lambda\' - \\lambda = (h/(m_e c))(1 - \\cos\\theta)\\), where \\(\\theta\\) is the scattering angle of the photon, \\(m_e\\) is the electron mass, and \\(h/(m_e c) = 2.43 \\times 10^{-12}\\,\\text{m}\\) is the Compton wavelength of the electron.\n\n' +
            'The Compton effect is a purely particle like interaction. The photon is treated as a particle with energy \\(E = hf\\) and momentum \\(p = h/\\lambda = E/c\\). Conservation of energy and momentum are applied to the photon electron collision, just as in any classical two body collision, except that relativistic mechanics must be used for the electron if the photon energy is high. The maximum wavelength shift occurs in backscattering (\\(\\theta = 180°\\)), where \\(\\Delta\\lambda = 2h/(m_e c) \\approx 4.86 \\times 10^{-12}\\,\\text{m}\\).\n\n' +
            'Compton scattering was particularly important historically because it established that photons behave as particles with well defined momentum, complementing the photoelectric effect\'s demonstration of photon energy quantization. Classical wave theory predicted that scattered radiation should have the same wavelength as the incident radiation (Thomson scattering), which does not match the experimental observations at X ray wavelengths. The Compton effect confirmed the photon picture and is a standard topic in the study of photon interactions with matter.',
          keyIdeas: [
            'Compton formula: \\(\\Delta\\lambda = (h/(m_e c))(1 - \\cos\\theta)\\).',
            'Photon momentum: \\(p = h/\\lambda\\).',
            'Maximum wavelength shift at \\(\\theta = 180°\\): \\(\\Delta\\lambda_{\\text{max}} = 2h/(m_e c)\\).',
            'Compton scattering demonstrates the particle nature of photons with definite momentum.',
          ],
          exampleCode:
            'Example question: An X ray photon of wavelength 0.0500 nm is Compton scattered at an angle of 90°. Find the wavelength of the scattered photon.\n\n' +
            'Step 1: \\(\\Delta\\lambda = (h/(m_e c))(1 - \\cos 90°) = (2.43 \\times 10^{-12})(1 - 0) = 2.43 \\times 10^{-12}\\,\\text{m}\\).\n' +
            'Step 2: \\(\\lambda\' = \\lambda + \\Delta\\lambda = 0.0500 \\times 10^{-9} + 2.43 \\times 10^{-12} = 5.24 \\times 10^{-11}\\,\\text{m}\\) or about 0.0524 nm.',
          exampleExplanation:
            'Apply the Compton formula at the given scattering angle, then add the shift to the original wavelength to find the scattered wavelength.',
        },
        {
          id: '8-7',
          title: 'Fission, Fusion, and Nuclear Decay',
          summary:
            'Nuclear reactions involve changes to the nuclei of atoms and release or absorb enormous amounts of energy compared to chemical reactions. Nuclear fission is the splitting of a heavy nucleus (such as uranium 235 or plutonium 239) into two or more lighter nuclei, accompanied by the release of neutrons and a large amount of energy. The energy comes from the fact that the binding energy per nucleon is higher for the product nuclei than for the original heavy nucleus. Fission is the process used in nuclear power plants and in atomic weapons.\n\n' +
            'Nuclear fusion is the combining of light nuclei (such as hydrogen isotopes) to form a heavier nucleus, also releasing energy because the binding energy per nucleon increases. Fusion powers the sun and all stars, where hydrogen fuses into helium under extreme temperatures and pressures. On Earth, achieving controlled fusion is extremely challenging because the nuclei must overcome their mutual electrostatic repulsion, which requires temperatures of tens of millions of kelvins. Both fission and fusion convert mass into energy according to Einstein\'s mass energy equivalence: \\(E = mc^2\\).\n\n' +
            'The mass defect of a nucleus is the difference between the mass of the individual protons and neutrons and the mass of the assembled nucleus. This "missing mass" has been converted to binding energy, the energy that holds the nucleus together. The binding energy per nucleon peaks near iron 56 on the binding energy curve, which is why fusion of light elements and fission of heavy elements both release energy. In problem solving, calculate mass defects, convert them to energy using \\(E = mc^2\\), and use the binding energy curve to predict whether a given nuclear reaction is energetically favorable.',
          keyIdeas: [
            'Fission: heavy nucleus splits into lighter nuclei, releasing energy and neutrons.',
            'Fusion: light nuclei combine into a heavier nucleus, releasing energy.',
            'Mass energy equivalence: \\(E = mc^2\\); mass defect becomes binding energy.',
            'Binding energy per nucleon peaks near iron; fusion releases energy for light nuclei, fission for heavy nuclei.',
          ],
          exampleCode:
            'Example question: In a fusion reaction, two deuterium nuclei (each with mass 2.0141 u) combine to form helium 3 (mass 3.0160 u) and a neutron (mass 1.0087 u). Find the energy released. (1 u = 931.5 MeV/c\\(^2\\))\n\n' +
            'Step 1: Total initial mass: \\(2 \\times 2.0141 = 4.0282\\,\\text{u}\\). Total final mass: \\(3.0160 + 1.0087 = 4.0247\\,\\text{u}\\).\n' +
            'Step 2: Mass defect: \\(\\Delta m = 4.0282 - 4.0247 = 0.0035\\,\\text{u}\\).\n' +
            'Step 3: Energy released: \\(E = \\Delta m \\times 931.5 = 0.0035 \\times 931.5 \\approx 3.3\\,\\text{MeV}\\).',
          exampleExplanation:
            'Calculate the mass defect (initial minus final mass) and convert it to energy using the atomic mass unit to MeV conversion factor.',
        },
        {
          id: '8-8',
          title: 'Types of Radioactive Decay',
          summary:
            'Radioactive decay is the spontaneous transformation of an unstable atomic nucleus into a more stable configuration by emitting radiation. There are three primary types of radioactive decay. Alpha decay involves the emission of an alpha particle (a helium 4 nucleus, \\(^4_2\\text{He}\\)), which reduces the atomic number by 2 and the mass number by 4. Alpha particles are relatively massive and highly ionizing but have low penetrating power, typically stopped by a sheet of paper or a few centimeters of air.\n\n' +
            'Beta decay comes in two forms. In beta minus (\\(\\beta^-\\)) decay, a neutron converts into a proton, an electron, and an antineutrino; the atomic number increases by 1 while the mass number stays the same. In beta plus (\\(\\beta^+\\)) decay, a proton converts into a neutron, a positron, and a neutrino; the atomic number decreases by 1. Beta particles are moderately penetrating (stopped by a few millimeters of aluminum). Gamma decay involves the emission of high energy photons (gamma rays) from a nucleus in an excited state dropping to a lower energy state; neither the atomic number nor the mass number changes. Gamma rays are highly penetrating and require thick lead or concrete shielding.\n\n' +
            'Radioactive decay follows an exponential decay law: \\(N(t) = N_0 e^{-\\lambda t}\\) or equivalently \\(N(t) = N_0 (1/2)^{t/t_{1/2}}\\), where \\(N_0\\) is the initial number of nuclei, \\(\\lambda\\) is the decay constant, and \\(t_{1/2} = \\ln 2 / \\lambda\\) is the half life. After each half life, half the remaining radioactive nuclei have decayed. In solving decay problems, write balanced nuclear equations conserving both atomic number (\\(Z\\)) and mass number (\\(A\\)), and use the half life formula to determine the remaining quantity of a radioactive sample after a given time.',
          keyIdeas: [
            'Alpha decay: emits \\(^4_2\\text{He}\\); \\(Z\\) decreases by 2, \\(A\\) by 4.',
            'Beta minus decay: neutron becomes proton + electron + antineutrino; \\(Z\\) increases by 1.',
            'Gamma decay: emission of high energy photons; no change in \\(Z\\) or \\(A\\).',
            'Exponential decay: \\(N(t) = N_0(1/2)^{t/t_{1/2}}\\); half life \\(t_{1/2} = \\ln 2 / \\lambda\\).',
          ],
          exampleCode:
            'Example question: A radioactive sample has an initial activity of 800 Bq and a half life of 6.0 hours. (a) What is the activity after 18 hours? (b) How many half lives have passed?\n\n' +
            'Step 1: Number of half lives: \\(18/6.0 = 3.0\\) half lives.\n' +
            'Step 2: \\(A = A_0 (1/2)^3 = 800/8 = 100\\,\\text{Bq}\\).',
          exampleExplanation:
            'Divide the elapsed time by the half life to find the number of half lives, then multiply the initial activity by \\((1/2)^n\\).',
        },
      ],
    },
]

export const AP_PHYSICS_2_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics 2',
  units: AP_PHYSICS_2_UNITS,
  features: { latex: true, codeExamples: false },
}



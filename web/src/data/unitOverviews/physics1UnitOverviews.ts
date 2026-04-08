import type { SubjectUnitOverview, UnitOverview } from './types'

const PHYSICS1_UNITS: UnitOverview[] = [
  {
    unitNumber: 1,
    title: 'Kinematics and Vectors',
    subunits: [
      {
        id: '1-1',
        title: 'Scalars and Vectors in One Dimension',
        summary:
          'In mechanics, every quantity you work with is either a scalar or a vector, and knowing which is which changes how you solve problems. A scalar has only magnitude, how much, without any built‑in direction. Time, mass, temperature, and distance are classic examples: saying “5 seconds” or “3 kilograms” tells you everything you need. Scalars combine with ordinary arithmetic because there is no concept of “positive” or “negative” direction attached to them.\n\n' +
          'Vectors, on the other hand, have both magnitude and direction. Displacement, velocity, acceleration, and force all require you to specify which way as well as how much. In one‑dimensional motion (along a straight line), we usually represent direction with a sign: once you choose a positive direction (for example, “to the right” or “east”), the opposite direction is negative. A displacement of +5 m and another of −3 m combine to give a net displacement of +2 m, which tells you both the size and the direction of the overall change in position.\n\n' +
          'The key difference in problem solving is that scalars care only about magnitudes, while vectors must preserve sign information. When you add distances, you simply add the numbers. When you add displacements, you must keep track of their directions using your sign convention. This same idea carries through to velocity and acceleration: a negative velocity simply means motion in the negative direction, and a negative acceleration means the velocity is changing in the negative direction.\n\n' +
          'In a typical AP Physics 1 problem, you might be given several segments of one‑dimensional motion and asked for the total distance traveled and the net displacement. The systematic approach is: (1) Choose a positive direction and stick to it. (2) Assign signs to each vector quantity based on that choice. (3) Add distances as positive scalars to get total path length. (4) Add signed displacements (including negative values) to find net displacement. Finally, interpret the sign of the result to describe the direction of the overall motion.',
        keyIdeas: [
          'Scalars have magnitude only; vectors have both magnitude and direction.',
          'In one dimension, direction is handled with a sign convention (positive vs. negative).',
          'Distance is a scalar; displacement is a vector that can be positive, negative, or zero.',
          'When solving problems, choose a positive direction first, then assign signs consistently before adding vector quantities.',
        ],
        exampleCode:
          'Example question: A student walks 12 m east, then 5 m west in a straight hallway. (a) Find the total distance traveled. (b) Find the displacement, taking east as the positive direction. \n\n' +
          'Step 1: Choose east as positive, so west is negative. \n' +
          'Step 2: Write displacements as \\(+12\\,\\text{m}\\) and \\(-5\\,\\text{m}\\). \n' +
          'Step 3: Total distance is the sum of path lengths: \\(12 + 5 = 17\\,\\text{m}\\). \n' +
          'Step 4: The displacement is the sum of signed displacements: \\(\\Delta x = +12\\,\\text{m} + (-5\\,\\text{m}) = +7\\,\\text{m}\\), meaning 7 m to the east.',
        exampleExplanation:
          'This pattern, choose a positive direction, assign signs, then add magnitudes for distance and signed values for displacement, is the standard way to handle 1D scalar/vector questions on the exam.',
      },
      {
        id: '1-2',
        title: 'Displacement, Velocity, and Acceleration',
        summary:
          'Displacement measures how far and in what direction an object’s position changes. It is defined as the difference between the final and initial positions, \\(\\Delta x = x_{\\text{final}} - x_{\\text{initial}}\\). Unlike distance, displacement does not care about the path taken: walking in a big loop and ending where you started gives a large distance but zero displacement. Because displacement is a vector, its sign encodes direction along your chosen axis.\n\n' +
          'Velocity describes the rate at which displacement changes with time. Average velocity is given by \\(v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t}\\), and the sign of \\(v_{\\text{avg}}\\) indicates which way the object moved overall. Instantaneous velocity, which you meet in graph‑based questions, is the slope of the position,time curve at a particular instant. Constant velocity problems are especially straightforward: displacement grows linearly with time and velocity remains the same between any two instants.\n\n' +
          'Acceleration measures how velocity changes with time. Average acceleration is \\(a = \\frac{\\Delta v}{\\Delta t}\\). An object accelerates when its speed changes, its direction changes, or both. In one dimension, a positive acceleration means the velocity is changing in the positive direction; a negative acceleration means the velocity is changing in the negative direction. Whether that makes the object speed up or slow down depends on the sign of its velocity as well.\n\n' +
          'To solve a typical AP Physics 1 kinematics question, start by organizing the given information into initial position, final position, initial velocity, final velocity, time interval, and acceleration. Compute displacement using \\(\\Delta x = x_f - x_i\\), then find average velocity from \\(\\Delta x / \\Delta t\\) when appropriate. If the velocity is changing at a constant rate, use \\(a = \\frac{\\Delta v}{\\Delta t}\\) to find acceleration, or use constant‑acceleration equations to connect \\(v\\), \\(a\\), \\(t\\), and \\(\\Delta x\\). Drawing a quick number line with signs marked for direction often helps prevent sign mistakes.',
        keyIdeas: [
          'Displacement is the straight‑line change in position, not the total path length.',
          'Average velocity is displacement over time and carries direction via its sign.',
          'Acceleration describes how velocity changes with time, and can be positive or negative.',
          'In constant‑acceleration problems, organize known values and apply kinematic relationships carefully with consistent signs.',
        ],
        exampleCode:
          'Example question: A car moves along a straight road. At \\(t = 0\\,\\text{s}\\) it is at \\(x = 2\\,\\text{m}\\). At \\(t = 6\\,\\text{s}\\) it is at \\(x = 32\\,\\text{m}\\). (a) Find the displacement over this interval. (b) Find the average velocity, assuming motion is along the +x direction. \n\n' +
          'Step 1: Take \\(x_i = 2\\,\\text{m}\\) and \\(x_f = 32\\,\\text{m}\\). \n' +
          'Step 2: Compute displacement: \\(\\Delta x = x_f - x_i = 32 - 2 = 30\\,\\text{m}\\). \n' +
          'Step 3: The time interval is \\(\\Delta t = 6 - 0 = 6\\,\\text{s}\\). \n' +
          'Step 4: Average velocity is \\(v_{\\text{avg}} = \\Delta x / \\Delta t = 30\\,\\text{m} / 6\\,\\text{s} = 5\\,\\text{m/s}\\) along the +x direction.',
        exampleExplanation:
          'Here you are directly applying the definitions of displacement and average velocity; always compute \\(\\Delta x\\) and \\(\\Delta t\\) explicitly before dividing.',
      },
      {
        id: '1-3',
        title: 'Representing Motion',
        summary:
          'Motion can be represented visually with motion diagrams, graphs, and mathematically with kinematic equations. A motion diagram shows the position of an object at equal time intervals, often as a series of dots or small icons. Equally spaced dots represent constant speed, dots that spread farther apart indicate speeding up, and dots that get closer together indicate slowing down. Adding arrows between dots to show velocity vectors helps you see how both speed and direction evolve over time.\n\n' +
          'Graphs provide a powerful way to analyze motion quantitatively. On a position,time graph, the slope at any point represents velocity: a straight line with constant slope corresponds to constant velocity, while a curved line indicates changing velocity (acceleration). On a velocity,time graph, the slope represents acceleration, and the area under the curve between two times represents displacement. These graphical relationships let you translate between different descriptions of the same motion.\n\n' +
          'Kinematic equations complement these visual tools by giving algebraic relationships between displacement, velocity, acceleration, and time when acceleration is constant. Equations like \\(v = v_0 + at\\) and \\(\\Delta x = v_0 t + \\tfrac{1}{2} a t^2\\) allow you to predict future motion once you know the current state of the system. Good problem solvers often sketch a graph or motion diagram first, then choose equations that match the physical situation they have visualized.\n\n' +
          'When solving a graph‑based motion problem on the exam, begin by identifying what each axis represents and what quantity is given by the slope or area. For a velocity,time graph, find displacement by calculating the signed area under the curve (breaking it into rectangles and triangles if necessary). For a position,time graph, estimate or calculate slopes to find velocities. Only after you understand the qualitative story the graph is telling should you plug numbers into equations; this minimizes errors and deepens your intuition.',
        keyIdeas: [
          'Motion diagrams show positions at equal time intervals; spacing of dots encodes changes in speed.',
          'On a position,time graph, slope is velocity; curvature signals acceleration.',
          'On a velocity,time graph, slope is acceleration and area under the curve gives displacement.',
          'Combining graphical interpretation with kinematic equations is a robust strategy for motion problems.',
        ],
        exampleCode:
          'Example question: A cart moves in a straight line. Its velocity,time graph is a horizontal line at \\(v = 3\\,\\text{m/s}\\) from \\(t = 0\\,\\text{s}\\) to \\(t = 4\\,\\text{s}\\). Find the cart’s displacement over this time interval using the graph. \n\n' +
          'Step 1: On a \\(v\\),\\(t\\) graph, displacement is given by the area under the velocity curve. \n' +
          'Step 2: From 0 s to 4 s, the graph is a rectangle of height \\(3\\,\\text{m/s}\\) and width \\(4\\,\\text{s}\\). \n' +
          'Step 3: The area of this rectangle is \\((4\\,\\text{s})(3\\,\\text{m/s}) = 12\\,\\text{m}\\), so the displacement is \\(+12\\,\\text{m}\\).',
        exampleExplanation:
          'For constant velocity, the area under the horizontal line on a velocity,time graph is just a rectangle, which makes displacement calculations straightforward.',
      },
      {
        id: '1-4',
        title: 'Reference Frames and Relative Motion',
        summary:
          'A reference frame is the viewpoint or coordinate system from which you describe motion. All motion is relative: an object that is at rest in one frame may be moving in another. For most AP Physics 1 problems, the ground or Earth provides a convenient inertial frame, but you can sometimes simplify a situation by choosing a moving frame, such as a train or elevator, as long as you apply it consistently.\n\n' +
          'Relative motion describes how one object moves as observed from another object that may itself be moving. In one dimension, you can express this with simple velocity addition or subtraction. For example, the velocity of a person walking inside a train relative to the ground is the sum of the person’s velocity relative to the train and the train’s velocity relative to the ground (taking care with signs and directions). If two objects move in the same direction, their relative speed is the difference of their speeds; if they move in opposite directions, their relative speed is the sum.\n\n' +
          'Thinking clearly about reference frames helps avoid common misconceptions. A passenger sitting in an airplane is at rest relative to the plane but moving quickly relative to the ground. A ball thrown straight up inside a moving bus follows a vertical path relative to the bus, but a curved path relative to a roadside observer. Both descriptions are correct, and they are related by simple vector addition of velocities.\n\n' +
          'To solve a relative motion problem, start by defining each velocity with clear subscripts, such as \\(v_{\\text{person/train}}\\) and \\(v_{\\text{train/ground}}\\). Then use the idea that velocity is relative: \\(v_{\\text{person/ground}} = v_{\\text{person/train}} + v_{\\text{train/ground}}\\) in one dimension, taking care to assign positive and negative signs according to a chosen direction. Draw a simple diagram or number line to keep track of directions before substituting numerical values.',
        keyIdeas: [
          'Motion is always described relative to a chosen reference frame.',
          'Relative velocities in one dimension are added or subtracted using consistent sign conventions.',
          'Different observers can describe different paths for the same motion, but they are related by velocity addition.',
          'Careful use of subscripts and diagrams is the safest way to organize relative motion calculations.',
        ],
        exampleCode:
          'Example question: A train moves east at 18 m/s relative to the ground. A passenger walks toward the front of the train at 2 m/s relative to the train. Find the passenger’s velocity relative to the ground. \n\n' +
          'Step 1: Let \\(v_{PT}\\) be the passenger’s velocity relative to the train, \\(v_{TG}\\) the train’s velocity relative to the ground, and \\(v_{PG}\\) the passenger’s velocity relative to the ground. \n' +
          'Step 2: Take east as positive, so \\(v_{PT} = 2\\,\\text{m/s}\\) and \\(v_{TG} = 18\\,\\text{m/s}\\). \n' +
          'Step 3: Use the 1D relative velocity relation \\(v_{PG} = v_{PT} + v_{TG}\\): \\(v_{PG} = 2 + 18 = 20\\,\\text{m/s}\\) east.',
        exampleExplanation:
          'Writing velocities with clear subscripts and then applying the simple 1D relation \\(v_{PG} = v_{PT} + v_{TG}\\) is the standard way to organize relative motion problems.',
      },
      {
        id: '1-5',
        title: 'Vectors and Motion in Two Dimensions',
        summary:
          'When motion extends beyond a single line, you must treat it as two‑dimensional and use vector components. Any vector in a plane can be broken into perpendicular components, usually along horizontal (x) and vertical (y) axes. Given a vector with magnitude \\(v\\) at angle \\(\\theta\\) above the positive x‑axis, its components are \\(v_x = v \\cos\\theta\\) and \\(v_y = v \\sin\\theta\\). This decomposition allows you to analyze horizontal and vertical motion separately, turning a 2D problem into two coupled 1D problems.\n\n' +
          'Projectile motion is the central example of 2D kinematics in AP Physics 1. When an object is launched with some initial speed and angle, its horizontal motion has nearly constant velocity (ignoring air resistance), while its vertical motion experiences constant acceleration due to gravity. The combination of these motions produces a parabolic trajectory. Importantly, the horizontal and vertical motions are independent: gravity does not affect the horizontal component of velocity, and there is typically no horizontal acceleration.\n\n' +
          'Breaking vectors into components also clarifies relative motion problems like boats crossing rivers or airplanes flying in wind. In those situations, the velocity of the object relative to the ground is the vector sum of its velocity relative to the fluid (water or air) and the fluid’s velocity relative to the ground. By resolving each vector into x and y parts, adding components separately, and then recombining, you can determine both the actual path and the effective speed.\n\n' +
          'To solve a typical 2D motion problem, begin by drawing a labeled diagram and choosing coordinate axes. Next, resolve all relevant vectors into components using trigonometry. Write separate kinematic equations for the x‑direction and y‑direction, keeping in mind that time \\(t\\) is shared between them. Apply known conditions (such as vertical displacement being zero at landing) to one direction to solve for \\(t\\), and then substitute back to find ranges, maximum heights, or other quantities. Throughout, avoid mixing magnitudes and components; always add and subtract vectors through their components.',
        keyIdeas: [
          'Two‑dimensional motion is handled by resolving vectors into perpendicular components.',
          'Projectile motion combines constant horizontal velocity with constant vertical acceleration.',
          'Horizontal and vertical motions share the same time variable but evolve independently.',
          'Systematic steps, diagram, components, separate equations, then recombine, are crucial for accurate 2D solutions.',
        ],
        exampleCode:
          'Example question: A ball is thrown from ground level with speed 14 m/s at an angle of \\(30^\\circ\\) above the horizontal. Ignore air resistance. (a) Find the initial horizontal and vertical components of the velocity. (b) Find how long the ball is in the air before it returns to the same height. Take \\(g = 9.8\\,\\text{m/s}^2\\). \n\n' +
          'Step 1: Resolve the launch speed \\(v_0 = 14\\,\\text{m/s}\\) into components: \\(v_{0x} = v_0 \\cos 30^\\circ\\) and \\(v_{0y} = v_0 \\sin 30^\\circ\\). \n' +
          'Step 2: Use \\(\\cos 30^\\circ \\approx 0.866\\) and \\(\\sin 30^\\circ = 0.5\\): \\(v_{0x} \\approx 12.1\\,\\text{m/s}\\) and \\(v_{0y} = 7.0\\,\\text{m/s}\\). \n' +
          'Step 3: For vertical motion, set \\(v_y = 0\\) at the top: \\(0 = v_{0y} - g t_{\\text{up}}\\), so \\(t_{\\text{up}} = v_{0y} / g \\approx 0.71\\,\\text{s}\\). \n' +
          'Step 4: The total time in the air is \\(t_{\\text{total}} = 2 t_{\\text{up}} \\approx 1.42\\,\\text{s}\\).',
        exampleExplanation:
          'This projectile example shows the full 2D pattern: resolve the launch velocity into components, then use 1D constant-acceleration motion in the vertical direction while keeping horizontal velocity constant.',
      },
    ],
  },
  {
    unitNumber: 2,
    title: 'Forces and Newton’s Laws',
    subunits: [
      {
        id: '2-1',
        title: 'Systems and Center of Mass',
        summary:
          'In many mechanics problems, rather than tracking every individual object, it is more effective to define a system and analyze its overall behavior. A system is any collection of objects you choose to treat as a single unit, such as a pair of colliding carts or a person standing on a skateboard. External forces act on the system from outside, while internal forces are interactions between parts of the system. In many cases, internal forces cancel in pairs and do not affect the system’s overall motion.\n\n' +
          'The center of mass is the effectively “average” position of all the mass in a system. For simple, uniform objects (like a solid sphere or a uniform rod), the center of mass lies at the geometric center. For irregular or composite systems, the center of mass is weighted toward where more mass is located and may even lie outside the physical material. Treating a system as if all its mass were concentrated at the center of mass greatly simplifies the analysis of translational motion.\n\n' +
          'Understanding center of mass helps explain balance, stability, and the motion of extended bodies. If the line from the center of mass falls outside the base of support, the object tends to tip over. In collisions, the center of mass of an isolated system moves according to the net external force, even if individual pieces undergo complicated internal interactions.\n\n' +
          'To solve center‑of‑mass problems, first decide what objects belong to your system. Then, if you need the center of mass explicitly, use a weighted average: for point masses on a line, \\(x_{\\text{cm}} = \\frac{\\sum m_i x_i}{\\sum m_i}\\). For motion questions, focus on the net external force on the system and apply Newton’s Second Law to its center of mass. This approach lets you ignore internal forces, such as tensions between blocks, when you are only asked about the acceleration of the combined system.',
        keyIdeas: [
          'A system is a chosen collection of objects; external forces act from outside the system.',
          'The center of mass represents the average position of mass and often moves like a single particle.',
          'Balance and tipping behavior depend on whether the center of mass lies above the base of support.',
          'For translational motion of a system, only net external forces matter; internal forces typically cancel in pairs.',
        ],
        exampleCode:
          'Example question: Two carts are connected by a light rod and pushed as a single system across a frictionless track. Cart A has mass 1.0 kg and Cart B has mass 2.0 kg. A horizontal force of 6.0 N is applied to Cart A. (a) What is the acceleration of the two-cart system? (b) What is the net external force on the system? \n\n' +
          'Step 1: Treat both carts plus rod as one system of mass \\(m_{\\text{total}} = 1.0 + 2.0 = 3.0\\,\\text{kg}\\). Internal forces between carts cancel. \n' +
          'Step 2: The only horizontal external force is \\(F = 6.0\\,\\text{N}\\), so use \\(F_{\\text{net}} = m_{\\text{total}} a\\). \n' +
          'Step 3: Solve for acceleration: \\(a = F_{\\text{net}} / m_{\\text{total}} = 6.0 / 3.0 = 2.0\\,\\text{m/s}^2\\). \n' +
          'Step 4: The net external force on the system is just 6.0 N in the direction of the push.',
        exampleExplanation:
          'For center-of-mass and system questions, bundle interacting objects into one system so that internal forces cancel and apply F_net = M a_cm to the whole system.',
      },
      {
        id: '2-2',
        title: 'Forces and Free-Body Diagrams',
        summary:
          'A force is an interaction that can change an object’s motion, and it is always a vector with both magnitude and direction. Common forces in AP Physics 1 include weight (the gravitational force near Earth’s surface), normal force (a support force from surfaces), tension in ropes or strings, applied pushes or pulls, and friction. Forces are measured in newtons (N), where 1 N equals 1 kg·m/s².\n\n' +
          'Free‑body diagrams (FBDs) are one of the most important tools in mechanics. An FBD shows an isolated object (or system) as a simple dot or box, with arrows representing all forces acting on it. Each arrow points in the direction of the force and has a relative length proportional to its magnitude; each is labeled with the type of force (such as \\(F_g\\), \\(F_N\\), \\(T\\), or \\(F_f\\)). Drawing a correct FBD is often half the work of solving a Newton’s laws problem, because it makes the situation and interactions explicit.\n\n' +
          'Once the forces are identified on the free‑body diagram, you resolve them into components along chosen axes (usually horizontal and vertical) and then apply Newton’s Second Law, \\(\\sum F = m a\\), separately in each direction. This process converts your diagram into equations you can solve for unknown accelerations, tensions, or friction forces. Recognizing when forces balance (net force zero) versus when a net force causes acceleration is central to interpreting FBDs correctly.\n\n' +
          'To solve a typical forces problem, start by clearly isolating the object of interest and drawing an accurate free‑body diagram. Choose axes that simplify the forces (for example, align one axis along an inclined plane). Break angled forces into components, then write \\(\\sum F_x = m a_x\\) and \\(\\sum F_y = m a_y\\). Insert known values, solve for the unknowns, and finally check if your answers make physical sense, for instance, whether the direction of acceleration matches the net force shown on the diagram.',
        keyIdeas: [
          'Forces are vectors that can change an object’s motion; common types include weight, normal, tension, applied, and friction.',
          'A free‑body diagram isolates one object and shows all external forces acting on it.',
          'Forces are resolved into components along chosen axes before applying Newton’s Second Law.',
          'Careful FBDs and component equations are the backbone of nearly all dynamics problems on the exam.',
        ],
        exampleCode:
          'Example question: A 4.0 kg box is pulled along a horizontal floor by a rope that makes a 30° angle above the horizontal. The tension in the rope is 20 N and the coefficient of kinetic friction is \\(\\mu_k = 0.20\\). (a) Draw and label a free-body diagram for the box. (b) Find the acceleration of the box. \n\n' +
          'Step 1: Resolve the tension into components: \\(T_x = T \\cos 30^\\circ\\), \\(T_y = T \\sin 30^\\circ\\). With \\(T = 20\\,\\text{N}\\), \\(T_x \\approx 17.3\\,\\text{N}\\), \\(T_y = 10\\,\\text{N}\\). \n' +
          'Step 2: Vertical forces: \\(N + T_y - mg = 0 \\Rightarrow N = mg - T_y = (4.0)(9.8) - 10 \\approx 29.2\\,\\text{N}\\). \n' +
          'Step 3: Kinetic friction: \\(f_k = \\mu_k N = 0.20(29.2) \\approx 5.8\\,\\text{N}\\) (opposes motion). \n' +
          'Step 4: Horizontal forces: \\(\\sum F_x = T_x - f_k = 17.3 - 5.8 = 11.5\\,\\text{N}\\). Use \\(\\sum F_x = ma\\): \\(11.5 = (4.0)a \\Rightarrow a \\approx 2.9\\,\\text{m/s}^2\\) to the right.',
        exampleExplanation:
          'The core pattern is: draw a free-body diagram, resolve angled forces into components, find the normal force, then use ΣF = ma along each axis.',
      },
      {
        id: '2-3',
        title: "Newton's Third Law",
        summary:
          "Newton’s Third Law states that for every action force, there is an equal and opposite reaction force. When object A exerts a force on object B, object B simultaneously exerts a force of the same magnitude but opposite direction on object A. These forces form an action,reaction pair and always act on different objects, which is why they do not cancel each other when you analyze the motion of a single object.\n\n" +
          'This law helps explain many everyday phenomena: a rocket accelerates upward because the exhaust gases are pushed downward; a swimmer moves forward because they push water backward. In each case, the motion of one object is tied to the reaction force from the other. Importantly, third‑law force pairs are of the same type (for example, both contact forces or both gravitational) and occur along the same line of action.\n\n' +
          'Students sometimes mistakenly add third‑law pairs together, thinking they should cancel. Instead, you must separate your analysis: when drawing a free‑body diagram for one object, you include only the forces acting on that object, not the equal and opposite forces it exerts on others. The acceleration of each object is determined by the net force on that object alone, even though the interaction is mutual.\n\n' +
          'To apply Newton’s Third Law in problem solving, first identify interacting pairs, such as a person and the ground, a block and a table, or a car and the road. For each interaction, write down both forces in the pair, being clear about which object experiences which force. Then, for each object, draw a separate free‑body diagram including only the forces acting on it. From there, apply Newton’s Second Law to each object or system. This systematic separation of interactions and motion prevents you from incorrectly canceling forces that belong in different free‑body diagrams.',
        keyIdeas: [
          'Action,reaction force pairs are equal in magnitude, opposite in direction, and act on different objects.',
          'Third‑law pairs never cancel in a single free‑body diagram because they do not act on the same object.',
          'Understanding which forces form a third‑law pair helps in constructing consistent free‑body diagrams for interacting objects.',
          "In multi‑object systems, apply Newton's Second Law separately to each object, using third‑law pairs to relate their interaction forces.",
        ],
        exampleCode:
          'Example question: A person pushes on a wall with a horizontal force of 150 N. The wall does not move. (a) What is the magnitude and direction of the force the wall exerts on the person? (b) Are these forces a third-law pair? \n\n' +
          'Step 1: By Newton’s Third Law, if the person exerts a force \\(\\vec{F}_{\\text{person on wall}}\\) of 150 N on the wall, the wall exerts a force \\(\\vec{F}_{\\text{wall on person}}\\) of 150 N on the person in the opposite direction. \n' +
          'Step 2: So the wall’s force on the person has magnitude 150 N and points opposite the person’s push. \n' +
          'Step 3: Yes, these two forces form an action,reaction pair: equal in magnitude, opposite in direction, and acting on different objects.',
        exampleExplanation:
          'Always identify which two objects are interacting; the third-law pair is the force each exerts on the other, not forces on the same object.',
      },
      {
        id: '2-4',
        title: "Newton's First Law",
        summary:
          "Newton’s First Law, often called the Law of Inertia, states that an object at rest remains at rest and an object in motion continues in a straight line at constant speed unless acted upon by a net external force. Inertia is the natural tendency of objects to resist changes in their state of motion, and it is directly related to mass: more massive objects are harder to start, stop, or turn.\n\n" +
          'This law emphasizes the importance of net force. Many real‑world situations involve multiple forces acting simultaneously, such as weight and normal force on a resting book. When these forces balance so that the net force is zero, the object remains in equilibrium; it does not accelerate. An object in equilibrium might be at rest (static equilibrium) or moving at constant velocity (dynamic equilibrium), but in both cases the acceleration is zero.\n\n' +
          'Common misconceptions arise when people assume that a force is required to keep an object moving at constant velocity. In reality, if friction and other resistive forces were completely absent, no push or pull would be needed to maintain motion; a force is only required to change velocity. On Earth, friction and air resistance usually provide the unbalanced forces that slow moving objects down unless additional driving forces offset them.\n\n' +
          'To solve problems involving Newton’s First Law, start by identifying all forces acting on the object and drawing a free‑body diagram. If the object moves at constant velocity or remains at rest, set the net force in each direction equal to zero (\\(\\sum F_x = 0\\), \\(\\sum F_y = 0\\)) and solve for unknown forces such as tension or normal force. If you find a nonzero net force, then by definition the object is not in equilibrium, and you must instead apply Newton’s Second Law to determine its acceleration.',
        keyIdeas: [
          'Inertia is the tendency of an object to resist changes in motion and is proportional to mass.',
          'If the net external force on an object is zero, its velocity is constant (which may be zero).',
          'Equilibrium means no acceleration, not necessarily no motion.',
          'Many static and constant‑velocity problems reduce to setting the sum of forces to zero in each direction.',
        ],
        exampleCode:
          'Example question: A 10 kg box rests on a horizontal floor. A horizontal pull of 40 N is applied, but the box does not move. (a) What is the net force on the box? (b) What is the magnitude of the friction force? \n\n' +
          'Step 1: Since the box is at rest and stays at rest, its acceleration is zero, so the net force must be zero (\\(\\sum \\vec{F} = 0\\)). \n' +
          'Step 2: Horizontally, \\(\\sum F_x = F_{\\text{pull}} - F_{\\text{friction}} = 0 \\Rightarrow F_{\\text{friction}} = F_{\\text{pull}} = 40\\,\\text{N}\\). \n' +
          'Step 3: Vertically, weight is balanced by the normal force, so there is also no vertical acceleration (\\(\\sum F_y = 0\\)).',
        exampleExplanation:
          'For Newton’s First Law problems, use the fact that zero acceleration implies the net force in each direction must be zero and solve for any unknown forces.',
      },
      {
        id: '2-5',
        title: "Newton's Second Law",
        summary:
          "Newton’s Second Law quantitatively links net force, mass, and acceleration. It is commonly written as \\(F_{\\text{net}} = m a\\), where \\(F_{\\text{net}}\\) is the vector sum of all forces acting on an object, \\(m\\) is its mass, and \\(a\\) is its resulting acceleration. This equation tells you that for a given mass, larger net forces cause larger accelerations, and for a given net force, more massive objects experience smaller accelerations.\n\n" +
          'Because force and acceleration are vectors, their directions always match: the acceleration of an object points in the same direction as the net force acting on it. This fact is extremely useful when checking your work, if your calculated acceleration points opposite to the clearly dominant force in your free‑body diagram, something is likely wrong in your sign convention or algebra.\n\n' +
          'In multi‑force situations, it is often easier to resolve each force into components along chosen axes, then sum the components separately. You then write component forms of Newton’s Second Law, such as \\(\\sum F_x = m a_x\\) and \\(\\sum F_y = m a_y\\). On horizontal surfaces with friction, this might mean the normal force balances weight (\\(\\sum F_y = 0\\)), while the horizontal forces determine the acceleration.\n\n' +
          'To solve Second Law problems efficiently, follow a standard procedure: (1) Draw a clear free‑body diagram. (2) Choose axes and break any angled forces into components. (3) Write \\(\\sum F_x = m a_x\\) and \\(\\sum F_y = m a_y\\), including signs for each term. (4) Substitute known values and solve the resulting algebraic equations for unknown accelerations or forces. Throughout, keep track of units and directions to ensure the final answer is both numerically and physically reasonable.',
        keyIdeas: [
          "Newton’s Second Law states that an object’s acceleration is proportional to the net force and inversely proportional to its mass.",
          'Force and acceleration are vectors that always point in the same direction.',
          'Writing component equations (\\(\\sum F_x = m a_x\\), \\(\\sum F_y = m a_y\\)) is essential for 2D force problems.',
          'A consistent four‑step method, diagram, components, equations, solve, greatly reduces errors in dynamics questions.',
        ],
        exampleCode:
          'Example question: A 5.0 kg block is pulled to the right on a frictionless horizontal surface by a constant horizontal force of 15 N. (a) Find the acceleration of the block. (b) How far does it travel in 4.0 s starting from rest? \n\n' +
          'Step 1: Draw a free-body diagram: horizontally, only the 15 N pull; vertically, weight and normal cancel. \n' +
          'Step 2: Apply Newton’s Second Law in x: \\(\\sum F_x = ma \\Rightarrow 15 = (5.0)a \\Rightarrow a = 3.0\\,\\text{m/s}^2\\). \n' +
          'Step 3: Use constant-acceleration kinematics with initial speed 0: \\(x = \\tfrac{1}{2} a t^2 = \\tfrac{1}{2} (3.0)(4.0)^2 = 24\\,\\text{m}\\).',
        exampleExplanation:
          'Once you know the net force and mass, Newton’s Second Law gives acceleration, and then constant-acceleration kinematics gives displacement.',
      },
      {
        id: '2-6',
        title: 'Gravitational Force and Weight',
        summary:
          'Gravitational force is the attractive interaction between objects with mass. Near Earth’s surface, this force is nearly constant in magnitude and points downward toward the center of Earth. The gravitational force on an object of mass \\(m\\) is called its weight and is given by \\(F_g = m g\\), where \\(g \\approx 9.8\\ \\text{m/s}^2\\) is the local gravitational field strength. Weight is a force and is measured in newtons, not kilograms.\n\n' +
          'In many AP Physics 1 problems, weight is one of several forces acting on an object and must be included correctly on the free‑body diagram. For example, a block on a table experiences weight downward and a normal force upward; in an elevator, the scale reading (normal force) can be greater or less than weight, depending on the acceleration. Distinguishing between mass (a measure of inertia) and weight (the force of gravity on that mass) is crucial when interpreting such scenarios.\n\n' +
          'Weight can vary with location because the gravitational field strength changes with distance from Earth’s center or on different planets. An astronaut’s mass is the same on Earth and the Moon, but their weight is smaller on the Moon because \\(g\\) is smaller there. In orbital problems, you may use the universal law of gravitation, which shows that gravitational force decreases with the square of the distance between masses.\n\n' +
          'When solving problems, treat weight as just another downward force of magnitude \\(m g\\) in the free‑body diagram. Decide whether the object is in equilibrium vertically (\\(\\sum F_y = 0\\)) or accelerating, and then relate weight to the normal, tension, or other vertical forces as needed. For elevator or scale problems, carefully apply Newton’s Second Law in the vertical direction to connect the normal force (what the scale “reads”) to \\(m g\\) and the known acceleration.',
        keyIdeas: [
          'Weight is the gravitational force on an object and equals \\(m g\\) near Earth’s surface.',
          'Mass is a measure of inertia and does not change with location; weight can change if \\(g\\) changes.',
          'In free‑body diagrams, weight is always drawn downward toward Earth’s center.',
          'Scale readings correspond to normal force, which may be greater, equal to, or less than weight depending on acceleration.',
        ],
        exampleCode:
          'Example question: A 60 kg person stands on a bathroom scale in an elevator. (a) What does the scale read when the elevator is at rest? (b) What does the scale read when the elevator accelerates upward at 2.0 m/s²? \n\n' +
          'Step 1: At rest, \\(\\sum F_y = 0 \\Rightarrow N - mg = 0 \\Rightarrow N = mg = (60)(9.8) \\approx 5.9 \\times 10^2\\,\\text{N}\\). The scale reads about 590 N. \n' +
          'Step 2: When accelerating upward, take up as positive: \\(\\sum F_y = ma \\Rightarrow N - mg = ma\\). \n' +
          'Step 3: Solve for \\(N\\): \\(N = m(g + a) = 60(9.8 + 2.0) = 60(11.8) \\approx 7.1 \\times 10^2\\,\\text{N}\\). The reading increases when accelerating upward.',
        exampleExplanation:
          'Treat the scale reading as the normal force and use ΣF_y = ma; when acceleration is nonzero, N will differ from mg.',
      },
      {
        id: '2-7',
        title: 'Kinetic and Static Friction',
        summary:
          'Friction is a force that opposes relative motion or attempted motion between two surfaces in contact. There are two primary types in AP Physics 1: static friction and kinetic friction. Static friction acts when surfaces are not sliding relative to each other; it adjusts up to a maximum value to prevent motion. Kinetic friction acts when surfaces are already sliding and typically has a nearly constant magnitude.\n\n' +
          'The maximum static friction force can be modeled as \\(f_{s,\\max} = \\mu_s N\\), where \\(\\mu_s\\) is the coefficient of static friction and \\(N\\) is the normal force. Kinetic friction is modeled as \\(f_k = \\mu_k N\\), with \\(\\mu_k < \\mu_s\\) for most surfaces. These coefficients depend on the materials and surface roughness, not on the contact area. Friction always acts parallel to the surface and opposite the direction of (or intended) motion.\n\n' +
          'In many problems, friction is what balances an applied force to prevent motion or what reduces the net force and thus the acceleration. Recognizing whether the object is stationary or sliding is the first step to choosing the correct friction model. Once motion begins, static friction no longer applies; kinetic friction takes over with its typically smaller value.\n\n' +
          'When solving friction problems, draw a free‑body diagram including weight, normal force, and friction. Determine the normal force first, often from \\(\\sum F_y = 0\\). Decide whether the object is on the verge of moving (use \\(f_{s,\\max}\\)) or already moving (use \\(f_k\\)). Then, apply Newton’s Second Law along the direction of motion or potential motion, with friction opposing that motion. Compare your computed friction force to \\(f_{s,\\max}\\) to check whether the object actually stays at rest or begins to slide.',
        keyIdeas: [
          'Static friction prevents motion up to a maximum value; kinetic friction opposes motion once sliding occurs.',
          'Both static and kinetic friction are proportional to the normal force: \\(f_{s,\\max} = \\mu_s N\\), \\(f_k = \\mu_k N\\).',
          'Friction acts parallel to the surface and opposite the direction of relative motion or intended motion.',
          'Determining whether the object moves is often a matter of comparing the required friction to \\(f_{s,\\max}\\).',
        ],
        exampleCode:
          'Example question: A 25 N horizontal force is applied to a 10 kg crate at rest on a horizontal floor. The coefficients of friction are \\(\\mu_s = 0.40\\) and \\(\\mu_k = 0.30\\). (a) Does the crate move? (b) If it moves, what is its acceleration? \n\n' +
          'Step 1: Compute the maximum static friction: \\(f_{s,\\max} = \\mu_s N = 0.40(10 \\times 9.8) = 39\\,\\text{N}\\). \n' +
          'Step 2: The applied force 25 N is less than 39 N, so static friction can match it and the crate does not move. \n' +
          'Step 3: Since it doesn’t move, acceleration is zero and kinetic friction (\\(f_k = \\mu_k N\\)) is never reached.',
        exampleExplanation:
          'Always compare the applied force to f_s,max first; only if the applied force exceeds f_s,max does the object break loose and kinetic friction apply.',
      },
      {
        id: '2-8',
        title: 'Spring Forces',
        summary:
          'Spring forces arise when elastic objects such as springs or rubber bands are stretched or compressed. For many springs, the restoring force is well described by Hooke’s Law: \\(F = -k x\\), where \\(k\\) is the spring constant (a measure of stiffness) and \\(x\\) is the displacement from the equilibrium length. The negative sign indicates that the spring’s force always acts opposite to the direction of displacement, trying to restore the system to equilibrium.\n\n' +
          'The magnitude of the spring force increases linearly with displacement for ideal springs. A larger \\(k\\) means a stiffer spring that requires more force to stretch or compress by the same amount. Springs are common in mechanical systems, such as suspension systems, measuring scales, and oscillating masses, so recognizing when Hooke’s Law applies is important.\n\n' +
          'Springs also store elastic potential energy, which is later explored in energy units. The work required to compress or stretch a spring by a distance \\(x\\) is converted into stored potential energy that can be released to do work on other objects. In simple harmonic motion, the interplay between spring force and inertia leads to oscillations about the equilibrium position.\n\n' +
          'To solve spring‑force problems, identify the equilibrium length and measure displacement \\(x\\) from that point. Use \\(F = k x\\) for magnitudes when writing force equations, remembering the direction of the restoring force in your free‑body diagram. For static equilibrium questions, set the spring force equal to other forces (like weight) to find equilibrium positions. For dynamics, combine \\(F = -k x\\) with Newton’s Second Law to find accelerations or to derive equations of motion for oscillating systems.',
        keyIdeas: [
          "Hooke’s Law, \\(F = -k x\\), models the restoring force of many springs near equilibrium.",
          'The spring constant \\(k\\) measures stiffness; larger \\(k\\) means more force for the same displacement.',
          'Spring forces always act opposite to the displacement from equilibrium, pulling the system back toward its rest position.',
          'Balancing spring force with other forces or combining it with \\(F = m a\\) are standard approaches in spring problems.',
        ],
        exampleCode:
          'Example question: A vertical spring has spring constant \\(k = 250\\,\\text{N/m}\\). A 1.0 kg mass is hung from the spring and allowed to come to rest. (a) How far does the spring stretch from its natural length? (b) What is the magnitude of the spring force at equilibrium? \n\n' +
          'Step 1: At equilibrium, spring force balances weight: \\(k x = mg\\). \n' +
          'Step 2: Solve for \\(x\\): \\(x = mg / k = (1.0 \\times 9.8) / 250 \\approx 0.039\\,\\text{m}\\) (about 3.9 cm). \n' +
          'Step 3: The spring force at equilibrium is \\(F_s = kx = mg \\approx 9.8\\,\\text{N}\\) upward.',
        exampleExplanation:
          'For static spring problems, set kx equal to the other vertical force (like mg) at equilibrium and solve for the stretch.',
      },
      {
        id: '2-9',
        title: 'Circular Motion',
        summary:
          'Circular motion occurs when an object moves along a circular path around a fixed center. Even if the object’s speed remains constant, its velocity is continuously changing direction, which means it is accelerating. The acceleration that points toward the center of the circle is called centripetal acceleration and has magnitude \\(a_c = \\frac{v^2}{r}\\), where \\(v\\) is the speed and \\(r\\) is the radius of the circular path.\n\n' +
          'The net force that causes this centripetal acceleration is called the centripetal force, with magnitude \\(F_c = m \\frac{v^2}{r}\\). This force is not a new type of force; rather, it is provided by familiar forces such as tension, gravity, normal force, or friction, depending on the situation. For example, friction between tires and road provides the centripetal force in a flat turn, while gravity provides the centripetal force for a satellite orbiting Earth.\n\n' +
          'Understanding which force (or combination of forces) plays the role of centripetal force is the key to analyzing circular motion problems. At the top or bottom of a vertical circle, weight and tension (or normal force) combine in different ways to provide the required centripetal force, leading to different apparent weights or normal forces at different points.\n\n' +
          'When solving circular motion problems, begin with a free‑body diagram and choose radial (toward or away from the center) and tangential directions as your axes. Write Newton’s Second Law in the radial direction as \\(\\sum F_r = m \\frac{v^2}{r}\\), taking care with signs (toward the center is usually chosen as positive). Substitute expressions for the actual forces (such as \\(T\\), \\(N\\), and \\(m g\\)) and solve for the unknown speed, radius, or force. Finally, check whether your answer is physically plausible, for instance, that a normal force does not turn out negative unless it correctly indicates loss of contact.',
        keyIdeas: [
          'Circular motion with constant speed still involves acceleration because the direction of velocity changes.',
          'Centripetal acceleration has magnitude \\(a_c = v^2 / r\\) and points toward the center of the circle.',
          'Centripetal force is provided by existing forces (tension, gravity, friction, normal), not a new type of force.',
          'Analyzing circular motion requires resolving forces in the radial direction and setting \\(\\sum F_r = m v^2 / r\\).',
        ],
        exampleCode:
          'Example question: A 1.2 × 10³ kg car travels around a flat circular curve of radius 50 m at a constant speed of 12 m/s. (a) What is the magnitude of the centripetal acceleration? (b) What frictional force must the road provide? \n\n' +
          'Step 1: Use \\(a_c = v^2 / r = (12)^2 / 50 = 144 / 50 = 2.9\\,\\text{m/s}^2\\) toward the center. \n' +
          'Step 2: The required centripetal force is \\(F_c = m a_c = (1.2 \\times 10^3)(2.9) \\approx 3.5 \\times 10^3\\,\\text{N}\\). \n' +
          'Step 3: On a flat curve, this radial force is provided by friction between tires and road, directed toward the center.',
        exampleExplanation:
          'For uniform circular motion, compute a_c = v² / r, then find the actual force (tension, friction, etc.) that must supply F_c = m a_c.',
      },
    ],
  },
  {
    unitNumber: 3,
    title: 'Work and Energy',
    subunits: [
      {
        id: '3-1',
        title: 'Translational Kinetic Energy',
        summary:
          'Kinetic energy is the energy an object has because it is moving. In translational motion, this energy depends on both the object’s mass and its speed. The formula for translational kinetic energy is \\(K = \\tfrac{1}{2} m v^2\\), where \\(m\\) is the mass in kilograms and \\(v\\) is the speed in meters per second. Because the velocity is squared, even small increases in speed can lead to large increases in kinetic energy, which is why high‑speed collisions are so dangerous.\n\n' +
          'Kinetic energy is always non‑negative: an object at rest has zero kinetic energy, while a moving object has a positive amount. The units of kinetic energy are joules (J), the same as all forms of energy. In many problems, you will compare kinetic energy before and after some event, such as a push, a collision, or motion down a ramp, to see how energy is transferred or transformed.\n\n' +
          'Conceptually, kinetic energy measures how much “ability to do work” a moving object carries. A more massive object moving at the same speed has more kinetic energy, and an object moving faster with the same mass also has more kinetic energy. This ties directly into stopping distance: a car traveling twice as fast has four times the kinetic energy, so much more work must be done by the brakes and friction to bring it to rest.\n\n' +
          'To solve a typical kinetic energy problem, start by identifying the object whose energy you are tracking and measuring or calculating its mass and speed. Plug these into \\(K = \\tfrac{1}{2} m v^2\\) to find the kinetic energy. If the problem involves changes in speed, find the initial and final kinetic energies and compute \\(\\Delta K = K_f - K_i\\). You can then relate this change in kinetic energy to the net work done on the object using the work,energy theorem in later subunits.',
        keyIdeas: [
          'Translational kinetic energy is given by \\(K = \\tfrac{1}{2} m v^2\\) and is always non‑negative.',
          'Kinetic energy increases with both mass and the square of speed.',
          'The joule (J) is the standard unit for kinetic energy and all other forms of energy.',
          'Changes in kinetic energy are often linked to work done by forces or energy transfers in a system.',
        ],
        exampleCode:
          'Example question: A 2.0 kg ball is rolling at 3.0 m/s. (a) What is its kinetic energy? (b) If its speed is doubled, what is the new kinetic energy? \n\n' +
          'Step 1: Use \\(K = \\tfrac{1}{2} m v^2\\). For \\(v = 3.0\\,\\text{m/s}\\): \\(K = \\tfrac{1}{2} (2.0)(3.0^2) = 9.0\\,\\text{J}\\). \n' +
          'Step 2: When the speed is doubled to \\(6.0\\,\\text{m/s}\\): \\(K = \\tfrac{1}{2} (2.0)(6.0^2) = 36\\,\\text{J}\\). \n' +
          'Step 3: Notice that doubling speed made kinetic energy four times larger.',
        exampleExplanation:
          'Translational kinetic energy scales with the square of speed, so doubling v makes K four times as large for the same mass.',
      },
      {
        id: '3-2',
        title: 'Work',
        summary:
          'In physics, work measures how a force transfers energy to or from an object by causing displacement. A force does work on an object only if the object moves and there is a component of the force along the direction of motion. The general expression for work by a constant force is \\(W = F d \\cos\\theta\\), where \\(F\\) is the magnitude of the force, \\(d\\) is the displacement, and \\(\\theta\\) is the angle between the force and the direction of motion.\n\n' +
          'If the force is applied in exactly the same direction as the motion (\\(\\theta = 0^\\circ\\)), then \\(\\cos\\theta = 1\\) and the work simplifies to \\(W = F d\\). If the force is perpendicular to the motion (\\(\\theta = 90^\\circ\\)), then \\(\\cos\\theta = 0\\) and no work is done; this is why the normal force on a block sliding horizontally does not change its kinetic energy. Work can be positive (force helps the motion), negative (force opposes the motion, like friction), or zero.\n\n' +
          'Work is measured in joules, the same units as energy, reflecting the fact that doing work on an object changes its energy. The work,energy theorem states that the net work done on an object equals its change in kinetic energy: \\(W_{\\text{net}} = \\Delta K\\). This is a powerful tool for solving problems without explicitly tracking accelerations and forces over time.\n\n' +
          'To solve work problems, begin by identifying all forces acting on the object and determining which ones do work along the direction of motion. For each constant force, compute \\(W = F d \\cos\\theta\\) using the appropriate angle. Add the contributions to obtain the net work, and then relate this to the change in kinetic energy if useful. Drawing a diagram showing the force vector, displacement, and angle is often the fastest way to avoid sign and angle mistakes.',
        keyIdeas: [
          'Work quantifies energy transfer by a force acting over a displacement.',
          'The formula \\(W = F d \\cos\\theta\\) accounts for the component of force along the direction of motion.',
          'Work can be positive, negative, or zero depending on the angle and direction of the force relative to motion.',
          'The net work done on an object equals its change in kinetic energy, \\(W_{\\text{net}} = \\Delta K\\).',
        ],
        exampleCode:
          'Example question: A constant horizontal force of 10 N pushes a crate 4.0 m along a frictionless floor. (a) How much work does the force do? (b) If the crate has mass 5.0 kg and starts from rest, what is its final speed? \n\n' +
          'Step 1: For force in the same direction as motion, \\(W = F d = (10\\,\\text{N})(4.0\\,\\text{m}) = 40\\,\\text{J}\\). \n' +
          'Step 2: Use the work,energy theorem: net work equals change in kinetic energy. Here \\(W_{\\text{net}} = 40\\,\\text{J}\\) and initial kinetic energy is 0, so final kinetic energy is \\(40\\,\\text{J}\\). \n' +
          'Step 3: Set \\(\\tfrac{1}{2} m v^2 = 40\\): \\(\\tfrac{1}{2} (5.0) v^2 = 40 \\Rightarrow 2.5 v^2 = 40 \\Rightarrow v^2 = 16 \\Rightarrow v = 4.0\\,\\text{m/s}\\).',
        exampleExplanation:
          'Once you find the work done by a net force, equate it to the change in kinetic energy to solve for the object’s final speed.',
      },
      {
        id: '3-3',
        title: 'Potential Energy',
        summary:
          'Potential energy is stored energy associated with the position or configuration of a system. Two important forms in AP Physics 1 are gravitational potential energy and elastic (spring) potential energy. Gravitational potential energy near Earth’s surface is given by \\(U_g = m g h\\), where \\(h\\) is the height above a chosen reference level. The higher an object is lifted, the more gravitational potential energy it has, which can later be converted into kinetic energy as it falls.\n\n' +
          'Elastic potential energy is stored in springs and other elastic systems when they are stretched or compressed. For an ideal spring obeying Hooke’s Law, the potential energy is \\(U_s = \\tfrac{1}{2} k x^2\\), where \\(k\\) is the spring constant and \\(x\\) is the displacement from the equilibrium length. This energy is zero at the equilibrium position and increases symmetrically for compression or extension.\n\n' +
          'It is important to remember that potential energy is defined relative to a reference configuration. Changing your zero level for height or your reference length for a spring shifts all potential energy values by a constant, but does not change physical predictions about energy differences or motion. In many multi‑step problems, choosing a convenient zero level simplifies calculations and reduces algebra.\n\n' +
          'When solving potential energy problems, first identify which type(s) of potential energy are relevant and pick a reference level. Write expressions for \\(U_g\\) and/or \\(U_s\\) at the initial and final states. The change in potential energy, \\(\\Delta U\\), can then be used in conservation of energy equations or related to work done by conservative forces. Focusing on energy differences rather than absolute values keeps your reasoning aligned with the physics.',
        keyIdeas: [
          'Gravitational potential energy near Earth’s surface is \\(U_g = m g h\\).',
          'Elastic potential energy in a spring is \\(U_s = \\tfrac{1}{2} k x^2\\).',
          'Potential energy depends on a chosen reference configuration; only changes in \\(U\\) affect motion.',
          'Identifying relevant forms of potential energy is essential before applying conservation of energy.',
        ],
        exampleCode:
          'Example question: A 0.80 kg book is lifted from the floor to a shelf 1.5 m high. (a) How much gravitational potential energy does it gain relative to the floor? (b) If the book then slides off the shelf and falls back to the floor (ignoring air resistance), what speed does it have just before it hits? \n\n' +
          'Step 1: Gravitational potential energy change is \\(U = m g h = (0.80\\,\\text{kg})(9.8\\,\\text{m/s}^2)(1.5\\,\\text{m}) \\approx 12\\,\\text{J}\\). \n' +
          'Step 2: When the book falls, this 12 J of potential energy is converted into kinetic energy (starting from rest). \n' +
          'Step 3: Set \\(\\tfrac{1}{2} m v^2 = 12\\,\\text{J}\\): \\(\\tfrac{1}{2} (0.80) v^2 = 12 \\Rightarrow 0.40 v^2 = 12 \\Rightarrow v^2 = 30 \\Rightarrow v \\approx 5.5\\,\\text{m/s}\\) just before impact.',
        exampleExplanation:
          'Pick a reference level for height, compute the change in gravitational potential energy, then set that equal to the kinetic energy gained when the object falls.',
      },
      {
        id: '3-4',
        title: 'Conservation of Energy',
        summary:
          'The law of conservation of energy states that energy cannot be created or destroyed, only transferred or transformed from one form to another. In an isolated system with no external work being done, the total mechanical energy, the sum of kinetic and potential energies, remains constant. This can be written as \\(K_i + U_i = K_f + U_f\\) for initial and final states of a system.\n\n' +
          'Mechanical energy can shift between gravitational potential energy, elastic potential energy, and kinetic energy as objects move. For example, in a frictionless roller‑coaster problem, the car’s energy alternates between high potential energy at the top of hills and high kinetic energy at the bottom, but the total stays constant. When nonconservative forces such as friction or air resistance are present, some mechanical energy is transformed into internal energy (heat, sound), and total mechanical energy decreases.\n\n' +
          'Using conservation of energy often simplifies problems dramatically compared with purely force‑based approaches. Instead of tracking forces and accelerations at every point, you identify two key positions and equate the total mechanical energy at those points, adding in any work done by nonconservative forces if needed. This method works particularly well for problems involving complex paths or changing directions where direct kinematics and Newton’s laws would be cumbersome.\n\n' +
          'To apply conservation of energy, begin by defining your system and listing all forms of energy that change between the initial and final states. Write an equation equating the total energy at the start to the total at the end, adding terms for work done by external or nonconservative forces if necessary. Substitute expressions for \\(K\\), \\(U_g\\), and \\(U_s\\), then solve for the unknown variable, such as speed at a certain height or the compression of a spring. Always check that your result is physically reasonable, for instance that speeds are real and positive and that potential energies reflect the chosen reference.',
        keyIdeas: [
          'In the absence of nonconservative work, total mechanical energy \\(K + U\\) is conserved.',
          'Energy can move between kinetic and various forms of potential energy without changing the total.',
          'Friction and other nonconservative forces convert mechanical energy into internal energy, reducing \\(K + U\\).',
          'Conservation of energy provides a powerful alternative to force‑based methods, especially for complex paths.',
        ],
        exampleCode:
          'Example question: A 1.5 kg block is released from rest at the top of a frictionless ramp of height 2.0 m. The bottom of the ramp is level with the floor. (a) Find the speed of the block at the bottom of the ramp. (b) The block then slides onto a rough horizontal surface and stops after 3.0 m. Find \\(\\mu_k\\) on the horizontal surface. \n\n' +
          'Step 1 (down the ramp): Use conservation of mechanical energy, taking the bottom as \\(U = 0\\). Initial energy is \\(U_i = m g h\\), final energy at the bottom is \\(K_f = \\tfrac{1}{2} m v^2\\). Set \\(m g h = \\tfrac{1}{2} m v^2\\) and solve for v. \n' +
          'Step 2: Cancel \\(m\\) and compute: \\(v = \\sqrt{2 g h} = \\sqrt{2 \\times 9.8 \\times 2.0} \\approx 6.3\\,\\text{m/s}\\) at the bottom. \n' +
          'Step 3 (along the rough horizontal): Initially on the rough surface, \\(K = \\tfrac{1}{2} m v^2\\) and \\(U = 0\\). Friction does negative work and brings the block to rest, so \\(W_f = \\Delta K = -\\tfrac{1}{2} m v^2\\). \n' +
          'Step 4: Friction force is \\(f_k = \\mu_k N = \\mu_k m g\\). Work by friction is \\(W_f = -f_k d = -\\mu_k m g d\\). Set \\(-\\mu_k m g d = -\\tfrac{1}{2} m v^2\\) and solve for \\(\\mu_k\\): \\(\\mu_k = v^2 / (2 g d) \\approx (6.3^2) / (2 \\times 9.8 \\times 3.0) \\approx 0.68\\).',
        exampleExplanation:
          'Here you use conservation of mechanical energy on the frictionless part, then relate the loss of kinetic energy on the rough surface to work done by friction to solve for \\(\\mu_k\\).',
      },
      {
        id: '3-5',
        title: 'Power',
        summary:
          'Power describes how quickly work is done or how quickly energy is transferred. Two processes can involve the same total work, but the one that happens in less time has greater power. The average power is defined as \\(P = \\tfrac{W}{t}\\), where \\(W\\) is the work done and \\(t\\) is the time interval. The SI unit of power is the watt (W), equal to one joule of energy per second.\n\n' +
          'In situations where a constant force causes motion at constant speed, power can also be expressed as \\(P = F v\\). This form highlights that applying a larger force or moving faster both increase the rate of energy transfer. Engines and motors are often rated by power because it tells you how quickly they can do work, such as lifting a load, accelerating a car, or running a household appliance.\n\n' +
          'Power considerations are important whenever time matters in a problem. A high‑power device can perform the same task in less time than a low‑power one, even if the total work is identical. However, more power usually means greater energy consumption per unit time, which connects physics questions to real‑world concerns like fuel usage and electricity bills.\n\n' +
          'When solving power problems, decide first whether you know total work and time or force and speed. Use \\(P = W/t\\) if you are comparing how long it takes to do a fixed amount of work, such as climbing a flight of stairs. Use \\(P = F v\\) if you know the steady force and constant speed, as in a car traveling on a level road. Check that your units reduce to joules per second, and interpret your answer in context: for example, comparing your calculated power output when running upstairs to typical human or machine power ratings.',
        keyIdeas: [
          'Power measures the rate at which work is done or energy is transferred.',
          'Average power is \\(P = W/t\\); in constant‑speed motion, power can be written as \\(P = F v\\).',
          'The watt (W) equals one joule per second and is the standard unit of power.',
          'Power connects physical work to practical questions about performance, time, and energy usage.',
        ],
        exampleCode:
          'Example question: A student of mass 60 kg runs up a 3.0 m high staircase in 4.0 s. (a) How much work does the student do against gravity? (b) What is the average power output? \n\n' +
          'Step 1: The work done against gravity equals the gain in gravitational potential energy: \\(W = m g h = (60)(9.8)(3.0) \\approx 1.8 \\times 10^3\\,\\text{J}\\). \n' +
          'Step 2: Average power is \\(P = W / t = (1.8 \\times 10^3\\,\\text{J}) / (4.0\\,\\text{s}) \\approx 4.5 \\times 10^2\\,\\text{W}\\). \n' +
          'Step 3: Interpret: the student’s power climbing the stairs is about 450 watts.',
        exampleExplanation:
          'For vertical lifting, compute work as m g h, then divide by the time taken to find average power.',
      },
    ],
  },
  {
    unitNumber: 4,
    title: 'Momentum and Collisions',
    subunits: [
      {
        id: '4-1',
        title: 'Linear Momentum',
        summary:
          'Linear momentum describes how hard it is to stop a moving object and combines both its mass and velocity. The momentum of an object is defined as \\(\\vec{p} = m \\vec{v}\\), so more massive objects or faster‑moving objects have greater momentum. Because velocity is a vector, momentum is also a vector, pointing in the same direction as the motion.\n\n' +
          'Momentum plays a central role in interactions such as collisions and explosions. When two objects collide, their individual momenta may change dramatically, but the total momentum of the system can remain constant if no external forces act. This makes momentum a powerful book‑keeping tool: instead of focusing on complicated forces during a brief impact, you compare the overall momentum before and after the event.\n\n' +
          'Real‑world safety systems, such as airbags and crumple zones in cars, are designed with momentum in mind. A large momentum change spread out over a longer time produces a smaller average force on passengers, reducing injury. Similarly, in sports, catching a ball by moving your hands backward increases the time over which the ball’s momentum changes, decreasing the force on your hands.\n\n' +
          'To use momentum in problem solving, first compute the momentum of each object as \\(p = m v\\) (with sign or direction included). If a question asks how difficult something is to stop, compare momenta rather than just speeds or masses. Later subunits build on this by using momentum conservation to connect initial and final velocities in collisions.',
        keyIdeas: [
          'Linear momentum is defined as \\(\\vec{p} = m \\vec{v}\\) and is a vector quantity.',
          'Heavier or faster objects have more momentum and are harder to stop.',
          'Momentum is especially useful for analyzing interactions like collisions and explosions.',
          'Design features such as airbags and padding reduce forces by changing how momentum is transferred over time.',
        ],
        exampleCode:
          'Example question: A 1500 kg car is moving at 20 m/s to the east. (a) What is the magnitude of its momentum? (b) If another car has half the mass but twice the speed, how does its momentum compare? \n\n' +
          'Step 1: Compute momentum of the first car: \\(p = m v = (1500\\,\\text{kg})(20\\,\\text{m/s}) = 3.0 \\times 10^4\\,\\text{kg m/s}\\) to the east. \n' +
          'Step 2: For the second car, mass is 750 kg and speed is 40 m/s, so \\(p = (750)(40) = 3.0 \\times 10^4\\,\\text{kg m/s}\\). \n' +
          'Step 3: Both cars have the same momentum, even though mass and speed are different.',
        exampleExplanation:
          'Compare momentum by multiplying mass and velocity; different combinations of mass and speed can give the same momentum.',
      },
      {
        id: '4-2',
        title: 'Change in Momentum and Impulse',
        summary:
          'When a force acts on an object for a certain amount of time, it changes the object’s momentum. This effect is described by impulse, defined as \\(\\vec{J} = \\vec{F}_{\\text{avg}} \\Delta t\\) for a constant average force \\(\\vec{F}_{\\text{avg}}\\) over a time interval \\(\\Delta t\\). Impulse has the same units as momentum (kg m/s) and can be thought of as the “momentum transfer” delivered by a force.\n\n' +
          'The impulse,momentum theorem states that impulse equals the change in momentum: \\(\\vec{J} = \\Delta \\vec{p} = m (\\vec{v}_f - \\vec{v}_i)\\). This relationship applies whether the force is constant or varying in time, as long as you use the net impulse (the area under a force,time graph). It explains why both the size of the force and the duration of its action matter: a small force over a long time can produce the same momentum change as a large force over a short time.\n\n' +
          'In everyday life, many safety devices rely on increasing the time of impact to reduce the average force. Airbags, padded mats, and crumple zones extend the time over which momentum changes to zero, so the force on a person is smaller. Catching a ball with “soft hands,” moving backward as the ball arrives, accomplishes the same thing by lengthening the collision time.\n\n' +
          'To solve impulse and momentum‑change problems, identify the object and record its initial and final velocities. Compute the change in momentum \\(\\Delta p\\), then relate it to impulse using \\(J = \\Delta p\\). If you know or can estimate the time interval, you can find the average force using \\(F_{\\text{avg}} = J / \\Delta t\\). Force,time graphs can also be used: the area under the curve gives the impulse, which then tells you how much the velocity of the object changes.',
        keyIdeas: [
          'Impulse is defined as \\(\\vec{J} = \\vec{F}_{\\text{avg}} \\Delta t\\) and has the same units as momentum.',
          'The impulse,momentum theorem states that \\(\\vec{J} = \\Delta \\vec{p}\\).',
          'Increasing collision time for a fixed momentum change reduces the average force experienced.',
          'Force,time graphs are a useful way to visualize and calculate impulse in real interactions.',
        ],
        exampleCode:
          'Example question: A 0.15 kg baseball traveling at 30 m/s is caught and brought to rest in 0.20 s. (a) What is the change in momentum of the ball? (b) What average force does the glove exert on the ball? \n\n' +
          'Step 1: Initial momentum \\(p_i = m v_i = (0.15\\,\\text{kg})(30\\,\\text{m/s}) = 4.5\\,\\text{kg m/s}\\). Final momentum \\(p_f = 0\\), so change in momentum \\(\\Delta p = p_f - p_i = -4.5\\,\\text{kg m/s}\\) (opposite the initial direction). \n' +
          'Step 2: Impulse \\(J\\) equals \\(\\Delta p\\), so \\(J = -4.5\\,\\text{kg m/s}\\). The magnitude of the impulse is 4.5 kg m/s. \n' +
          'Step 3: Average force is \\(F_{\\text{avg}} = J / \\Delta t = (-4.5\\,\\text{kg m/s}) / (0.20\\,\\text{s}) = -22.5\\,\\text{N}\\). The negative sign indicates the force is opposite the ball’s initial motion; its magnitude is 22.5 N.',
        exampleExplanation:
          'Use Δp = m (v_f - v_i) to find impulse, then divide by the time interval to get the average force, paying attention to direction.',
      },
      {
        id: '4-3',
        title: 'Conservation of Linear Momentum',
        summary:
          'The law of conservation of linear momentum states that the total momentum of a system remains constant if the net external force on the system is zero. In symbols, for a two‑object system, \\(m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}\\). Momentum can be transferred between objects in the system, but the vector sum stays the same.\n\n' +
          'This principle is especially powerful for analyzing collisions and explosions, where forces are large but act for short times. Instead of trying to calculate the complicated interaction forces, you treat the event as an instantaneous exchange of momentum within an isolated system. As long as external influences (like friction with the ground) are negligible during the brief interaction, momentum conservation gives accurate predictions of final velocities.\n\n' +
          'Momentum conservation is directly linked to Newton’s Third Law: internal forces between objects in a system come in equal and opposite pairs and thus do not change the total momentum. Only external forces can change the overall momentum of the system, and if those are small or absent during the interaction time, total momentum is effectively conserved.\n\n' +
          'To apply momentum conservation, first define your system and write the total initial momentum as the vector sum of each object’s momentum. Set this equal to the total final momentum and solve for unknown final velocities. Be careful with signs and directions, especially in one‑dimensional problems where objects may reverse direction. Check that special cases make sense, for instance, when one mass is much larger than the other or when initial momentum is zero.',
        keyIdeas: [
          'Total momentum of an isolated system is conserved when net external force is zero.',
          'During collisions and explosions, internal forces do not change total momentum.',
          'Momentum conservation provides a direct link between initial and final velocities without explicitly using forces.',
          'Defining the system and choosing a consistent sign convention are critical steps before writing conservation equations.',
        ],
        exampleCode:
          'Example question: A 0.20 kg puck moving at 8.0 m/s to the right collides head-on with a 0.30 kg puck initially at rest on frictionless ice. The collision is perfectly inelastic (they stick together). Find the speed and direction of the combined mass after the collision. \n\n' +
          'Step 1: Define right as positive. Initial momenta: \\(p_{1i} = (0.20\\,\\text{kg})(8.0\\,\\text{m/s}) = 1.6\\,\\text{kg m/s}\\); \\(p_{2i} = (0.30\\,\\text{kg})(0) = 0\\). The total initial momentum is \\(p_{\\text{tot},i} = 1.6\\,\\text{kg m/s}\\). \n' +
          'Step 2: After the collision they stick, so the final mass is \\(m_f = 0.20 + 0.30 = 0.50\\,\\text{kg}\\). Let the final speed be \\(v_f\\) to the right. \n' +
          'Step 3: Apply momentum conservation: \\(m_f v_f = p_{\\text{tot},i} \\Rightarrow v_f = p_{\\text{tot},i} / m_f = 1.6 / 0.50 = 3.2\\,\\text{m/s}\\) to the right.',
        exampleExplanation:
          'This is the standard perfectly inelastic collision pattern: write total initial momentum, set it equal to total final momentum of the combined mass, and solve for the shared final velocity.',
      },
      {
        id: '4-4',
        title: 'Elastic and Inelastic Collisions',
        summary:
          'Collisions are interactions where objects exert forces on each other for a short time, changing their individual velocities. In all collisions, momentum is conserved for an isolated system, but kinetic energy may or may not be conserved. Collisions are classified based on what happens to kinetic energy.\n\n' +
          'In an elastic collision, both total momentum and total kinetic energy are conserved. Objects bounce off each other without lasting deformation or energy loss to heat and sound. Perfectly elastic collisions are rare at macroscopic scales but are a good model for collisions between atoms or for nearly elastic situations, such as steel spheres or billiard balls.\n\n' +
          'In an inelastic collision, momentum is still conserved, but some kinetic energy is converted into other forms, such as internal energy, heat, or sound. A perfectly inelastic collision is a special case where the objects stick together and move with a common final velocity. These are common in real‑world crashes and impacts where deformation occurs.\n\n' +
          'To solve collision problems, start by writing momentum conservation for the system. For elastic collisions in one dimension, you can also write an equation for conservation of kinetic energy, giving you two equations to solve for two unknown final velocities. For perfectly inelastic collisions, set the final velocities equal and use only the momentum equation. Always check energy values afterward to see whether kinetic energy is conserved, reduced, or redistributed, and interpret the result in terms of collision type.',
        keyIdeas: [
          'All isolated collisions conserve momentum; kinetic energy is conserved only in elastic collisions.',
          'Elastic collisions approximate ideal “bouncy” interactions; inelastic collisions involve deformation and energy transformation.',
          'Perfectly inelastic collisions result in objects sticking together and sharing a common final velocity.',
          'Writing separate equations for momentum (always) and kinetic energy (elastic only) is the standard strategy for collision problems.',
        ],
        exampleCode:
          'Example question: A 0.20 kg ball moving at 3.0 m/s to the right collides elastically head-on with a 0.30 kg ball moving at 1.0 m/s to the left on a frictionless track. (a) Write the momentum conservation equation for this system. (b) Explain qualitatively what happens to kinetic energy in this elastic collision. \n\n' +
          'Step 1: Choose right as positive. The initial momentum is \\(p_{\\text{tot},i} = (0.20)(+3.0) + (0.30)(-1.0) = 0.60 - 0.30 = 0.30\\,\\text{kg m/s}\\). \n' +
          'Step 2: Let the final velocities be \\(v_{1f}\\) and \\(v_{2f}\\). Momentum conservation says \\(0.20\\,v_{1f} + 0.30\\,v_{2f} = 0.30\\). \n' +
          'Step 3: Because the collision is elastic, total kinetic energy before and after is the same, so \\(\\tfrac{1}{2} m_1 v_{1i}^2 + \\tfrac{1}{2} m_2 v_{2i}^2 = \\tfrac{1}{2} m_1 v_{1f}^2 + \\tfrac{1}{2} m_2 v_{2f}^2\\). \n' +
          'Step 4: Qualitatively, kinetic energy is redistributed between the balls, but the total \\(K\\) of the two-ball system is unchanged in an elastic collision.',
        exampleExplanation:
          'For elastic collisions you always write both momentum and kinetic-energy conservation; together they determine the two unknown final velocities.',
      },
    ],
  },
  {
    unitNumber: 5,
    title: 'Rotational Motion and Dynamics',
    subunits: [
      {
        id: '5-1',
        title: 'Rotational Kinematics',
        summary:
          'Rotational kinematics describes how objects rotate around an axis, using angular quantities analogous to linear kinematics. Instead of position, velocity, and acceleration along a line, you work with angular displacement \\(\\theta\\), angular velocity \\(\\omega\\), and angular acceleration \\(\\alpha\\). Angular displacement measures how far an object has rotated, typically in radians; angular velocity tells you how quickly the angle changes; and angular acceleration tells you how quickly the angular velocity changes.\n\n' +
          'The relationships between these angular quantities mirror those of linear motion with constant acceleration. For example, \\(\\omega = \\omega_i + \\alpha t\\), \\(\\theta = \\omega_i t + \\tfrac{1}{2} \\alpha t^2\\), and \\(\\omega_f^2 = \\omega_i^2 + 2 \\alpha \\theta\\) correspond directly to the familiar kinematic equations. This parallel structure means that once you recognize a problem as purely rotational with constant angular acceleration, you can apply the same reasoning as in linear kinematics, just with angular variables.\n\n' +
          'Graphs of angular quantities versus time behave similarly as well: the slope of a \\(\\theta\\),time graph is \\(\\omega\\), and the slope of an \\(\\omega\\),time graph is \\(\\alpha\\). Interpreting these graphs helps you understand how spinning objects speed up, slow down, or maintain constant rotational speed.\n\n' +
          'To solve rotational kinematics problems, identify the initial and final angular quantities, decide whether angular acceleration is constant, and pick the appropriate equation connecting \\(\\theta\\), \\omega\\), \\(\\alpha\\), and \\(t\\). Draw a simple sketch indicating the direction of rotation and use a sign convention (e.g., counterclockwise as positive) to keep directions consistent. The strategy is the same as for linear kinematics, but with angular rather than linear variables.',
        keyIdeas: [
          'Rotational motion uses angular displacement \\(\\theta\\), angular velocity \\(\\omega\\), and angular acceleration \\(\\alpha\\).',
          'With constant angular acceleration, angular kinematic equations parallel linear ones.',
          'Slopes of \\(\\theta\\),time and \\(\\omega\\),time graphs give \\(\\omega\\) and \\(\\alpha\\), respectively.',
          'A consistent sign convention for direction of rotation is essential for solving rotational kinematics correctly.',
        ],
        exampleCode:
          'Example question: A wheel starts from rest and undergoes a constant angular acceleration of \\(2.0\\,\\text{rad/s}^2\\). (a) What is its angular velocity after 4.0 s? (b) Through what angle (in radians) does it rotate in this time? \n\n' +
          'Step 1: Use the rotational kinematics equation \\(\\omega = \\omega_i + \\alpha t\\). With \\(\\omega_i = 0\\) and \\(\\alpha = 2.0\\,\\text{rad/s}^2\\): \\(\\omega = 0 + (2.0)(4.0) = 8.0\\,\\text{rad/s}\\). \n' +
          'Step 2: Use \\(\\theta = \\omega_i t + \\tfrac{1}{2} \\alpha t^2\\). Again with \\(\\omega_i = 0\\): \\(\\theta = \\tfrac{1}{2} (2.0)(4.0)^2 = 1.0 \\times 16 = 16\\,\\text{rad}\\).',
        exampleExplanation:
          'Treat angular quantities exactly like linear ones under constant acceleration: pick the rotational kinematics equation that connects the known and unknown variables.',
      },
      {
        id: '5-2',
        title: 'Connecting Linear and Rotational Motion',
        summary:
          'Even though rotational and linear motion use different variables, they are closely connected. For a point on a rotating object at radius \\(r\\) from the axis, the arc length traveled is \\(s = r \\theta\\), where \\(\\theta\\) is the angular displacement in radians. Similarly, the tangential (linear) velocity is \\(v = r \\omega\\), and the tangential acceleration is \\(a_t = r \\alpha\\). These relationships show how rotation of a rigid body produces linear motion of its parts.\n\n' +
          'Because \\(v\\) and \\(a_t\\) increase linearly with radius, points farther from the axis move faster and experience greater tangential acceleration even if the entire object shares the same \\(\\omega\\) and \\(\\alpha\\). This explains why the outer edge of a rotating disk travels a longer path and has higher speed than points near the center. It also clarifies why swinging a heavy object on a long string feels harder: the larger radius increases the linear speed and the forces involved.\n\n' +
          'In practical problems, these relationships let you connect rotational motion of wheels, gears, or pulleys to the linear motion of vehicles, belts, or ropes attached to them. For example, a car’s tires rotate with some angular velocity, and \\(v = r \\omega\\) directly gives the car’s forward speed in terms of tire radius and spin rate.\n\n' +
          'When solving problems that mix rotation and translation, identify the radius at which a point on the rotating object interacts with something else (like the road or a belt). Use \\(v = r \\omega\\) to link rotational speed to linear speed, and \\(a_t = r \\alpha\\) if tangential acceleration is relevant. These connections often allow you to translate between angular quantities measured in one part of a system and linear motion observed elsewhere.',
        keyIdeas: [
          'For a point at radius \\(r\\), arc length, speed, and tangential acceleration are \\(s = r \\theta\\), \\(v = r \\omega\\), and \\(a_t = r \\alpha\\).',
          'Points farther from the axis move faster and experience greater tangential acceleration in the same rotation.',
          'Rotating components like wheels and pulleys convert rotational motion into linear motion through these relationships.',
          'Linking \\(v\\) and \\(\\omega\\) is essential for understanding rolling motion and mechanical systems.',
        ],
        exampleCode:
          'Example question: A bicycle wheel of radius 0.35 m is spinning at an angular speed of 6.0 rad/s. (a) What is the linear speed of a point on the rim? (b) If the angular speed is doubled, what happens to the linear speed at the rim? \n\n' +
          'Step 1: Use \\(v = r \\omega\\). Here \\(v = (0.35\\,\\text{m})(6.0\\,\\text{rad/s}) = 2.1\\,\\text{m/s}\\). \n' +
          'Step 2: If \\(\\omega\\) doubles to 12 rad/s, the new linear speed is \\(v = (0.35)(12) = 4.2\\,\\text{m/s}\\). \n' +
          'Step 3: Doubling \\(\\omega\\) doubles \\(v\\), since they are directly proportional for a fixed radius.',
        exampleExplanation:
          'Use \\(v = r \\omega\\) to link the rotational motion of a wheel to the linear motion of points on its rim or of objects driven by it.',
      },
      {
        id: '5-3',
        title: 'Torque',
        summary:
          'Torque is the rotational analog of force and measures how effectively a force causes an object to rotate about an axis. The magnitude of torque is given by \\(\\tau = r F \\sin\\theta\\), where \\(r\\) is the distance from the axis to the point of application (the lever arm), \\(F\\) is the magnitude of the force, and \\(\\theta\\) is the angle between the force vector and the lever arm. Torque is greatest when the force is applied perpendicular to the lever arm (\\(\\theta = 90^\\circ\\)) and zero when the force points directly toward or away from the pivot.\n\n' +
          'Everyday experiences illustrate torque: pushing a door near the handle is easier than pushing near the hinges because the lever arm is longer; using a longer wrench increases the torque you can apply to a bolt for the same force. The direction of torque (which way it tends to rotate an object) is often described as clockwise or counterclockwise relative to the axis.\n\n' +
          'In rotational dynamics, torque plays the same role that net force plays in linear dynamics. The net torque on an object determines its angular acceleration, just as the net force determines linear acceleration. When multiple forces act at different points and angles, you compute each individual torque and sum them (with signs for direction) to find the net torque.\n\n' +
          'To solve torque problems, start by drawing a diagram showing the pivot, the line from the pivot to the point where each force is applied, and the direction of each force. For each force, calculate the lever arm and angle to determine \\(\\tau = r F \\sin\\theta\\). Assign a sign (for example, positive for counterclockwise, negative for clockwise) and sum torques to find \\(\\sum \\tau\\). If the object rotates, combine this with rotational forms of Newton’s Second Law; if it is in equilibrium, set the net torque to zero to solve for unknown forces or distances.',
        keyIdeas: [
          'Torque quantifies the rotational effectiveness of a force: \\(\\tau = r F \\sin\\theta\\).',
          'Longer lever arms and perpendicular forces produce larger torques for the same force.',
          'Net torque determines how an object’s rotational motion changes.',
          'Drawing clear torque diagrams and using a consistent sign convention are crucial for equilibrium and dynamics problems.',
        ],
        exampleCode:
          'Example question: A uniform 3.0 m long beam of mass 20 kg is hinged to a wall at its left end and held horizontal by a cable attached to its right end, making a 37° angle above the beam. Find the tension in the cable if the system is in static equilibrium. \n\n' +
          'Step 1: Take torques about the hinge so the unknown hinge forces produce zero torque. The beam’s weight \\(W = mg = (20)(9.8) = 196\\,\\text{N}\\) acts at the center, 1.5 m from the hinge. \n' +
          'Step 2: The tension \\(T\\) acts at 3.0 m, making 37° above horizontal, so only its vertical component \\(T \\sin 37^\\circ\\) produces torque. \n' +
          'Step 3: Set net torque about the hinge to zero (counterclockwise positive): \\(T \\sin 37^\\circ (3.0) - W(1.5) = 0\\). \n' +
          'Step 4: Solve: \\(T = \\dfrac{W(1.5)}{3.0 \\sin 37^\\circ}\\). With \\(\\sin 37^\\circ \\approx 0.60\\), \\(T \\approx 1.6 \\times 10^2\\,\\text{N}\\).',
        exampleExplanation:
          'Choosing the hinge as the pivot eliminates unknown hinge forces from the torque equation and lets you solve directly for the cable tension from \\(\\sum \\tau = 0\\).',
      },
      {
        id: '5-4',
        title: 'Rotational Inertia',
        summary:
          'Rotational inertia, or moment of inertia, measures how difficult it is to change an object’s rotational motion. It plays a role similar to mass in linear motion but depends not only on the total mass, but also on how that mass is distributed relative to the axis of rotation. Mathematically, for a collection of point masses, \\(I = \\sum m_i r_i^2\\), where \\(r_i\\) is the distance of each mass from the axis.\n\n' +
          'Because the distance is squared, mass located farther from the axis contributes much more to \\(I\\) than mass near the center. This is why a hoop (mass concentrated at the rim) has a larger moment of inertia than a solid disk of the same mass and radius. Similarly, figure skaters spin faster when they pull their arms in: by bringing mass closer to the axis, they reduce their rotational inertia and can increase rotational speed without external torque.\n\n' +
          'In AP Physics 1, you are often given standard formulas for moments of inertia of simple shapes, such as a solid cylinder, a hoop, or a rod about various axes. These formulas let you quickly plug in numerical values instead of summing over individual mass elements. The choice of axis is crucial; moving the axis changes \\(I\\), often dramatically.\n\n' +
          'When solving problems involving rotational inertia, identify the object’s shape and the axis of rotation, then use or derive the appropriate expression for \\(I\\). Combine this with torque and angular acceleration using \\(\\sum \\tau = I \\alpha\\) to analyze rotational dynamics. Comparing moments of inertia can also tell you which object will accelerate or roll faster down a ramp when all else is equal.',
        keyIdeas: [
          'Rotational inertia \\(I\\) quantifies resistance to changes in rotational motion and depends on mass distribution.',
          'The formula \\(I = \\sum m_i r_i^2\\) shows that mass farther from the axis contributes more strongly.',
          'Standard shapes have known moments of inertia that depend on both mass and geometry.',
          'Smaller rotational inertia leads to greater angular acceleration for the same net torque.',
        ],
        exampleCode:
          'Example question: Two solid disks each have mass 2.0 kg and radius 0.20 m. Disk A is solid, and Disk B is a hoop with all its mass at the rim. (a) Which has the larger moment of inertia about its central axis? (b) Explain which disk would be easier to spin up to the same angular speed. \n\n' +
          'Step 1: For a solid disk, \\(I_A = \\tfrac{1}{2} m r^2 = \\tfrac{1}{2} (2.0)(0.20^2) = 0.040\\,\\text{kg} \\cdot \\text{m}^2\\). \n' +
          'Step 2: For a hoop, \\(I_B = m r^2 = (2.0)(0.20^2) = 0.080\\,\\text{kg} \\cdot \\text{m}^2\\). \n' +
          'Step 3: Disk B (the hoop) has twice the moment of inertia of Disk A, so it would be harder to spin up to the same \\(\\omega\\) because \\(\\sum \\tau = I \\alpha\\) gives a smaller \\(\\alpha\\) for the same torque.',
        exampleExplanation:
          'Use the standard formulas for \\(I\\) to compare shapes; more mass farther from the axis means a larger moment of inertia and smaller angular acceleration for a given torque.',
      },
      {
        id: '5-5',
        title: 'Rotational Equilibrium and Newton’s First Law (Rotational)',
        summary:
          'Rotational equilibrium occurs when the net torque acting on an object about a chosen axis is zero. In this state, the object either does not rotate at all or rotates with constant angular velocity, mirroring Newton’s First Law for linear motion. Even if multiple forces act on an extended object, as long as their torques cancel, there is no angular acceleration.\n\n' +
          'This concept is essential for analyzing static structures and balanced systems. Ladders leaning against walls, beams supporting loads, and mobiles hanging from ceilings must all satisfy both translational equilibrium (net force zero) and rotational equilibrium (net torque zero) to remain steady. Considering torques about a convenient pivot often simplifies the equations because forces acting at the pivot produce no torque.\n\n' +
          'In problem solving, you are free to choose any point as the axis for calculating torques, and the condition \\(\\sum \\tau = 0\\) must hold if the object is not angularly accelerating. By picking a pivot that eliminates unknown forces (such as at a hinge or support), you can often reduce the number of unknowns in your equations and solve for remaining forces more easily.\n\n' +
          'To analyze rotational equilibrium, first draw a detailed free‑body diagram showing all forces and their points of application. Choose a pivot point (often at a support or contact point) and write the torque equation \\(\\sum \\tau = 0\\), being careful with signs for clockwise and counterclockwise torques. Combine this with the conditions for translational equilibrium, \\(\\sum F_x = 0\\) and \\(\\sum F_y = 0\\), to solve for all unknown support forces and tensions in the system.',
        keyIdeas: [
          'Rotational equilibrium means net torque about any chosen axis is zero.',
          'Static structures must satisfy both \\(\\sum F = 0\\) and \\(\\sum \\tau = 0\\).',
          'Choosing a pivot at a point where unknown forces act can simplify torque equations, since those forces then produce no torque.',
          'Balancing torques is the main strategy for solving support and stability problems.',
        ],
        exampleCode:
          'Example question: A 4.0 m long uniform plank of mass 30 kg rests on two supports, one at each end. A 70 kg person stands 1.0 m from the left end. (a) Write the torque equilibrium equation about the left support. (b) Qualitatively, what happens to the right support force if the person walks toward the right end? \n\n' +
          'Step 1: About the left support, take upward forces as positive. Let \\(F_R\\) be the normal force at the right support (4.0 m from the left). The plank’s weight \\(W_P = 30g\\) acts at 2.0 m, and the person’s weight \\(W_{\\text{person}} = 70g\\) acts at 1.0 m. \n' +
          'Step 2: Torque equilibrium about the left support gives: \\(F_R (4.0) - W_P (2.0) - W_{\\text{person}} (1.0) = 0\\). \n' +
          'Step 3: As the person walks toward the right, the torque from \\(W_{\\text{person}}\\) about the left support increases, so \\(F_R\\) must increase to keep \\(\\sum \\tau = 0\\), while the left support force decreases.',
        exampleExplanation:
          'For rotational equilibrium, pick a pivot and set \\(\\sum \\tau = 0\\); moving a load farther from the pivot increases its torque and shifts how much each support must carry.',
      },
      {
        id: '5-6',
        title: "Newton's Second Law in Rotational Form",
        summary:
          "Newton’s Second Law extends naturally to rotational motion through the equation \\(\\sum \\tau = I \\alpha\\). Here, \\(\\sum \\tau\\) is the net torque about a chosen axis, \\(I\\) is the moment of inertia about that axis, and \\(\\alpha\\) is the angular acceleration. This relationship mirrors the linear form \\(\\sum F = m a\\), with torque playing the role of force and moment of inertia playing the role of mass.\n\n" +
          'This law tells you that for a given torque, objects with smaller rotational inertia experience larger angular accelerations. Conversely, for the same angular acceleration, objects with larger \\(I\\) require greater net torque. This is why heavy flywheels are used to smooth rotational motion; they resist rapid changes in spin rate.\n\n' +
          'In many mechanisms, torques from different forces combine to produce a net torque that determines the angular acceleration of wheels, pulleys, or other rotating parts. At the same time, frictional and resistive torques may oppose motion and reduce the net torque. An accurate free‑body and torque diagram is the starting point for writing \\(\\sum \\tau = I \\alpha\\) in a useful form.\n\n' +
          'To solve rotational dynamics problems, draw the rotating object, identify all forces, and calculate their torques about the axis. Sum these torques with appropriate signs to find \\(\\sum \\tau\\), determine the relevant moment of inertia \\(I\\), and then solve \\(\\sum \\tau = I \\alpha\\) for the unknown angular acceleration or torque. Where rotation is linked to translation (such as rolling wheels), combine this equation with linear relationships to fully describe the motion.',
        keyIdeas: [
          "The rotational analog of Newton’s Second Law is \\(\\sum \\tau = I \\alpha\\).",
          'Net torque causes angular acceleration, just as net force causes linear acceleration.',
          'Larger rotational inertia means smaller angular acceleration for the same net torque.',
          'Combining \\(\\sum \\tau = I \\alpha\\) with force equations and kinematics is the standard approach for rotational dynamics.',
        ],
        exampleCode:
          'Example question: A solid disk of mass 4.0 kg and radius 0.30 m is free to rotate about its center. A 10 N force is applied tangentially at the rim. (a) What is the angular acceleration of the disk? (b) What is its angular speed after 3.0 s, assuming it starts from rest? \n\n' +
          'Step 1: For a solid disk, \\(I = \\tfrac{1}{2} m r^2 = \\tfrac{1}{2} (4.0)(0.30^2) = 0.18\\,\\text{kg} \\cdot \\text{m}^2\\). \n' +
          'Step 2: The torque from the tangential force is \\(\\tau = r F = 0.30 \\times 10 = 3.0\\,\\text{N} \\cdot \\text{m}\\). \n' +
          'Step 3: Apply \\(\\sum \\tau = I \\alpha\\): \\(3.0 = 0.18 \\alpha \\Rightarrow \\alpha = 3.0 / 0.18 \\approx 17\\,\\text{rad/s}^2\\). \n' +
          'Step 4: Starting from rest, use \\(\\omega = \\omega_i + \\alpha t\\): \\(\\omega = 0 + (17)(3.0) \\approx 51\\,\\text{rad/s}\\) after 3.0 s.',
        exampleExplanation:
          'Once you compute \\(I\\) and \\(\\tau\\), use \\(\\alpha = \\tau / I\\), then apply the angular kinematics \\(\\omega = \\omega_i + \\alpha t\\) to find how fast the object spins up.',
      },
    ],
  },
  {
    unitNumber: 6,
    title: 'Rotational Energy and Angular Momentum',
    subunits: [
      {
        id: '6-1',
        title: 'Rotational Kinetic Energy',
        summary:
          'When an object rotates, it can store kinetic energy in its rotation, not just in its translation. Rotational kinetic energy depends on how fast the object spins and how its mass is distributed relative to the axis of rotation. The formula is \\(K_{\\text{rot}} = \\tfrac{1}{2} I \\omega^2\\), where \\(I\\) is the moment of inertia and \\(\\omega\\) is the angular velocity.\n\n' +
          'This expression closely parallels translational kinetic energy, \\(K = \\tfrac{1}{2} m v^2\\). In the rotational case, the role of mass is played by \\(I\\), and linear speed is replaced by \\(\\omega\\). Objects with the same angular velocity can have very different rotational kinetic energies if their moments of inertia differ. For example, a hoop and a solid disk spinning at the same speed do not store the same amount of energy because their mass distributions differ.\n\n' +
          'In many physical situations, objects have both translational and rotational kinetic energy, such as a rolling ball or a spinning wheel moving forward. The total kinetic energy is the sum of both contributions, which is important when applying energy conservation to rolling motion or rotating machinery.\n\n' +
          'To use rotational kinetic energy in problem solving, identify the rotating object, determine or look up its moment of inertia \\(I\\) about the axis of interest, and measure or compute \\(\\omega\\). Plug these into \\(K_{\\text{rot}} = \\tfrac{1}{2} I \\omega^2\\). For rolling objects, add this to translational kinetic energy when writing energy conservation equations, keeping in mind that \\(v\\) and \\(\\omega\\) are related by rolling conditions.',
        keyIdeas: [
          'Rotational kinetic energy is given by \\(K_{\\text{rot}} = \\tfrac{1}{2} I \\omega^2\\).',
          'The moment of inertia \\(I\\) and angular speed \\(\\omega\\) together determine how much energy is stored in rotation.',
          'Rolling objects typically have both translational and rotational kinetic energy.',
          'Energy conservation problems involving rotation must account for all kinetic energy terms present.',
        ],
        exampleCode:
          'Example question: A solid disk of mass 3.0 kg and radius 0.25 m spins at an angular speed of 10 rad/s about its center. (a) What is its rotational kinetic energy? (b) By what factor does its rotational kinetic energy change if its angular speed is doubled? \n\n' +
          'Step 1: For a solid disk, \\(I = \\tfrac{1}{2} m r^2\\). Here \\(I = \\tfrac{1}{2} (3.0)(0.25^2) = 0.094\\,\\text{kg} \\cdot \\text{m}^2\\) (approximately). \n' +
          'Step 2: Rotational kinetic energy is \\(K_{\\text{rot}} = \\tfrac{1}{2} I \\omega^2\\). For \\(\\omega = 10\\,\\text{rad/s}\\): \\(K_{\\text{rot}} \\approx \\tfrac{1}{2} (0.094)(10^2) = 4.7\\,\\text{J}\\). \n' +
          'Step 3: If \\(\\omega\\) doubles, \\(\\omega \\to 20\\,\\text{rad/s}\\), then \\(K_{\\text{rot}}\\) scales with \\(\\omega^2\\), so it becomes four times larger. The new rotational kinetic energy is \\(4 \\times 4.7 \\approx 19\\,\\text{J}\\).',
        exampleExplanation:
          'Rotational kinetic energy depends on both the moment of inertia and the square of angular speed, so doubling \\(\\omega\\) makes \\(K_{\\text{rot}}\\) four times larger when \\(I\\) is unchanged.',
      },
      {
        id: '6-2',
        title: 'Torque and Work (Rotational)',
        summary:
          'Work can also be done in rotational systems when a torque causes an object to rotate through an angle. The rotational work done by a constant torque is \\(W = \\tau \\theta\\), where \\(\\tau\\) is the torque and \\(\\theta\\) is the angular displacement in radians. This parallels the linear work equation \\(W = F d\\), with torque taking the place of force and angular displacement replacing linear displacement.\n\n' +
          'When a torque does positive work on a rotating object, it increases the object’s rotational kinetic energy. If frictional or resistive torques are present, they may do negative work, reducing the rotational kinetic energy and transforming mechanical energy into heat. The work,energy theorem extends naturally to rotation: the net work done by torques equals the change in rotational kinetic energy.\n\n' +
          'In devices such as engines, drills, or wind turbines, torques applied over continuous angular displacements transfer energy from one part of the system to another. Power in rotational systems can be expressed as \\(P = \\tau \\omega\\), indicating that delivering torque at higher angular speed transfers energy at a higher rate.\n\n' +
          'To solve rotational work problems, identify the torque acting on the object and the angular displacement through which that torque acts. Use \\(W = \\tau \\theta\\) when torque is constant, and then relate this work to changes in rotational kinetic energy via \\(\\Delta K_{\\text{rot}}\\). If the torque varies, you can think in terms of the area under a torque,angle graph, analogous to force,displacement in linear work problems.',
        keyIdeas: [
          'Rotational work is given by \\(W = \\tau \\theta\\) for a constant torque acting through an angle.',
          'Positive torque doing work increases rotational kinetic energy; resistive torques do negative work.',
          'Power in rotational motion can be expressed as \\(P = \\tau \\omega\\).',
          'The rotational work,energy theorem links net torque work to changes in \\(K_{\\text{rot}}\\).',
        ],
        exampleCode:
          'Example question: A constant torque of 4.0 N·m is applied to a wheel that rotates through an angle of 5.0 rad. (a) How much rotational work is done by the torque? (b) If the wheel’s rotational kinetic energy increases from 6.0 J to 16 J, does this agree with your answer in part (a)? \n\n' +
          'Step 1: Rotational work by a constant torque is \\(W = \\tau \\theta\\). Here \\(W = (4.0\\,\\text{N} \\cdot \\text{m})(5.0\\,\\text{rad}) = 20\\,\\text{J}\\). \n' +
          'Step 2: The change in rotational kinetic energy is \\(\\Delta K_{\\text{rot}} = K_f - K_i = 16\\,\\text{J} - 6.0\\,\\text{J} = 10\\,\\text{J}\\). \n' +
          'Step 3: If the only torque doing work were the 4.0 N·m torque, you would expect \\(\\Delta K_{\\text{rot}} = 20\\,\\text{J}\\). The fact that \\(\\Delta K_{\\text{rot}}\\) is only 10 J suggests that some of the work is being lost to other effects (for example, frictional torques doing negative work).',
        exampleExplanation:
          'Use \\(W = \\tau \\theta\\) to compute rotational work, then compare it to the observed change in rotational kinetic energy to see whether nonconservative torques (like friction) are present.',
      },
      {
        id: '6-3',
        title: 'Angular Momentum and Angular Impulse',
        summary:
          'Angular momentum is the rotational analog of linear momentum and measures how hard it is to stop a rotating object. For a rigid body rotating about a fixed axis, angular momentum is \\(L = I \\omega\\), where \\(I\\) is the moment of inertia and \\(\\omega\\) is the angular velocity. As with linear momentum, both the distribution of mass and the speed of rotation determine the amount of angular momentum.\n\n' +
          'Angular impulse describes how torque applied over time changes angular momentum. For a constant net torque, angular impulse is \\(\\tau \\Delta t\\), and the angular impulse,angular momentum theorem states that \\(\\tau \\Delta t = \\Delta L\\). This relationship is analogous to \\(F \\Delta t = \\Delta p\\) in linear motion and shows that applying a torque over a longer time can change angular momentum by a larger amount even if the torque is modest.\n\n' +
          'Everyday phenomena such as starting or stopping a spinning wheel, slowing down a rotating platform, or changing the spin of a diver in midair all involve changes in angular momentum produced by torques over time. When no external torque acts, angular momentum is conserved, which is explored further in the next subunit.\n\n' +
          'To use angular momentum and angular impulse in problem solving, first write \\(L = I \\omega\\) for the rotational state of an object. When a net external torque acts for a known time interval, apply \\(\\tau \\Delta t = \\Delta L\\) to relate torque, time, and changes in \\(\\omega\\). This is particularly useful when forces are complicated but torques and time intervals are known or can be estimated.',
        keyIdeas: [
          'Angular momentum for rotation about a fixed axis is \\(L = I \\omega\\).',
          'Angular impulse, \\(\\tau \\Delta t\\), changes angular momentum: \\(\\tau \\Delta t = \\Delta L\\).',
          'Both the distribution of mass and spin rate affect angular momentum.',
          'Angular impulse methods are helpful when torques act over short or known time intervals.',
        ],
        exampleCode:
          'Example question: A solid disk of moment of inertia \\(I = 0.10\\,\\text{kg} \\cdot \\text{m}^2\\) is spinning at 5.0 rad/s. A constant braking torque of 0.50 N·m is applied opposite the rotation. (a) What is the initial angular momentum of the disk? (b) How long does it take to bring the disk to rest? \n\n' +
          'Step 1: Initial angular momentum is \\(L_i = I \\omega_i = (0.10)(5.0) = 0.50\\,\\text{kg} \\cdot \\text{m}^2/\\text{s}\\). \n' +
          'Step 2: The angular impulse delivered by the torque over time \\(\\Delta t\\) is \\(J_{\\text{ang}} = \\tau \\Delta t\\), and this equals \\(\\Delta L = L_f - L_i\\). To bring the disk to rest, \\(L_f = 0\\), so \\(\\Delta L = -0.50\\,\\text{kg} \\cdot \\text{m}^2/\\text{s}\\). \n' +
          'Step 3: The torque is opposite the motion, so \\(\\tau = -0.50\\,\\text{N} \\cdot \\text{m}\\). Solve \\(\\tau \\Delta t = \\Delta L\\): \\((-0.50) \\Delta t = -0.50\\) ⇒ \\(\\Delta t = 1.0\\,\\text{s}\\).',
        exampleExplanation:
          'Compute \\(L = I \\omega\\) first, then use \\(\\tau \\Delta t = \\Delta L\\) to find how long a constant torque must act to change the angular momentum to zero.',
      },
      {
        id: '6-4',
        title: 'Conservation of Angular Momentum',
        summary:
          'The law of conservation of angular momentum states that the total angular momentum of a system remains constant if the net external torque on the system is zero. Mathematically, \\(L_i = L_f\\), or for a rotating rigid body, \\(I_i \\omega_i = I_f \\omega_f\\) when no external torque acts. This principle underlies many striking physical phenomena, from spinning figure skaters to the rotation of astronomical objects.\n\n' +
          'Because \\(L = I \\omega\\), changing the moment of inertia without applying an external torque must change the angular velocity to keep \\(L\\) constant. When a skater pulls their arms in, they reduce \\(I\\), so \\(\\omega\\) increases and they spin faster. Conversely, extending arms or legs increases \\(I\\) and slows the rotation. In astronomy, collapsing gas clouds and stars spin faster as they shrink due to this same principle.\n\n' +
          'Angular momentum conservation is especially useful in problems involving rotational collisions, where objects stick together or separate while rotating. As long as external torques (like friction with the environment) are negligible during the interaction, the total angular momentum before and after the event is the same, even though rotational kinetic energy may change.\n\n' +
          'To solve conservation of angular momentum problems, first define your system and identify all sources of external torque. If these are negligible, set the total initial angular momentum equal to the total final angular momentum. For simple spin‑change scenarios, apply \\(I_i \\omega_i = I_f \\omega_f\\). In more complex situations, sum contributions from multiple objects about the same axis. Check that your result behaves as expected, for example, that reducing \\(I\\) leads to an increased \\(\\omega\\) when no external torque acts.',
        keyIdeas: [
          'Angular momentum is conserved when net external torque on a system is zero.',
          'Changing a system’s moment of inertia without external torque changes its angular velocity to keep \\(L\\) constant.',
          'Many rotational collision and spin‑change problems are best handled with angular momentum conservation.',
          'Identifying the system and checking for external torques are crucial before applying \\(L_i = L_f\\).',
        ],
        exampleCode:
          'Example question: A student sits on a frictionless rotating stool holding two 2.0 kg dumbbells at arm\'s length 0.80 m from the rotation axis. Initially, the system rotates at 0.50 rad/s. The student then pulls the dumbbells in to 0.40 m from the axis. Treat the student+stool as having \\(I_0 = 3.0\\,\\text{kg} \\cdot \\text{m}^2\\) and ignore external torques. Find the final angular speed. \n\n' +
          'Step 1: Initial moment of inertia is \\(I_i = I_0 + 2 m r_i^2 = 3.0 + 2(2.0)(0.80)^2\\). Numerically, \\(I_i = 3.0 + 4(0.64) = 5.56\\,\\text{kg} \\cdot \\text{m}^2\\). \n' +
          'Step 2: Final moment of inertia is \\(I_f = I_0 + 2 m r_f^2 = 3.0 + 2(2.0)(0.40)^2 = 3.64\\,\\text{kg} \\cdot \\text{m}^2\\). \n' +
          'Step 3: With no external torque, use \\(I_i \\omega_i = I_f \\omega_f\\): \\(\\omega_f = (I_i / I_f) \\omega_i = (5.56 / 3.64)(0.50) \\approx 0.76\\,\\text{rad/s}\\).',
        exampleExplanation:
          'This classic spinning-stool problem uses \\(I_i \\omega_i = I_f \\omega_f\\) to show that pulling mass inward (reducing \\(I\\)) increases \\(\\omega\\) when no external torque acts.',
      },
      {
        id: '6-5',
        title: 'Rolling Motion',
        summary:
          'Rolling motion combines rotation and translation. In ideal rolling without slipping, an object like a wheel or sphere rolls such that the point of contact with the surface is instantaneously at rest relative to the surface. The center of mass moves forward while the object spins about its center, creating a tight link between linear and angular motion.\n\n' +
          'The no‑slip condition is expressed as \\(v = r \\omega\\), where \\(v\\) is the linear speed of the center of mass, \\(r\\) is the radius, and \\(\\omega\\) is the angular velocity. Similarly, if the object accelerates while rolling without slipping, the tangential acceleration at the rim is related to the linear acceleration of the center by \\(a = r \\alpha\\). These constraints mean that knowing one of \\(v\\), \\(\\omega\\), or \\(a\\) often determines the others.\n\n' +
          'Rolling objects have both translational and rotational kinetic energy: \\(K_{\\text{total}} = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2} I \\omega^2\\). When rolling down an incline without slipping, some of the gravitational potential energy converts into both forms, and the distribution depends on the object’s moment of inertia. Objects with smaller \\(I\\) relative to \\(m r^2\\) tend to reach the bottom faster because more of the potential energy goes into translational rather than rotational motion.\n\n' +
          'To solve rolling problems, start by enforcing the rolling condition \\(v = r \\omega\\). Use energy conservation with both translational and rotational kinetic energy terms when appropriate, or apply Newton’s laws and rotational dynamics together, keeping friction in mind. Static friction is what enforces the no‑slip condition, but it does no work if the point of contact is instantaneously at rest. Carefully tracking all energy and force contributions leads to correct predictions for rolling speeds and accelerations.',
        keyIdeas: [
          'Rolling without slipping links linear and angular motion via \\(v = r \\omega\\) and \\(a = r \\alpha\\).',
          'Rolling objects possess both translational and rotational kinetic energy.',
          'The distribution of energy between translation and rotation depends on the object’s moment of inertia.',
          'Static friction enforces the no‑slip condition but may not do work in ideal rolling scenarios.',
        ],
        exampleCode:
          'Example question: A solid cylinder of mass 2.0 kg and radius 0.20 m rolls without slipping down a 1.5 m high incline. (a) Write the expression for the total kinetic energy at the bottom in terms of \\(v\\). (b) Explain qualitatively whether this cylinder will reach the bottom faster or slower than a block sliding without friction from the same height. \n\n' +
          'Step 1: For rolling without slipping, total kinetic energy at the bottom is \\(K_{\\text{total}} = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2} I \\omega^2\\). For a solid cylinder, \\(I = \\tfrac{1}{2} m r^2\\) and \\(v = r \\omega\\), so \\(\\omega = v/r\\). \n' +
          'Step 2: Substitute: \\(K_{\\text{total}} = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2} (\\tfrac{1}{2} m r^2)(v^2 / r^2) = \\tfrac{1}{2} m v^2 + \\tfrac{1}{4} m v^2 = \\tfrac{3}{4} m v^2\\). \n' +
          'Step 3: For a sliding block (no rotation), all gravitational potential energy \\(m g h\\) becomes \\(\\tfrac{1}{2} m v^2\\), so more of the potential energy goes into translational motion, and it reaches the bottom faster than the rolling cylinder.',
        exampleExplanation:
          'For rolling objects, some of \\(m g h\\) goes into rotational kinetic energy, so they generally reach the bottom more slowly than a purely translating object starting from the same height.',
      },
      {
        id: '6-6',
        title: 'Motion of Orbiting Satellites',
        summary:
          'Satellites in orbit around Earth are examples of objects in uniform circular motion under the influence of gravity. Gravity provides the centripetal force needed to keep the satellite moving in its circular path. For a satellite of mass \\(m\\) at distance \\(r\\) from Earth’s center, the gravitational force is \\(F_g = \\tfrac{G M m}{r^2}\\), where \\(M\\) is Earth’s mass and \\(G\\) is the universal gravitational constant.\n\n' +
          'Setting this gravitational force equal to the required centripetal force, \\(m v^2 / r\\), leads to \\(\\tfrac{G M m}{r^2} = m v^2 / r\\). Simplifying, you find the orbital speed \\(v = \\sqrt{\\tfrac{G M}{r}}\\). This shows that satellites farther from Earth move more slowly and take longer to complete an orbit, while those closer in move faster.\n\n' +
          'Although gravitational force does negative work on satellites in elliptical orbits over parts of their paths, in a stable circular orbit the gravitational force is always perpendicular to the instantaneous displacement, so it does no net work over one full revolution. The satellite maintains constant speed unless its orbit is changed by external forces, such as engine burns or atmospheric drag.\n\n' +
          'To solve basic satellite motion problems, identify the orbital radius and use \\(v = \\sqrt{G M / r}\\) to find orbital speed. You can then compute the orbital period using \\(T = 2 \\pi r / v\\). Be clear about whether \\(r\\) is measured from Earth’s center or its surface, and include Earth’s radius when needed. This framework explains the behavior of artificial satellites as well as natural ones, like the Moon.',
        keyIdeas: [
          'Gravity provides the centripetal force for satellites in orbit: \\(F_g = m v^2 / r\\).',
          'Orbital speed in a circular orbit is \\(v = \\sqrt{G M / r}\\), depending only on \\(M\\) and \\(r\\).',
          'Satellites farther from Earth orbit more slowly and have longer periods.',
          'In a stable circular orbit, gravity changes the direction of velocity but not its magnitude.',
        ],
        exampleCode:
          'Example question: A satellite orbits Earth in a circular orbit of radius \\(r = 7.0 \\times 10^6\\,\\text{m}\\) (measured from Earth’s center). Take Earth’s mass as \\(M = 6.0 \\times 10^{24}\\,\\text{kg}\\) and \\(G = 6.67 \\times 10^{-11}\\,\\text{N} \\cdot \\text{m}^2/\\text{kg}^2\\). (a) Find the satellite’s orbital speed. (b) Find its orbital period. \n\n' +
          'Step 1: Use \\(v = \\sqrt{G M / r}\\). Here \\(v = \\sqrt{(6.67 \\times 10^{-11})(6.0 \\times 10^{24}) / (7.0 \\times 10^6)}\\). Numerically, this is about \\(v \\approx 7.5 \\times 10^3\\,\\text{m/s}\\). \n' +
          'Step 2: The orbital period is \\(T = 2 \\pi r / v\\). Substitute \\(r\\) and \\(v\\) to get \\(T \\approx 2 \\pi (7.0 \\times 10^6) / (7.5 \\times 10^3) \\approx 5.9 \\times 10^3\\,\\text{s}\\), or roughly 1.6 hours.',
        exampleExplanation:
          'For circular satellite orbits, compute \\(v\\) from \\(v = \\sqrt{G M / r}\\) and then use \\(T = 2\\pi r / v\\) to find the orbital period.',
      },
    ],
  },
  {
    unitNumber: 7,
    title: 'Simple Harmonic Motion',
    subunits: [
      {
        id: '7-1',
        title: 'Defining Simple Harmonic Motion (SHM)',
        summary:
          'Simple Harmonic Motion (SHM) is a type of repetitive motion in which an object oscillates back and forth about an equilibrium position under the influence of a restoring force. This restoring force is directly proportional to the displacement from equilibrium and acts in the opposite direction, pulling the object back toward the center. Springs and small‑angle pendulums are classic examples of systems that exhibit SHM.\n\n' +
          'For a mass,spring system, Hooke’s Law describes the restoring force: \\(F = -k x\\), where \\(k\\) is the spring constant and \\(x\\) is the displacement from the equilibrium position. The negative sign indicates that the force always points opposite to the displacement. When the mass is displaced and released, it accelerates toward equilibrium, overshoots due to inertia, and continues oscillating in a periodic fashion.\n\n' +
          'SHM is characterized by sinusoidal motion in time: the position, velocity, and acceleration as functions of time all follow sine or cosine curves. The amplitude is the maximum displacement from equilibrium, the period is the time for one complete cycle, and the frequency is the number of cycles per second. These quantities are determined by the physical properties of the system, such as mass and spring constant.\n\n' +
          'To recognize and model SHM in problem solving, look for a linear restoring force proportional to displacement and an equilibrium position about which the motion is symmetric. Once identified, you can write the equation of motion as \\(x(t) = A \\cos(\\omega t + \\phi)\\), where \\(A\\) is amplitude, \\(\\omega\\) is angular frequency, and \\(\\phi\\) is a phase constant set by initial conditions. Understanding SHM provides a foundation for analyzing many oscillatory systems in physics and engineering.',
        keyIdeas: [
          'SHM involves motion about an equilibrium position under a restoring force proportional to displacement.',
          'Hooke’s Law, \\(F = -k x\\), is the prototype restoring force for mass,spring systems.',
          'The motion in SHM is sinusoidal, with well‑defined amplitude, period, and frequency.',
          'Identifying a linear restoring force and symmetry about equilibrium is the first step in modeling SHM.',
        ],
        exampleCode:
          'Example question: A 0.40 kg mass is attached to a horizontal spring on a frictionless surface. When the mass is pulled 0.06 m from equilibrium, the restoring force is measured to be 1.2 N. (a) Find the spring constant. (b) Explain why this system can be modeled as simple harmonic motion when released. \n\n' +
          'Step 1: Use Hooke’s Law \\(F = -k x\\) in magnitude form \\(|F| = k |x|\\). Here \\(k = F/x = 1.2 / 0.06 = 20\\,\\text{N/m}\\). \n' +
          'Step 2: The restoring force is directly proportional to displacement and always points toward equilibrium (opposite the direction of \\(x\\)). With a linear restoring force and motion about a stable equilibrium, the mass,spring system will undergo simple harmonic motion when displaced and released.',
        exampleExplanation:
          'Checking that the restoring force is proportional to \\(x\\) and directed toward equilibrium justifies modeling the system with the SHM framework and equations.',
      },
      {
        id: '7-2',
        title: 'Frequency and Period of SHM',
        summary:
          'Because SHM is periodic, two key quantities are the period \\(T\\) and frequency \\(f\\). The period is the time required for one complete cycle of motion, while the frequency is the number of cycles per second, measured in hertz (Hz). They are inversely related: \\(f = 1/T\\). Knowing one immediately gives you the other.\n\n' +
          'For a horizontal mass,spring system undergoing SHM without friction, the period depends on the mass and the spring constant: \\(T = 2 \\pi \\sqrt{m/k}\\). Heavier masses oscillate more slowly (longer period), while stiffer springs oscillate more quickly (shorter period). Importantly, for ideal SHM, the period does not depend on amplitude, which is a counterintuitive but experimentally verified result.\n\n' +
          'For a simple pendulum with small oscillation angles, the period is approximately \\(T = 2 \\pi \\sqrt{L/g}\\), where \\(L\\) is the length and \\(g\\) is the gravitational field strength. Longer pendulums swing more slowly, while stronger gravity makes them swing faster. This approximation holds only for small angles, where the restoring torque is nearly proportional to the angular displacement.\n\n' +
          'To solve frequency and period problems, identify whether you are dealing with a mass,spring system or a pendulum, then use the appropriate formula. Plug in the given parameters, compute \\(T\\), and if needed, convert to frequency using \\(f = 1/T\\). These relationships are often used in lab‑style questions where you infer properties like \\(k\\) or \\(L\\) from measured periods.',
        keyIdeas: [
          'Period and frequency are related by \\(f = 1/T\\).',
          'For a mass,spring oscillator, \\(T = 2 \\pi \\sqrt{m/k}\\).',
          'For a small‑angle simple pendulum, \\(T = 2 \\pi \\sqrt{L/g}\\).',
          'In ideal SHM, the period is independent of amplitude, depending only on system parameters.',
        ],
        exampleCode:
          'Example question: A 0.50 kg mass is attached to a horizontal spring with constant \\(k = 200\\,\\text{N/m}\\) on a frictionless surface. The mass is pulled 0.10 m from equilibrium and released. (a) Find the period of oscillation. (b) Find the maximum speed of the mass. \n\n' +
          'Step 1: For a mass,spring system in SHM, the period is \\(T = 2\\pi \\sqrt{m/k}\\). Substitute to get \\(T = 2\\pi \\sqrt{0.50 / 200} = 2\\pi \\sqrt{0.0025} = 2\\pi (0.05) \\approx 0.31\\,\\text{s}\\). \n' +
          'Step 2: Maximum speed occurs at equilibrium, where all the energy is kinetic. Equate spring potential at amplitude to kinetic at equilibrium: \\(\\tfrac{1}{2} k A^2 = \\tfrac{1}{2} m v_{\\max}^2\\), so \\(v_{\\max} = A \\sqrt{k/m}\\). \n' +
          'Step 3: Substitute values: \\(v_{\\max} = 0.10 \\sqrt{200 / 0.50} = 0.10 \\sqrt{400} = 2.0\\,\\text{m/s}\\).',
        exampleExplanation:
          'Here you first use the period formula \\(T = 2\\pi\\sqrt{m/k}\\), then apply energy conservation to relate amplitude and spring constant to the maximum speed at equilibrium.',
      },
      {
        id: '7-3',
        title: 'Representing and Analyzing SHM',
        summary:
          'Simple harmonic motion can be represented using graphs, equations, and energy diagrams. A position,time graph of SHM is a smooth sinusoidal curve, oscillating between \\(+A\\) and \\(-A\\), where \\(A\\) is the amplitude. The velocity,time graph is also sinusoidal but shifted in phase, reaching zero when position is at maximum displacement and peaking when the object passes through equilibrium.\n\n' +
          'Acceleration in SHM is always directed toward the equilibrium position and is proportional to the negative of displacement: \\(a(t) = -\\omega^2 x(t)\\). This relationship reflects the restoring nature of the force and guarantees periodic motion. Graphically, acceleration is largest in magnitude at the turning points and zero at equilibrium, the opposite pattern of velocity.\n\n' +
          'Mathematically, SHM is often described using \\(x(t) = A \\cos(\\omega t + \\phi)\\). From this, you can derive expressions for velocity and acceleration by differentiation: \\(v(t) = -A \\omega \\sin(\\omega t + \\phi)\\) and \\(a(t) = -A \\omega^2 \\cos(\\omega t + \\phi)\\). These equations make it easy to find position, velocity, or acceleration at specific times given initial conditions.\n\n' +
          'To analyze SHM problems, start by identifying the amplitude, period (or \\(\\omega\\)), and phase if given. Use the sinusoidal equations to compute desired quantities or to match graphs to physical descriptions. In many AP questions, you will be asked to interpret or sketch graphs of \\(x(t)\\), \\(v(t)\\), or \\(a(t)\\) for a mass,spring or pendulum system, so understanding the phase relationships among these graphs is key.',
        keyIdeas: [
          'SHM position,time graphs are sinusoidal, oscillating between \\(+A\\) and \\(-A\\).',
          'Acceleration in SHM is always directed toward equilibrium and proportional to \\(-x\\).',
          'Standard SHM equations \\(x(t)\\), \\(v(t)\\), and \\(a(t)\\) are sinusoidal and phase‑shifted relative to each other.',
          'Graph interpretation and recognition of phase relationships are core skills for SHM questions.',
        ],
        exampleCode:
          'Example question: A mass on a spring executes SHM with amplitude 0.08 m and period 0.40 s. At \\(t = 0\\), the mass is at \\(x = +0.08\\,\\text{m}\\) and momentarily at rest. (a) Write an expression for \\(x(t)\\). (b) Determine the angular frequency \\(\\omega\\) and write expressions for \\(v(t)\\) and \\(a(t)\\). \n\n' +
          'Step 1: Starting at maximum positive displacement with zero velocity corresponds to \\(x(t) = A \\cos(\\omega t)\\) with \\(A = 0.08\\,\\text{m}\\) and \\(\\phi = 0\\). \n' +
          'Step 2: The period is \\(T = 0.40\\,\\text{s}\\), so \\(\\omega = 2\\pi / T = 2\\pi / 0.40 = 5\\pi\\,\\text{rad/s}\\) (about 15.7 rad/s). Thus \\(x(t) = 0.08 \\cos(5\\pi t)\\). \n' +
          'Step 3: Differentiate to find \\(v(t)\\) and \\(a(t)\\): \\(v(t) = -0.08 (5\\pi) \\sin(5\\pi t)\\) and \\(a(t) = -0.08 (5\\pi)^2 \\cos(5\\pi t)\\), showing that acceleration is always proportional to \\(-x(t)\\).',
        exampleExplanation:
          'Use the phase information at \\(t = 0\\) to choose a cosine form for \\(x(t)\\), then connect period with angular frequency and use derivatives to obtain velocity and acceleration functions.',
      },
      {
        id: '7-4',
        title: 'Energy of Simple Harmonic Oscillators',
        summary:
          'In simple harmonic motion, energy continually shifts between kinetic and potential forms while the total mechanical energy remains constant (in the absence of damping). At maximum displacement, the object is momentarily at rest and all the mechanical energy is stored as potential energy, either gravitational (for a pendulum) or elastic (for a spring). As the object moves toward equilibrium, potential energy is converted into kinetic energy, and the object speeds up.\n\n' +
          'For a mass,spring system, the elastic potential energy is \\(U = \\tfrac{1}{2} k x^2\\), and the kinetic energy is \\(K = \\tfrac{1}{2} m v^2\\). The total mechanical energy in SHM is \\(E = \\tfrac{1}{2} k A^2\\), determined solely by the amplitude. At the equilibrium position, potential energy is minimal (zero for a spring measured from equilibrium), and kinetic energy is maximal. At the turning points, kinetic energy is zero and potential energy is maximal.\n\n' +
          'Energy bar graphs or energy,position plots can provide a clear visual picture of how energy is partitioned at different points in the motion. These representations complement the sinusoidal position,time graphs and reinforce the idea that while \\(x\\), \\(v\\), and \\(a\\) change continuously, the total energy stays fixed in ideal SHM.\n\n' +
          'To solve energy‑based SHM problems, write the total mechanical energy using \\(E = \\tfrac{1}{2} k A^2\\) for springs or an equivalent expression for gravitational potential in pendulums. Then use \\(K + U = E\\) at any point to relate displacement and speed. This allows you to find the speed at a given position without solving the full time‑dependent equations, emphasizing the power of energy methods in oscillatory motion.',
        keyIdeas: [
          'Total mechanical energy in ideal SHM is constant and depends on amplitude.',
          'Energy alternates between kinetic and potential as the object moves.',
          'For a spring oscillator, \\(E = \\tfrac{1}{2} k A^2\\) and \\(U = \\tfrac{1}{2} k x^2\\).',
          'Energy methods provide a shortcut to find speed or displacement at various points in the motion.',
        ],
        exampleCode:
          'Example question: A 0.30 kg mass attached to a spring with constant \\(k = 120\\,\\text{N/m}\\) oscillates with amplitude 0.05 m on a frictionless surface. (a) Find the total mechanical energy of the oscillator. (b) What is the speed of the mass when it is 0.03 m from equilibrium? \n\n' +
          'Step 1: Total energy in a spring,mass SHM system is \\(E = \\tfrac{1}{2} k A^2\\). Here \\(E = \\tfrac{1}{2} (120)(0.05^2) = 0.15\\,\\text{J}\\). \n' +
          'Step 2: At \\(x = 0.03\\,\\text{m}\\), spring potential energy is \\(U = \\tfrac{1}{2} k x^2 = \\tfrac{1}{2} (120)(0.03^2) = 0.054\\,\\text{J}\\). \n' +
          'Step 3: Kinetic energy is \\(K = E - U = 0.15 - 0.054 = 0.096\\,\\text{J}\\). Set \\(K = \\tfrac{1}{2} m v^2\\) to solve for speed: \\(v = \\sqrt{2K/m} = \\sqrt{2(0.096)/0.30} \\approx 0.80\\,\\text{m/s}\\).',
        exampleExplanation:
          'Write the constant total energy from the amplitude, then subtract the instantaneous potential energy \\(\\tfrac{1}{2} k x^2\\) to find kinetic energy and use \\(K = \\tfrac{1}{2} m v^2\\) to determine the speed.',
      },
    ],
  },
  {
    unitNumber: 8,
    title: 'Fluids and Pressure',
    subunits: [
      {
        id: '8-1',
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
        id: '8-2',
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
        id: '8-3',
        title: 'Fluids and Newton’s Laws',
        summary:
          'Newton’s laws of motion apply to fluids just as they do to solids, but in fluids the forces are often distributed and arise from pressure differences. One of the most important fluid forces is buoyant force, which explains why some objects float while others sink. According to Archimedes’ Principle, the buoyant force on an object immersed in a fluid equals the weight of the fluid displaced by that object.\n\n' +
          'If the buoyant force equals the object’s weight, the object floats at rest or with constant velocity in the fluid. If the buoyant force is greater than the weight, the object accelerates upward; if less, it accelerates downward. These behaviors can be analyzed by drawing free‑body diagrams for objects in fluids, including weight downward and buoyant force upward, and applying Newton’s Second Law in the vertical direction.\n\n' +
          'Fluids in motion also exert forces that can accelerate objects, such as drag forces opposing motion through air or water. While detailed drag formulas can be complex, qualitative understanding of how drag grows with speed and cross‑sectional area is often sufficient in AP Physics 1 contexts.\n\n' +
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
        id: '8-4',
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
]

export const PHYSICS1_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics 1',
  units: PHYSICS1_UNITS,
  features: { latex: true, codeExamples: false },
}


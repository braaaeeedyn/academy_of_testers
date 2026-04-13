import type { SubjectUnitOverview, UnitOverview } from './types'

const AP_PHYSICS_C_MECHANICS_UNITS: UnitOverview[] = [
  {
    unitNumber: 1,
    title: 'Kinematics',
    subunits: [
      {
        id: '1-1',
        title: 'Scalars, Vectors, and Motion Representation',
        summary:
          'Physics describes the natural world using two fundamentally different types of quantities: scalars and vectors. A scalar is a quantity that is fully specified by a single number (with units), such as mass, temperature, speed, or energy. A vector is a quantity that requires both a magnitude and a direction, such as displacement, velocity, acceleration, and force. In AP Physics C, vectors are typically written with an arrow notation (\\(\\vec{v}\\)) or in boldface, and their manipulation using component decomposition is a critical skill that underpins nearly every topic in mechanics. Understanding the distinction between scalars and vectors is not merely definitional; it determines which mathematical operations are valid and how physical laws are expressed.\n\n' +
          'Vectors can be added graphically (tip to tail) or analytically using components. To decompose a vector into components, choose a coordinate system and project the vector onto each axis: \\(\\vec{A} = A_x \\hat{i} + A_y \\hat{j}\\), where \\(A_x = A\\cos\\theta\\) and \\(A_y = A\\sin\\theta\\) for an angle \\(\\theta\\) measured from the positive x axis. The magnitude is recovered by \\(A = \\sqrt{A_x^2 + A_y^2}\\) and the direction by \\(\\theta = \\arctan(A_y/A_x)\\), with care taken to identify the correct quadrant. Vector subtraction, scalar multiplication, and the dot and cross products are all operations that appear repeatedly in mechanics. The dot product \\(\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta\\) yields a scalar and is used in work calculations, while the cross product \\(\\vec{A} \\times \\vec{B}\\) yields a vector perpendicular to both and is used in torque and angular momentum calculations.\n\n' +
          'Motion in physics is represented through multiple complementary tools. Position as a function of time \\(\\vec{r}(t)\\) gives a complete description from which velocity \\(\\vec{v}(t) = d\\vec{r}/dt\\) and acceleration \\(\\vec{a}(t) = d\\vec{v}/dt\\) can be derived through differentiation. Conversely, if acceleration is known, velocity and position can be found through integration. Graphs of position, velocity, and acceleration versus time provide visual representations of motion: the slope of a position versus time graph gives velocity, the slope of a velocity versus time graph gives acceleration, and the area under a velocity versus time curve gives displacement. Choosing an appropriate coordinate system and sign convention at the outset of any problem greatly simplifies the analysis and reduces sign errors.',
        keyIdeas: [
          'Scalars have magnitude only; vectors have both magnitude and direction.',
          'Vector components: \\(A_x = A\\cos\\theta\\), \\(A_y = A\\sin\\theta\\); magnitude \\(A = \\sqrt{A_x^2 + A_y^2}\\).',
          'The dot product gives a scalar (used in work); the cross product gives a vector (used in torque).',
          'Motion is described by \\(\\vec{r}(t)\\), \\(\\vec{v}(t) = d\\vec{r}/dt\\), and \\(\\vec{a}(t) = d\\vec{v}/dt\\), connected by differentiation and integration.',
        ],
        exampleCode:
          'Example question: Two vectors are given: \\(\\vec{A} = 3\\hat{i} + 4\\hat{j}\\) and \\(\\vec{B} = -2\\hat{i} + 5\\hat{j}\\). (a) Find \\(\\vec{A} + \\vec{B}\\). (b) Find the dot product \\(\\vec{A} \\cdot \\vec{B}\\). (c) Find the magnitude of \\(\\vec{A}\\).\n\n' +
          'Step 1: \\(\\vec{A} + \\vec{B} = (3 + (-2))\\hat{i} + (4 + 5)\\hat{j} = 1\\hat{i} + 9\\hat{j}\\).\n' +
          'Step 2: \\(\\vec{A} \\cdot \\vec{B} = (3)(-2) + (4)(5) = -6 + 20 = 14\\).\n' +
          'Step 3: \\(|\\vec{A}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5\\).',
        exampleExplanation:
          'Add vectors component by component, compute the dot product as the sum of products of corresponding components, and find the magnitude using the Pythagorean theorem.',
      },
      {
        id: '1-2',
        title: 'Displacement, Velocity, and Acceleration',
        summary:
          'Displacement is the change in position of an object, defined as \\(\\Delta \\vec{r} = \\vec{r}_f - \\vec{r}_i\\). Unlike distance, which is the total path length traveled and is always positive, displacement is a vector that points from the initial position to the final position and can be positive, negative, or zero. An object that travels in a circle and returns to its starting point has zero displacement but nonzero distance. This distinction matters greatly in physics because the fundamental kinematic equations are expressed in terms of displacement, not distance.\n\n' +
          'Velocity is the rate of change of position with respect to time. Average velocity is defined as \\(\\vec{v}_{\\text{avg}} = \\Delta \\vec{r}/\\Delta t\\), while instantaneous velocity is the limit as the time interval approaches zero: \\(\\vec{v} = d\\vec{r}/dt\\). Speed is the magnitude of the velocity vector and is always non negative. In AP Physics C, the calculus based definition of velocity is essential: if the position is given as a function of time, differentiating it yields the velocity function. The direction of the velocity vector is always tangent to the path of motion, which is important for understanding curvilinear trajectories where the direction of motion changes continuously.\n\n' +
          'Acceleration is the rate of change of velocity: \\(\\vec{a} = d\\vec{v}/dt = d^2\\vec{r}/dt^2\\). Acceleration does not necessarily point in the direction of motion; it points in the direction of the net change in velocity. An object can be accelerating while slowing down (if acceleration opposes velocity), speeding up (if acceleration is in the same direction as velocity), or changing direction without changing speed (as in uniform circular motion). When acceleration is constant, the kinematic equations simplify to the familiar set involving \\(v = v_0 + at\\), \\(x = x_0 + v_0 t + \\tfrac{1}{2}at^2\\), and \\(v^2 = v_0^2 + 2a\\Delta x\\). When acceleration is not constant, integration of \\(a(t)\\) is required to find \\(v(t)\\) and \\(x(t)\\), which is a core skill in Physics C.',
        keyIdeas: [
          'Displacement is a vector (\\(\\Delta \\vec{r}\\)); distance is a scalar (total path length).',
          'Instantaneous velocity: \\(\\vec{v} = d\\vec{r}/dt\\); always tangent to the path.',
          'Acceleration: \\(\\vec{a} = d\\vec{v}/dt\\); need not point in the direction of motion.',
          'Constant acceleration yields algebraic kinematic equations; variable acceleration requires calculus (differentiation and integration).',
        ],
        exampleCode:
          'Example question: The position of a particle is given by \\(x(t) = 4t^3 - 6t^2 + 2t\\) (in meters, with \\(t\\) in seconds). (a) Find the velocity at \\(t = 2\\,\\text{s}\\). (b) Find the acceleration at \\(t = 2\\,\\text{s}\\).\n\n' +
          'Step 1: Differentiate to find velocity: \\(v(t) = dx/dt = 12t^2 - 12t + 2\\). At \\(t = 2\\): \\(v(2) = 12(4) - 12(2) + 2 = 48 - 24 + 2 = 26\\,\\text{m/s}\\).\n' +
          'Step 2: Differentiate again to find acceleration: \\(a(t) = dv/dt = 24t - 12\\). At \\(t = 2\\): \\(a(2) = 24(2) - 12 = 36\\,\\text{m/s}^2\\).',
        exampleExplanation:
          'Differentiate the position function once to get velocity and twice to get acceleration, then evaluate each at the specified time.',
      },
      {
        id: '1-3',
        title: 'One Dimensional Motion',
        summary:
          'One dimensional motion occurs along a single straight line, so all vector quantities reduce to signed scalars (positive or negative indicating direction). For constant acceleration, the kinematic equations are: \\(v = v_0 + at\\), \\(x = x_0 + v_0 t + \\tfrac{1}{2}at^2\\), and \\(v^2 = v_0^2 + 2a(x - x_0)\\). These equations can be derived from the definitions of velocity and acceleration through integration, which is the approach expected in Physics C. Starting from \\(a = dv/dt\\), integrating once gives \\(v(t) = v_0 + \\int_0^t a\\,dt\'\\), and integrating again gives \\(x(t) = x_0 + \\int_0^t v(t\')\\,dt\'\\).\n\n' +
          'Free fall is a common example of one dimensional motion with constant acceleration \\(g \\approx 9.8\\,\\text{m/s}^2\\) directed downward near the Earth\'s surface. By choosing a positive direction (typically upward or downward) and applying the kinematic equations, you can find the time of flight, maximum height, and final velocity of objects thrown vertically or dropped from rest. A frequently tested nuance is the symmetry of free fall trajectories: an object thrown upward from a height takes the same time to rise to its peak as it does to fall back to the same height, and its speed at any given height on the way up equals its speed at that height on the way down.\n\n' +
          'When acceleration is not constant, the kinematic equations for constant acceleration do not apply and you must work directly with \\(v = dx/dt\\) and \\(a = dv/dt\\). Sometimes the acceleration is given as a function of time, \\(a(t)\\), which is integrated to find \\(v(t)\\) and then \\(x(t)\\). Other times, acceleration depends on velocity (as in drag problems) or on position (as in spring problems), requiring separation of variables or energy methods. For instance, if \\(a = -bv\\), separating variables gives \\(dv/v = -b\\,dt\\), which integrates to \\(v = v_0 e^{-bt}\\). These more advanced techniques are a hallmark of the Physics C curriculum and distinguish it from the algebra based course.',
        keyIdeas: [
          'Constant acceleration kinematic equations are derived by integrating \\(a = dv/dt\\) and \\(v = dx/dt\\).',
          'Free fall uses \\(a = \\pm g\\); trajectory symmetry simplifies many problems.',
          'Non constant acceleration requires direct integration or separation of variables.',
          'When \\(a\\) depends on \\(v\\) or \\(x\\), techniques like separation of variables or \\(v\\,dv = a\\,dx\\) are needed.',
        ],
        exampleCode:
          'Example question: A particle starts from rest and has an acceleration given by \\(a(t) = 6t\\,\\text{m/s}^2\\). (a) Find \\(v(t)\\). (b) Find \\(x(t)\\). (c) Find the displacement from \\(t = 0\\) to \\(t = 3\\,\\text{s}\\).\n\n' +
          'Step 1: \\(v(t) = \\int_0^t 6t\'\\,dt\' = 3t^2\\,\\text{m/s}\\).\n' +
          'Step 2: \\(x(t) = \\int_0^t 3t\'^2\\,dt\' = t^3\\,\\text{m}\\).\n' +
          'Step 3: \\(x(3) = 3^3 = 27\\,\\text{m}\\).',
        exampleExplanation:
          'Integrate the time dependent acceleration to find velocity, then integrate velocity to find position, applying initial conditions (starting from rest at the origin).',
      },
      {
        id: '1-4',
        title: 'Motion in Two and Three Dimensions',
        summary:
          'When motion occurs in more than one dimension, each component of the motion is analyzed independently. The position vector is \\(\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}\\), and differentiation yields the velocity and acceleration component by component: \\(v_x = dx/dt\\), \\(v_y = dy/dt\\), \\(a_x = dv_x/dt\\), \\(a_y = dv_y/dt\\). The independence of perpendicular components is the cornerstone of projectile motion analysis, where the horizontal component has zero acceleration (constant velocity) and the vertical component has constant gravitational acceleration.\n\n' +
          'Projectile motion is the canonical example of two dimensional motion with constant acceleration. With \\(a_x = 0\\) and \\(a_y = -g\\) (taking upward as positive), the equations of motion are \\(x = x_0 + v_{0x}t\\) and \\(y = y_0 + v_{0y}t - \\tfrac{1}{2}gt^2\\). The trajectory is a parabola, and by eliminating time between the two equations you obtain \\(y = y_0 + (\\tan\\theta_0)x - \\frac{g}{2v_0^2 \\cos^2\\theta_0}x^2\\). Important derived results include the range formula \\(R = v_0^2 \\sin(2\\theta)/g\\) for launch and landing at the same height, and the fact that complementary launch angles (\\(\\theta\\) and \\(90° - \\theta\\)) produce the same range. In Physics C, projectile problems may involve non standard launch and landing heights, requiring you to solve quadratic equations in time.\n\n' +
          'Uniform circular motion is another important case of two dimensional motion where the speed is constant but the direction changes continuously. The acceleration is centripetal (directed toward the center of the circle) with magnitude \\(a_c = v^2/r = \\omega^2 r\\), where \\(\\omega = 2\\pi/T\\) is the angular velocity. In non uniform circular motion, the acceleration has both a centripetal (radial) component and a tangential component: \\(a_t = d|v|/dt\\). The total acceleration is the vector sum of these two perpendicular components. The position in circular motion can be expressed using \\(\\vec{r}(t) = r\\cos(\\omega t)\\hat{i} + r\\sin(\\omega t)\\hat{j}\\), and differentiating twice confirms the centripetal acceleration result. Understanding how to decompose acceleration into radial and tangential parts is essential for later work on rotational dynamics and orbital motion.',
        keyIdeas: [
          'In multi dimensional motion, each component is analyzed independently.',
          'Projectile motion: \\(a_x = 0\\), \\(a_y = -g\\); trajectory is parabolic.',
          'Centripetal acceleration: \\(a_c = v^2/r\\); directed toward the center of the circular path.',
          'Non uniform circular motion has both centripetal and tangential acceleration components.',
        ],
        exampleCode:
          'Example question: A ball is launched from ground level at 20 m/s at an angle of 30° above the horizontal. (a) Find the time of flight. (b) Find the range.\n\n' +
          'Step 1: \\(v_{0x} = 20\\cos 30° = 17.3\\,\\text{m/s}\\); \\(v_{0y} = 20\\sin 30° = 10.0\\,\\text{m/s}\\).\n' +
          'Step 2: At landing, \\(y = 0\\): \\(0 = v_{0y}t - \\tfrac{1}{2}gt^2 = t(v_{0y} - \\tfrac{1}{2}gt)\\). Nonzero solution: \\(t = 2v_{0y}/g = 2(10.0)/9.8 \\approx 2.04\\,\\text{s}\\).\n' +
          'Step 3: Range: \\(R = v_{0x} t = (17.3)(2.04) \\approx 35.3\\,\\text{m}\\).',
        exampleExplanation:
          'Decompose the initial velocity into components, use the vertical equation to find the time of flight (when \\(y\\) returns to zero), then multiply the horizontal velocity by the time of flight to find the range.',
      },
      {
        id: '1-5',
        title: 'Reference Frames and Relative Motion',
        summary:
          'A reference frame is a coordinate system attached to an observer from which measurements of position, velocity, and acceleration are made. Different observers in different reference frames may measure different velocities for the same object. The relative velocity equation connects measurements between frames: \\(\\vec{v}_{A/C} = \\vec{v}_{A/B} + \\vec{v}_{B/C}\\), where \\(\\vec{v}_{A/C}\\) is the velocity of object A as seen by observer C, \\(\\vec{v}_{A/B}\\) is the velocity of A as seen by B, and \\(\\vec{v}_{B/C}\\) is the velocity of B as seen by C. This is a vector equation and must be handled with component decomposition or geometric methods when the velocities are not collinear.\n\n' +
          'An inertial reference frame is one that is not accelerating; Newton\'s laws hold in their simplest form only in inertial frames. A frame moving at constant velocity relative to an inertial frame is also inertial. If a reference frame is accelerating, objects within it appear to experience fictitious forces (such as the centrifugal force in a rotating frame) that have no physical agent. While Physics C problems are typically set in inertial frames, understanding when a frame is non inertial helps explain phenomena like the apparent weightlessness in free fall or the sensation of being pushed outward on a carousel.\n\n' +
          'Relative motion problems frequently appear in contexts involving boats crossing rivers, airplanes flying in wind, and objects viewed from moving platforms. The general strategy is to label all velocity vectors with double subscripts indicating "of what" relative to "what" (such as \\(\\vec{v}_{\\text{boat/water}}\\) and \\(\\vec{v}_{\\text{water/ground}}\\)), write the vector addition equation, and solve for the unknown using components. Time derivatives of the relative velocity equation also yield relative acceleration: if frame B is moving at constant velocity relative to frame C, then \\(\\vec{a}_{A/B} = \\vec{a}_{A/C}\\), meaning observers in both frames agree on the acceleration. This result is why Newton\'s Second Law has the same form in all inertial reference frames.',
        keyIdeas: [
          'Relative velocity: \\(\\vec{v}_{A/C} = \\vec{v}_{A/B} + \\vec{v}_{B/C}\\); a vector equation.',
          'Inertial frames are non accelerating; Newton\'s laws hold directly in inertial frames.',
          'Observers in different inertial frames agree on acceleration but may disagree on velocity.',
          'Use double subscript notation and vector addition to solve relative motion problems systematically.',
        ],
        exampleCode:
          'Example question: A boat can travel at 5.0 m/s in still water. It aims to cross a river that flows east at 3.0 m/s. The boat points directly north. (a) Find the boat\'s velocity relative to the ground. (b) Find the angle of its actual path.\n\n' +
          'Step 1: \\(\\vec{v}_{\\text{boat/ground}} = \\vec{v}_{\\text{boat/water}} + \\vec{v}_{\\text{water/ground}} = 5.0\\hat{j} + 3.0\\hat{i}\\).\n' +
          'Step 2: Speed: \\(v = \\sqrt{3.0^2 + 5.0^2} = \\sqrt{34} \\approx 5.83\\,\\text{m/s}\\).\n' +
          'Step 3: Angle east of north: \\(\\theta = \\arctan(3.0/5.0) \\approx 31°\\).',
        exampleExplanation:
          'Add the velocity vectors using components, find the resultant magnitude and direction, and interpret the angle relative to the intended heading.',
      },
      {
        id: '1-6',
        title: 'Graphical Analysis of Motion',
        summary:
          'Graphs of kinematic quantities versus time encode complete information about an object\'s motion, and the ability to extract that information is a foundational skill in Physics C. On a position versus time (\\(x\\) vs \\(t\\)) graph, the slope at any point equals the instantaneous velocity at that time, and the curvature (concavity) indicates whether the object is accelerating or decelerating. A straight line indicates constant velocity; a parabolic curve indicates constant acceleration. On a velocity versus time (\\(v\\) vs \\(t\\)) graph, the slope equals the instantaneous acceleration, and the area between the curve and the time axis equals the displacement over that interval.\n\n' +
          'On an acceleration versus time (\\(a\\) vs \\(t\\)) graph, the area under the curve over a time interval gives the change in velocity: \\(\\Delta v = \\int a\\,dt\\). These graphical relationships are simply visual representations of the calculus definitions: differentiation corresponds to finding slopes, and integration corresponds to finding areas. In Physics C, you may encounter graphs with piecewise linear or curved segments, and you must be comfortable computing areas of triangles, rectangles, and trapezoids, or recognizing when a more complex integral is implied.\n\n' +
          'Translating between different types of motion graphs is a critical skill. Given a position graph, you should be able to sketch the corresponding velocity and acceleration graphs, and vice versa. Key things to check include: where the slope is zero (velocity graph crosses zero or acceleration graph crosses zero), where the slope changes sign (turning points), and where the curvature changes (inflection points in position correspond to extrema in velocity). In problems where a function is provided algebraically (such as \\(x(t) = At^3 + Bt\\)), you can differentiate to find \\(v(t)\\) and \\(a(t)\\) and then sketch all three graphs. Conversely, if only a graph is given, you extract the mathematical relationships through geometric analysis of slopes and areas.',
        keyIdeas: [
          'Slope of \\(x\\) vs \\(t\\) = velocity; slope of \\(v\\) vs \\(t\\) = acceleration.',
          'Area under \\(v\\) vs \\(t\\) = displacement; area under \\(a\\) vs \\(t\\) = change in velocity.',
          'Differentiation gives slopes; integration gives areas under curves.',
          'Translating between position, velocity, and acceleration graphs requires analyzing slopes, zeros, and curvature.',
        ],
        exampleCode:
          'Example question: The velocity of a particle is given by \\(v(t) = 8 - 2t\\,\\text{m/s}\\) for \\(0 \\leq t \\leq 6\\,\\text{s}\\). (a) At what time does the particle change direction? (b) Find the total displacement from \\(t = 0\\) to \\(t = 6\\,\\text{s}\\). (c) Find the total distance traveled.\n\n' +
          'Step 1: The particle changes direction when \\(v = 0\\): \\(8 - 2t = 0 \\Rightarrow t = 4\\,\\text{s}\\).\n' +
          'Step 2: Displacement: \\(\\Delta x = \\int_0^6 (8 - 2t)\\,dt = [8t - t^2]_0^6 = (48 - 36) - 0 = 12\\,\\text{m}\\).\n' +
          'Step 3: Distance: split at \\(t = 4\\). From 0 to 4: \\(\\int_0^4 (8 - 2t)\\,dt = [8t - t^2]_0^4 = 16\\,\\text{m}\\). From 4 to 6: \\(\\int_4^6 (8 - 2t)\\,dt = [8t - t^2]_4^6 = 12 - 16 = -4\\,\\text{m}\\). Distance = \\(16 + |-4| = 20\\,\\text{m}\\).',
        exampleExplanation:
          'Find when the velocity is zero to identify direction changes, integrate velocity over the full interval for displacement, and sum the absolute values of displacement in each segment for total distance.',
      },
    ],
  },
  {
    unitNumber: 2,
    title: 'Force and Motion Dynamics',
    subunits: [
      {
        id: '2-1',
        title: 'Systems and Interactions',
        summary:
          'In physics, a system is any collection of objects that you choose to analyze as a group. The choice of system boundaries is flexible and strategic: a well chosen system simplifies the problem by making internal forces cancel out. Forces between objects within the system are internal forces, while forces from objects outside the system acting on objects inside are external forces. According to Newton\'s Third Law, internal forces come in equal and opposite pairs and therefore contribute nothing to the net force on the system as a whole. Only external forces can change the total momentum or cause acceleration of the system\'s center of mass.\n\n' +
          'The concept of a system is particularly powerful when analyzing connected objects, such as blocks linked by ropes, Atwood machines, or coupled rotational and translational systems. For instance, two blocks connected by a massless string over a frictionless pulley can be treated as a single system: the tension in the rope is internal and cancels when you sum forces on the system, leaving only the weights and any friction as external forces. Alternatively, the two blocks can be treated individually as separate systems, in which case the tension appears as an external force on each block. Both approaches yield the same result, but the system approach often reduces the number of equations needed.\n\n' +
          'Choosing a system also affects how you identify interactions. Every force is part of an interaction between two objects, and correctly identifying "which object exerts the force on which" is essential for drawing accurate free body diagrams and applying Newton\'s laws. In Physics C, problems frequently require you to switch perspectives between a system level view (to find the overall acceleration) and an individual object view (to find internal forces like tension). Developing fluency with system selection is one of the most important problem solving skills in mechanics, because it determines how efficiently you can set up and solve the equations governing the motion.',
        keyIdeas: [
          'A system is a chosen group of objects; internal forces cancel within the system.',
          'Only external forces affect the net force on a system and its center of mass acceleration.',
          'The system approach simplifies multi body problems by eliminating internal forces.',
          'Switching between system level and individual object analysis is a key problem solving strategy.',
        ],
        exampleCode:
          'Example question: Two blocks, \\(m_1 = 3.0\\,\\text{kg}\\) and \\(m_2 = 5.0\\,\\text{kg}\\), are connected by a massless string and pulled across a frictionless surface by a force \\(F = 24\\,\\text{N}\\) applied to \\(m_2\\). (a) Treating both blocks as a system, find the acceleration. (b) Find the tension in the string.\n\n' +
          'Step 1: System approach: \\(F = (m_1 + m_2)a\\), so \\(a = 24/(3.0 + 5.0) = 3.0\\,\\text{m/s}^2\\).\n' +
          'Step 2: Isolate \\(m_1\\): the only horizontal force on \\(m_1\\) is the tension \\(T\\). So \\(T = m_1 a = (3.0)(3.0) = 9.0\\,\\text{N}\\).',
        exampleExplanation:
          'Use the system approach to find the common acceleration without needing the tension, then isolate one block to find the tension as the only force accelerating it.',
      },
      {
        id: '2-2',
        title: 'Forces and Free Body Diagrams',
        summary:
          'A free body diagram (FBD) is a sketch of a single object (or system) showing all the external forces acting on it, represented as arrows originating from the object. Each arrow is labeled with the type of force and, when possible, its magnitude and direction. Common forces in mechanics include gravitational force (weight, \\(mg\\), always directed downward), normal force (perpendicular to a contact surface), tension (along a rope or string, pulling away from the object), friction (parallel to the surface, opposing relative motion or tendency of motion), spring force (\\(F = -kx\\), toward the equilibrium position), and applied forces.\n\n' +
          'Drawing correct free body diagrams is the single most important step in solving dynamics problems. Common errors include forgetting to include a force (such as friction or a component of gravity on an incline), including forces that act on other objects (violating the single object principle), drawing forces in wrong directions, and failing to decompose forces into components along a chosen coordinate system. For objects on inclined planes, it is usually most convenient to choose axes parallel and perpendicular to the incline, so that the gravitational force decomposes into \\(mg\\sin\\theta\\) along the plane and \\(mg\\cos\\theta\\) perpendicular to it, while the normal force has only a perpendicular component.\n\n' +
          'In AP Physics C, free body diagrams must be paired with coordinate systems and Newton\'s Second Law equations. For each axis direction, write \\(\\sum F = ma\\) (or \\(\\sum F = 0\\) for equilibrium) using the components of all forces shown on the FBD. When multiple objects interact, draw a separate FBD for each object and write separate equations, connecting them through shared forces (like tension) and shared acceleration (if the objects move together). The ability to translate a physical situation into a correct FBD and then into correct equations of motion is the core skill tested in the dynamics portion of the exam.',
        keyIdeas: [
          'A free body diagram shows all external forces on a single object, with correct magnitudes and directions.',
          'Common forces: weight (\\(mg\\)), normal, tension, friction, spring (\\(-kx\\)), and applied forces.',
          'Choose coordinate axes to simplify component decomposition (e.g., parallel and perpendicular to an incline).',
          'Translate each FBD into \\(\\sum F = ma\\) equations along each axis.',
        ],
        exampleCode:
          'Example question: A 10 kg block sits on a 30° frictionless incline. (a) Draw the free body diagram. (b) Find the acceleration of the block. (c) Find the normal force.\n\n' +
          'Step 1: FBD forces: weight \\(mg = 98\\,\\text{N}\\) straight down, normal force \\(N\\) perpendicular to the incline surface.\n' +
          'Step 2: Axes along and perpendicular to incline. Along incline: \\(mg\\sin 30° = ma\\), so \\(a = g\\sin 30° = 9.8(0.50) = 4.9\\,\\text{m/s}^2\\).\n' +
          'Step 3: Perpendicular to incline: \\(N = mg\\cos 30° = 98(0.866) \\approx 84.9\\,\\text{N}\\).',
        exampleExplanation:
          'Decompose the weight into components along and perpendicular to the incline, apply Newton\'s Second Law along the incline to find acceleration, and use equilibrium perpendicular to the incline to find the normal force.',
      },
      {
        id: '2-3',
        title: 'Newton\'s First Law',
        summary:
          'Newton\'s First Law states that an object at rest stays at rest and an object in motion continues in motion with constant velocity (both constant speed and constant direction) unless acted upon by a nonzero net external force. This law defines inertia as the tendency of objects to resist changes in their state of motion. Mass is the quantitative measure of inertia: more massive objects require larger forces to achieve the same acceleration. The First Law also implicitly defines inertial reference frames as those in which isolated objects do not accelerate.\n\n' +
          'The First Law is not merely a special case of the Second Law (\\(F = 0 \\Rightarrow a = 0\\)); it serves a deeper conceptual role by establishing that force free motion is uniform and by identifying the class of reference frames in which Newton\'s laws are valid. In a non inertial (accelerating) frame, an object with no forces on it would appear to accelerate, violating the First Law. Understanding this distinction is important for recognizing when fictitious forces must be introduced (such as the centrifugal or Coriolis forces in rotating frames) and for choosing appropriate frames in which to analyze problems.\n\n' +
          'Equilibrium is the practical application of the First Law. An object is in translational equilibrium when the net force on it is zero: \\(\\sum \\vec{F} = 0\\). This can mean the object is at rest (static equilibrium) or moving with constant velocity (dynamic equilibrium). Solving equilibrium problems involves drawing a free body diagram, decomposing all forces into components, and setting the sum of components equal to zero along each axis. Equilibrium conditions are widely applied in statics, structural engineering, and as checks in dynamic problems where certain directions have no acceleration (such as the direction perpendicular to motion on an incline).',
        keyIdeas: [
          'Newton\'s First Law: objects maintain their velocity unless acted on by a net force.',
          'Mass measures inertia; the First Law defines inertial reference frames.',
          'Translational equilibrium: \\(\\sum \\vec{F} = 0\\); applies to objects at rest or with constant velocity.',
          'The First Law distinguishes inertial from non inertial frames, not just zero force from nonzero force.',
        ],
        exampleCode:
          'Example question: A 5.0 kg box hangs from two ropes. Rope A makes an angle of 40° with the horizontal and rope B makes an angle of 60° with the horizontal. Find the tension in each rope.\n\n' +
          'Step 1: Equilibrium: \\(\\sum F_x = 0\\): \\(T_B\\cos 60° - T_A\\cos 40° = 0\\), so \\(T_B(0.50) = T_A(0.766)\\), giving \\(T_B = 1.532 T_A\\).\n' +
          'Step 2: \\(\\sum F_y = 0\\): \\(T_A\\sin 40° + T_B\\sin 60° - mg = 0\\). Substituting: \\(T_A(0.643) + 1.532 T_A(0.866) = 49\\).\n' +
          'Step 3: \\(T_A(0.643 + 1.327) = 49\\), so \\(T_A = 49/1.970 \\approx 24.9\\,\\text{N}\\) and \\(T_B = 1.532(24.9) \\approx 38.1\\,\\text{N}\\).',
        exampleExplanation:
          'Apply the equilibrium conditions in two perpendicular directions, use one equation to express one tension in terms of the other, substitute into the second equation, and solve.',
      },
      {
        id: '2-4',
        title: 'Newton\'s Second Law',
        summary:
          'Newton\'s Second Law is the central equation of classical mechanics: \\(\\vec{F}_{\\text{net}} = m\\vec{a}\\), or equivalently \\(\\vec{F}_{\\text{net}} = d\\vec{p}/dt\\), where \\(\\vec{p} = m\\vec{v}\\) is the linear momentum. The first form applies when mass is constant; the second is more general and applies even to systems where mass changes (such as rockets). The Second Law is a vector equation, meaning it holds independently along each coordinate axis: \\(\\sum F_x = ma_x\\), \\(\\sum F_y = ma_y\\), and \\(\\sum F_z = ma_z\\). This decomposition is the practical starting point for solving nearly all dynamics problems.\n\n' +
          'In AP Physics C, Newton\'s Second Law is frequently used to set up differential equations. When forces depend on velocity (such as air resistance proportional to \\(v\\) or \\(v^2\\)), the equation \\(ma = F(v)\\) becomes \\(m\\,dv/dt = F(v)\\), a first order ODE that is solved by separation of variables. When forces depend on position (such as a spring force \\(F = -kx\\)), the equation becomes \\(m\\,d^2x/dt^2 = -kx\\), a second order ODE whose solution is sinusoidal (simple harmonic motion). The ability to recognize, set up, and solve these differential equations is a key distinction of the Physics C course.\n\n' +
          'Applying the Second Law to multi body systems requires careful bookkeeping. Draw a free body diagram for each object, write \\(\\sum F = ma\\) for each, and identify constraint equations that relate the accelerations (for example, objects connected by an inextensible string have the same magnitude of acceleration, and objects in contact share the same acceleration in the direction of contact). This produces a system of simultaneous equations that can be solved for unknown accelerations and forces. In more complex scenarios, such as Atwood machines with massive pulleys, you must also include rotational dynamics equations, which are covered in later units.',
        keyIdeas: [
          'Newton\'s Second Law: \\(\\vec{F}_{\\text{net}} = m\\vec{a} = d\\vec{p}/dt\\); a vector equation applied component by component.',
          'Velocity dependent forces lead to first order ODEs; position dependent forces lead to second order ODEs.',
          'Multi body problems require simultaneous FBDs, Newton\'s Second Law equations, and constraint equations.',
          'The momentum form \\(F = dp/dt\\) generalizes to variable mass systems.',
        ],
        exampleCode:
          'Example question: A 2.0 kg object experiences a velocity dependent resistive force \\(F = -4v\\) (in newtons, with \\(v\\) in m/s) and no other horizontal forces. It starts with velocity 10 m/s. (a) Set up the differential equation. (b) Solve for \\(v(t)\\).\n\n' +
          'Step 1: \\(m\\,dv/dt = -4v\\), so \\(2\\,dv/dt = -4v\\), giving \\(dv/dt = -2v\\).\n' +
          'Step 2: Separate variables: \\(dv/v = -2\\,dt\\). Integrate: \\(\\ln|v| = -2t + C\\). At \\(t = 0\\), \\(v = 10\\), so \\(C = \\ln 10\\).\n' +
          'Step 3: \\(v(t) = 10 e^{-2t}\\,\\text{m/s}\\). The object decelerates exponentially.',
        exampleExplanation:
          'Recognize the velocity dependent force, set up Newton\'s Second Law as a separable ODE, integrate with initial conditions, and obtain the exponential decay of velocity.',
      },
      {
        id: '2-5',
        title: 'Newton\'s Third Law',
        summary:
          'Newton\'s Third Law states that if object A exerts a force on object B, then object B exerts a force on object A that is equal in magnitude and opposite in direction: \\(\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}\\). These are called action reaction pairs (or Third Law pairs). Crucially, the two forces in a Third Law pair always act on different objects. They are always the same type of force (both gravitational, both normal, both tension, etc.), they are always equal in magnitude, they are always opposite in direction, and they always act simultaneously.\n\n' +
          'A common misconception is that Third Law pairs "cancel out." They do not cancel because they act on different objects. Forces cancel only when they act on the same object and are equal and opposite (equilibrium). For example, a book resting on a table has two forces acting on it: its weight (Earth pulls book down) and the normal force (table pushes book up). These are not a Third Law pair because they are different types of forces acting on the same object. The Third Law pairs are: (1) Earth pulls book down / book pulls Earth up (gravitational), and (2) table pushes book up / book pushes table down (normal).\n\n' +
          'Newton\'s Third Law is essential for analyzing interactions between objects and for understanding how forces propagate through systems. When you push on a wall, the wall pushes back on you with equal force. When a horse pulls a cart, the cart pulls back on the horse with equal force; the horse accelerates forward because it pushes backward on the ground and the ground pushes it forward, and this ground force exceeds the backward pull of the cart. In multi body problems, Third Law pairs connect the free body diagrams of interacting objects: the tension force that one block exerts on a string is equal and opposite to the tension the string exerts on that block.',
        keyIdeas: [
          'Third Law: \\(\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}\\); equal magnitude, opposite direction, on different objects.',
          'Third Law pairs never cancel because they act on different objects.',
          'Both forces in a pair are always the same type and act simultaneously.',
          'Third Law pairs connect free body diagrams of interacting objects in multi body problems.',
        ],
        exampleCode:
          'Example question: A person of mass 60 kg stands on a scale in an elevator accelerating upward at 2.0 m/s\\(^2\\). (a) Identify the Third Law pair for the normal force the scale exerts on the person. (b) Find the reading on the scale.\n\n' +
          'Step 1: The scale pushes up on the person with force \\(N\\). By the Third Law, the person pushes down on the scale with force \\(N\\). These form the Third Law pair.\n' +
          'Step 2: FBD of person: \\(N - mg = ma\\). So \\(N = m(g + a) = 60(9.8 + 2.0) = 708\\,\\text{N}\\). The scale reads 708 N (apparent weight).',
        exampleExplanation:
          'Identify the Third Law pair (person pushes scale, scale pushes person), then apply Newton\'s Second Law to the person to find the normal force, which equals the scale reading.',
      },
      {
        id: '2-6',
        title: 'Gravitational Force',
        summary:
          'Newton\'s law of universal gravitation states that every pair of objects with mass attracts each other with a force \\(F = Gm_1 m_2/r^2\\), where \\(G = 6.674 \\times 10^{-11}\\,\\text{N·m}^2/\\text{kg}^2\\) is the gravitational constant, \\(m_1\\) and \\(m_2\\) are the masses, and \\(r\\) is the distance between their centers (for spherically symmetric objects). This force is always attractive, acts along the line connecting the centers, and obeys the inverse square law. Near the surface of the Earth, the gravitational acceleration is approximately \\(g = GM_E/R_E^2 \\approx 9.8\\,\\text{m/s}^2\\), so the gravitational force on an object of mass \\(m\\) is simply \\(F = mg\\) directed downward.\n\n' +
          'The gravitational field \\(\\vec{g}\\) at a point in space is defined as the gravitational force per unit mass: \\(\\vec{g} = \\vec{F}/m = -GM/r^2\\,\\hat{r}\\), where \\(\\hat{r}\\) points radially outward from the mass \\(M\\). The field concept is useful because it describes the gravitational influence at every point in space without reference to a particular test mass. The gravitational field on the surface of a planet of mass \\(M\\) and radius \\(R\\) is \\(g = GM/R^2\\), and it decreases with altitude as \\(g(r) = GM/r^2\\) for \\(r > R\\).\n\n' +
          'The shell theorem is an important result: a uniform spherical shell attracts an external object as if all the shell\'s mass were concentrated at its center, and it exerts zero net gravitational force on an object inside the shell. This allows you to treat spherically symmetric bodies (like planets) as point masses when the object is outside, greatly simplifying gravitational calculations. Inside a uniform solid sphere at radius \\(r\\), only the mass enclosed within radius \\(r\\) contributes to the gravitational force, so \\(g(r) = G(4/3)\\pi \\rho r = (GM/R^3)r\\), which increases linearly with \\(r\\) from the center. These results are derived using Gauss\'s law for gravity or direct integration and are important for understanding planetary structure and satellite orbits.',
        keyIdeas: [
          'Universal gravitation: \\(F = Gm_1 m_2/r^2\\); always attractive, inverse square law.',
          'Near Earth\'s surface, \\(F = mg\\) with \\(g \\approx 9.8\\,\\text{m/s}^2\\).',
          'Shell theorem: external to a sphere, treat all mass as at the center; inside a shell, \\(F = 0\\).',
          'Gravitational field: \\(g = GM/r^2\\) outside a sphere; \\(g \\propto r\\) inside a uniform solid sphere.',
        ],
        exampleCode:
          'Example question: A satellite orbits Earth at an altitude of one Earth radius above the surface (\\(r = 2R_E\\)). (a) Find the gravitational acceleration at this altitude in terms of \\(g\\). (b) If \\(g = 9.8\\,\\text{m/s}^2\\), find the numerical value.\n\n' +
          'Step 1: \\(g(r) = GM_E/r^2 = GM_E/(2R_E)^2 = (GM_E/R_E^2)/4 = g/4\\).\n' +
          'Step 2: Numerically, \\(g(2R_E) = 9.8/4 = 2.45\\,\\text{m/s}^2\\).',
        exampleExplanation:
          'Apply the inverse square relationship: doubling the distance from Earth\'s center reduces \\(g\\) by a factor of four.',
      },
      {
        id: '2-7',
        title: 'Friction (Static and Kinetic)',
        summary:
          'Friction is a contact force that opposes the relative motion (or tendency of relative motion) between two surfaces. There are two types. Static friction acts when there is no sliding between surfaces; it adjusts its magnitude as needed up to a maximum value: \\(f_s \\leq \\mu_s N\\), where \\(\\mu_s\\) is the coefficient of static friction and \\(N\\) is the normal force. Static friction matches the applied force until the applied force exceeds the maximum, at which point the object begins to slide. Kinetic friction acts when surfaces are sliding against each other and has a constant magnitude: \\(f_k = \\mu_k N\\), where \\(\\mu_k\\) is the coefficient of kinetic friction. Typically \\(\\mu_k < \\mu_s\\), which is why it takes more force to start sliding an object than to keep it sliding.\n\n' +
          'The direction of friction is always parallel to the contact surface and opposite to the direction of relative motion (for kinetic friction) or opposite to the direction the object would move if friction were absent (for static friction). On inclined planes, friction acts up the plane if the object tends to slide down, and down the plane if the object tends to slide up (as when pushed up a ramp). When an object is on the verge of sliding, static friction is at its maximum and you can use \\(f_s = \\mu_s N\\) as an equality rather than an inequality.\n\n' +
          'Friction problems in Physics C often involve multiple surfaces, inclines, or connected objects. A systematic approach is: (1) draw free body diagrams for each object, (2) determine whether each contact involves static or kinetic friction, (3) write Newton\'s Second Law equations along each axis, and (4) solve the resulting system of equations. Friction does negative work on a sliding object, converting kinetic energy into thermal energy, which is why friction is a non conservative force. In energy conservation problems, the work done by friction must be accounted for: \\(W_{\\text{friction}} = -f_k d\\), where \\(d\\) is the sliding distance. Some problems require determining whether static friction is sufficient to prevent sliding, which involves comparing the required friction to \\(\\mu_s N\\).',
        keyIdeas: [
          'Static friction: \\(f_s \\leq \\mu_s N\\); adjusts up to a maximum; prevents relative motion.',
          'Kinetic friction: \\(f_k = \\mu_k N\\); constant magnitude; opposes sliding motion.',
          'Friction is parallel to the surface and opposite to relative motion or tendency of motion.',
          'Friction is non conservative; \\(W_{\\text{friction}} = -f_k d\\) converts kinetic energy to thermal energy.',
        ],
        exampleCode:
          'Example question: A 4.0 kg block on a horizontal surface (\\(\\mu_s = 0.40\\), \\(\\mu_k = 0.30\\)) has a horizontal force applied to it. (a) What is the maximum force that can be applied without the block moving? (b) If a force of 20 N is applied, find the acceleration.\n\n' +
          'Step 1: \\(N = mg = (4.0)(9.8) = 39.2\\,\\text{N}\\). Maximum static friction: \\(f_{s,\\text{max}} = \\mu_s N = (0.40)(39.2) = 15.7\\,\\text{N}\\).\n' +
          'Step 2: Since 20 N > 15.7 N, the block slides. Kinetic friction: \\(f_k = \\mu_k N = (0.30)(39.2) = 11.8\\,\\text{N}\\).\n' +
          'Step 3: \\(a = (F - f_k)/m = (20 - 11.8)/4.0 = 2.05\\,\\text{m/s}^2\\).',
        exampleExplanation:
          'Compare the applied force to the maximum static friction to determine whether the block moves, then use kinetic friction to find the net force and acceleration.',
      },
      {
        id: '2-8',
        title: 'Spring and Resistive Forces',
        summary:
          'Hooke\'s law describes the force exerted by an ideal spring: \\(F = -kx\\), where \\(k\\) is the spring constant (in N/m) and \\(x\\) is the displacement from the spring\'s natural (equilibrium) length. The negative sign indicates that the spring force is a restoring force, always directed back toward the equilibrium position. Real springs obey Hooke\'s law for sufficiently small deformations; beyond the elastic limit, the force is no longer proportional to displacement. When applied to Newton\'s Second Law, the spring force yields the differential equation \\(m\\ddot{x} = -kx\\), whose solution is simple harmonic motion: \\(x(t) = A\\cos(\\omega t + \\phi)\\) with \\(\\omega = \\sqrt{k/m}\\). This is explored in depth in the oscillations unit.\n\n' +
          'Resistive forces (drag forces) oppose the motion of an object through a fluid (air or liquid). At low speeds, drag is often modeled as proportional to velocity: \\(F_d = -bv\\), where \\(b\\) is a drag coefficient. At higher speeds, drag is better modeled as proportional to velocity squared: \\(F_d = -\\tfrac{1}{2}C_D \\rho A v^2\\), where \\(C_D\\) is the drag coefficient, \\(\\rho\\) is the fluid density, and \\(A\\) is the cross sectional area. The sign convention is such that drag always opposes the velocity vector. These velocity dependent forces lead to differential equations that are central to AP Physics C.\n\n' +
          'A falling object subject to linear drag (\\(F_d = -bv\\)) reaches terminal velocity when the drag force equals the gravitational force: \\(v_t = mg/b\\). The approach to terminal velocity is exponential: \\(v(t) = v_t(1 - e^{-bt/m})\\). For quadratic drag (\\(F_d = cv^2\\)), terminal velocity is \\(v_t = \\sqrt{mg/c}\\) and the approach involves hyperbolic functions. Solving these problems requires setting up \\(m\\,dv/dt = mg - bv\\) (or \\(mg - cv^2\\)), separating variables, and integrating. The time constant \\(\\tau = m/b\\) characterizes how quickly terminal velocity is approached. In Physics C, you are expected to be able to derive these results and to analyze the behavior at early times (\\(t \\ll \\tau\\), where the object is nearly in free fall) and at late times (\\(t \\gg \\tau\\), where \\(v \\approx v_t\\)).',
        keyIdeas: [
          'Hooke\'s law: \\(F = -kx\\); a restoring force producing simple harmonic motion when combined with \\(F = ma\\).',
          'Linear drag: \\(F_d = -bv\\); terminal velocity \\(v_t = mg/b\\); exponential approach.',
          'Quadratic drag: \\(F_d = -cv^2\\); terminal velocity \\(v_t = \\sqrt{mg/c}\\).',
          'Drag problems require separation of variables and integration of the resulting ODE.',
        ],
        exampleCode:
          'Example question: A 0.50 kg object falls from rest through a medium that exerts a linear drag force \\(F_d = -2.0v\\) (in newtons). (a) Find the terminal velocity. (b) Write an expression for \\(v(t)\\).\n\n' +
          'Step 1: Terminal velocity: \\(v_t = mg/b = (0.50)(9.8)/2.0 = 2.45\\,\\text{m/s}\\).\n' +
          'Step 2: The ODE is \\(m\\,dv/dt = mg - bv\\). Solution: \\(v(t) = v_t(1 - e^{-bt/m}) = 2.45(1 - e^{-4.0t})\\,\\text{m/s}\\), where \\(b/m = 2.0/0.50 = 4.0\\,\\text{s}^{-1}\\).',
        exampleExplanation:
          'Find terminal velocity by setting drag equal to weight, then solve the first order linear ODE by separation of variables to find the exponential approach to terminal velocity.',
      },
      {
        id: '2-9',
        title: 'Circular Motion Dynamics',
        summary:
          'Uniform circular motion requires a net centripetal force directed toward the center of the circle: \\(F_c = mv^2/r = m\\omega^2 r\\). This is not a new type of force but rather the result of whatever real forces (gravity, tension, normal force, friction) are responsible for keeping the object on its circular path. Newton\'s Second Law in the radial direction gives \\(\\sum F_r = mv^2/r\\), where the positive radial direction is conventionally chosen to point toward the center. Identifying which real forces contribute to the centripetal acceleration is the key step in every circular motion problem.\n\n' +
          'Common examples include a ball on a string swung in a vertical circle (where tension and gravity both contribute to the centripetal force, with the critical condition at the top being \\(T + mg = mv^2/r\\), and the minimum speed for maintaining contact corresponding to \\(T = 0\\)), a car rounding a banked curve (where the normal force and friction together provide the centripetal force), and a satellite in orbit (where gravity alone provides the centripetal force: \\(GMm/r^2 = mv^2/r\\), yielding the orbital speed \\(v = \\sqrt{GM/r}\\)). In each case, the approach is the same: draw a free body diagram, choose a radial and tangential coordinate system, and apply Newton\'s Second Law in each direction.\n\n' +
          'In non uniform circular motion, the speed changes as the object moves around the circle, so there is a tangential acceleration \\(a_t = d|v|/dt\\) in addition to the centripetal acceleration \\(a_c = v^2/r\\). The total acceleration is the vector sum: \\(\\vec{a} = a_c \\hat{r} + a_t \\hat{\\theta}\\). Non uniform circular motion problems arise in situations like a pendulum swinging through its arc or a roller coaster traversing a loop. At each point, you must evaluate the instantaneous speed (often using energy conservation) to compute the centripetal acceleration, and apply Newton\'s Second Law along both the radial and tangential directions to find forces or angular acceleration.',
        keyIdeas: [
          'Centripetal force is provided by real forces; \\(F_c = mv^2/r\\) is Newton\'s Second Law in the radial direction.',
          'In vertical circles, tension and gravity combine differently at the top and bottom.',
          'Orbital motion: \\(GMm/r^2 = mv^2/r\\) gives \\(v = \\sqrt{GM/r}\\).',
          'Non uniform circular motion includes tangential acceleration: \\(a_t = d|v|/dt\\).',
        ],
        exampleCode:
          'Example question: A 0.50 kg ball on a 1.0 m string is swung in a vertical circle. At the top of the circle, the tension in the string is 3.0 N. (a) Find the speed at the top. (b) Find the minimum speed at the top for the string to remain taut.\n\n' +
          'Step 1: At the top, both tension and gravity point toward the center: \\(T + mg = mv^2/r\\). So \\(3.0 + (0.50)(9.8) = (0.50)v^2/1.0\\). This gives \\(7.9 = 0.50v^2\\), so \\(v = \\sqrt{15.8} \\approx 3.97\\,\\text{m/s}\\).\n' +
          'Step 2: Minimum speed when \\(T = 0\\): \\(mg = mv_{\\text{min}}^2/r\\), so \\(v_{\\text{min}} = \\sqrt{gr} = \\sqrt{(9.8)(1.0)} \\approx 3.13\\,\\text{m/s}\\).',
        exampleExplanation:
          'Apply Newton\'s Second Law in the radial direction at the top of the vertical circle, where both tension and gravity contribute to the centripetal force. The minimum speed corresponds to zero tension.',
      },
    ],
  },
  {
    unitNumber: 3,
    title: 'Work, Energy, and Power',
    subunits: [
      {
        id: '3-1',
        title: 'Kinetic Energy',
        summary:
          'Kinetic energy is the energy an object possesses due to its motion. For a point mass (or an object in pure translation), the translational kinetic energy is \\(K = \\tfrac{1}{2}mv^2\\), where \\(m\\) is the mass and \\(v\\) is the speed. Kinetic energy is a scalar quantity that is always non negative. It depends on the square of the speed, meaning that doubling the speed quadruples the kinetic energy. This nonlinear relationship has profound practical consequences: the stopping distance of a car at twice the speed is four times as long (assuming constant braking force), and the energy released in a high speed collision is far greater than at low speed.\n\n' +
          'In the context of AP Physics C, kinetic energy serves as the bridge between dynamics (forces and acceleration) and energy methods. The kinetic energy can be derived from Newton\'s Second Law: starting with \\(F = ma = m\\,dv/dt\\), multiplying both sides by \\(v = dx/dt\\) gives \\(Fv = mv\\,dv/dt\\), or \\(F\\,dx = mv\\,dv\\). Integrating both sides from the initial to final state yields the work energy theorem, which connects force and displacement directly to changes in kinetic energy. This derivation is important because it shows why energy methods are equivalent to, not separate from, Newton\'s laws.\n\n' +
          'For systems of particles, the total kinetic energy includes contributions from every particle. This is decomposed as the kinetic energy of the center of mass plus the kinetic energy relative to the center of mass: \\(K_{\\text{total}} = \\tfrac{1}{2}Mv_{\\text{cm}}^2 + K_{\\text{rel}}\\). This decomposition becomes especially important when dealing with rotating objects (where \\(K_{\\text{rel}} = \\tfrac{1}{2}I\\omega^2\\)) and in collision problems where the kinetic energy in the center of mass frame determines whether a collision is elastic. Understanding kinetic energy as a function of frame (it depends on the observer\'s velocity) is conceptually important in Physics C.',
        keyIdeas: [
          'Translational kinetic energy: \\(K = \\tfrac{1}{2}mv^2\\); always non negative and frame dependent.',
          'Kinetic energy scales with the square of speed; doubling \\(v\\) quadruples \\(K\\).',
          'Derivable from Newton\'s Second Law by multiplying by velocity and integrating.',
          'Total \\(K\\) of a system = center of mass \\(K\\) + kinetic energy relative to the center of mass.',
        ],
        exampleCode:
          'Example question: A 1500 kg car accelerates from 10 m/s to 30 m/s. (a) Find the change in kinetic energy. (b) How does this compare to the kinetic energy change from 0 to 20 m/s?\n\n' +
          'Step 1: \\(\\Delta K = \\tfrac{1}{2}m(v_f^2 - v_i^2) = \\tfrac{1}{2}(1500)(30^2 - 10^2) = \\tfrac{1}{2}(1500)(800) = 600{,}000\\,\\text{J}\\).\n' +
          'Step 2: From 0 to 20 m/s: \\(\\Delta K = \\tfrac{1}{2}(1500)(400 - 0) = 300{,}000\\,\\text{J}\\). The first change is twice as large despite the same 20 m/s speed increase, illustrating the \\(v^2\\) dependence.',
        exampleExplanation:
          'Compute the change in kinetic energy using the difference of squared speeds, and note that the same speed increment produces a much larger energy change at higher speeds due to the quadratic relationship.',
      },
      {
        id: '3-2',
        title: 'Work',
        summary:
          'Work is the mechanism by which forces transfer energy to or from an object. For a constant force \\(\\vec{F}\\) applied over a displacement \\(\\vec{d}\\), the work done is \\(W = \\vec{F} \\cdot \\vec{d} = Fd\\cos\\theta\\), where \\(\\theta\\) is the angle between the force and displacement vectors. Work is positive when the force has a component in the direction of displacement (energy is added), negative when the component opposes displacement (energy is removed), and zero when the force is perpendicular to the displacement (as with the normal force on a level surface or the centripetal force in circular motion).\n\n' +
          'In AP Physics C, the general definition of work for a variable force along a path is the line integral: \\(W = \\int_C \\vec{F} \\cdot d\\vec{r}\\). In one dimension, this reduces to \\(W = \\int_{x_i}^{x_f} F(x)\\,dx\\), which is the area under the force versus position curve. This integral formulation is essential for forces that change with position, such as spring forces (\\(W = \\int_0^x (-kx\')\\,dx\' = -\\tfrac{1}{2}kx^2\\)) or gravitational forces over large distances (\\(W = \\int_{r_i}^{r_f} (-GMm/r^2)\\,dr\\)). Graphically, the work done by a variable force equals the signed area between the \\(F(x)\\) curve and the x axis.\n\n' +
          'Work is done by individual forces, and the total (net) work is the sum of the work done by all forces: \\(W_{\\text{net}} = \\sum W_i\\). Alternatively, the net work can be computed as the work done by the net force. The distinction between the work done by individual forces and the net work is important because individual forces can do positive, negative, or zero work on an object, and these must be summed to find the net effect on kinetic energy. Conservative forces (gravity, springs) do work that depends only on initial and final positions, not on path; non conservative forces (friction, air resistance) do work that depends on the path taken.',
        keyIdeas: [
          'Work by a constant force: \\(W = Fd\\cos\\theta\\); positive, negative, or zero depending on the angle.',
          'Work by a variable force: \\(W = \\int \\vec{F} \\cdot d\\vec{r}\\); the area under \\(F(x)\\) vs \\(x\\).',
          'Net work is the sum of work done by all individual forces.',
          'Conservative forces: path independent work; non conservative forces: path dependent work.',
        ],
        exampleCode:
          'Example question: A force on a particle varies with position according to \\(F(x) = 3x^2 + 2\\) (in newtons, with \\(x\\) in meters). Find the work done as the particle moves from \\(x = 1\\,\\text{m}\\) to \\(x = 4\\,\\text{m}\\).\n\n' +
          'Step 1: \\(W = \\int_1^4 (3x^2 + 2)\\,dx = [x^3 + 2x]_1^4\\).\n' +
          'Step 2: \\(W = (64 + 8) - (1 + 2) = 72 - 3 = 69\\,\\text{J}\\).',
        exampleExplanation:
          'Integrate the force function over the given displacement interval to find the total work done by the variable force.',
      },
      {
        id: '3-3',
        title: 'Work Energy Theorem',
        summary:
          'The work energy theorem states that the net work done on an object equals the change in its kinetic energy: \\(W_{\\text{net}} = \\Delta K = K_f - K_i = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2\\). This theorem is derived directly from Newton\'s Second Law and is completely general, applying whether the forces are constant or variable, conservative or non conservative. It provides a powerful alternative to kinematics for finding final speeds, because it relates the total effect of all forces over a displacement to the resulting speed change without needing to know the acceleration at every instant.\n\n' +
          'The work energy theorem can also be decomposed by identifying the work done by conservative forces and non conservative forces separately. The work done by conservative forces equals the negative change in potential energy: \\(W_{\\text{conservative}} = -\\Delta U\\). Therefore, \\(W_{\\text{net}} = W_{\\text{conservative}} + W_{\\text{non-conservative}} = -\\Delta U + W_{\\text{nc}}\\), and the work energy theorem becomes \\(\\Delta K + \\Delta U = W_{\\text{nc}}\\), or \\(\\Delta E_{\\text{mech}} = W_{\\text{nc}}\\). When no non conservative forces do work, mechanical energy is conserved. This connection between the work energy theorem and conservation of energy is a central result in mechanics.\n\n' +
          'In Physics C problem solving, the work energy theorem is especially useful when forces vary with position or when you only care about initial and final states, not the details of the motion between them. For example, finding the speed of a block after sliding down a curved ramp with friction is easily handled by computing the work done by gravity (or using potential energy) and the work done by friction (\\(W_f = -\\mu_k N d\\)) over the known distance, then applying the theorem. The theorem can also be applied in rotational contexts (with rotational kinetic energy and torque doing work), as discussed in later units.',
        keyIdeas: [
          'Work energy theorem: \\(W_{\\text{net}} = \\Delta K\\); net work equals the change in kinetic energy.',
          'Derived directly from Newton\'s Second Law; valid for all forces.',
          'Decomposition: \\(\\Delta K + \\Delta U = W_{\\text{nc}}\\); connects to energy conservation.',
          'Especially useful when forces vary or only initial and final states matter.',
        ],
        exampleCode:
          'Example question: A 2.0 kg block slides down a 5.0 m long frictionless ramp inclined at 30°, starting from rest. Use the work energy theorem to find its speed at the bottom.\n\n' +
          'Step 1: The height descended: \\(h = 5.0 \\sin 30° = 2.5\\,\\text{m}\\). Work done by gravity: \\(W = mgh = (2.0)(9.8)(2.5) = 49\\,\\text{J}\\). Normal force does no work (perpendicular to motion).\n' +
          'Step 2: \\(W_{\\text{net}} = \\Delta K\\): \\(49 = \\tfrac{1}{2}(2.0)v^2\\), so \\(v = \\sqrt{49} = 7.0\\,\\text{m/s}\\).',
        exampleExplanation:
          'Compute the work done by gravity (the only force with a component along the displacement), set it equal to the change in kinetic energy, and solve for the final speed.',
      },
      {
        id: '3-4',
        title: 'Potential Energy',
        summary:
          'Potential energy is energy stored in a system by virtue of the configuration or position of its parts relative to one another. It is defined only for conservative forces, and the relationship is \\(\\Delta U = -W_{\\text{conservative}} = -\\int \\vec{F}_{\\text{cons}} \\cdot d\\vec{r}\\). For gravitational potential energy near Earth\'s surface, this gives \\(U_g = mgy\\) (with \\(y\\) measured upward from a chosen reference level). For a spring, \\(U_s = \\tfrac{1}{2}kx^2\\) (measuring \\(x\\) from the equilibrium position). For universal gravitation, \\(U_g = -GMm/r\\) (with \\(U = 0\\) at \\(r \\to \\infty\\)). In each case, the reference point where \\(U = 0\\) is a convention that can be chosen freely, because only changes in potential energy have physical significance.\n\n' +
          'A force is conservative if and only if the work it does on an object depends only on the initial and final positions, not on the path taken. Equivalently, the work done by a conservative force around any closed path is zero. Gravity, the spring force, and the electrostatic force are all conservative. Friction and air resistance are non conservative because the work they do depends on the path length. The existence of a potential energy function is the defining characteristic of a conservative force, and the force can be recovered from the potential energy by differentiation: \\(F_x = -dU/dx\\) in one dimension, or \\(\\vec{F} = -\\nabla U\\) in general.\n\n' +
          'Potential energy diagrams (\\(U\\) vs \\(x\\) plots) are a powerful tool for qualitative analysis of motion. The force at any point is the negative slope of the \\(U(x)\\) curve: \\(F = -dU/dx\\). Points where \\(dU/dx = 0\\) are equilibrium positions. A minimum of \\(U(x)\\) is a stable equilibrium (the particle oscillates around it when displaced slightly), a maximum is an unstable equilibrium (the particle accelerates away when displaced), and an inflection with zero slope is a neutral equilibrium. The total mechanical energy \\(E = K + U\\) is a horizontal line on the diagram, and the kinetic energy at any position is the vertical distance between the \\(E\\) line and the \\(U(x)\\) curve. Turning points occur where \\(E = U\\) (kinetic energy is zero), defining the boundaries of allowed motion.',
        keyIdeas: [
          'Potential energy: \\(\\Delta U = -W_{\\text{cons}}\\); defined only for conservative forces.',
          'Common forms: \\(U_g = mgy\\), \\(U_s = \\tfrac{1}{2}kx^2\\), \\(U_g = -GMm/r\\).',
          'Force from potential energy: \\(F = -dU/dx\\); minima are stable, maxima are unstable equilibria.',
          'On a \\(U(x)\\) diagram, \\(K\\) is the gap between the total energy line and the curve; turning points are where \\(K = 0\\).',
        ],
        exampleCode:
          'Example question: The potential energy of a particle is given by \\(U(x) = 3x^2 - 12x + 10\\) (in joules, with \\(x\\) in meters). (a) Find the equilibrium position(s). (b) Determine whether each is stable or unstable. (c) Find the force at \\(x = 1\\,\\text{m}\\).\n\n' +
          'Step 1: Equilibrium: \\(dU/dx = 6x - 12 = 0\\), so \\(x = 2\\,\\text{m}\\).\n' +
          'Step 2: \\(d^2U/dx^2 = 6 > 0\\), so the equilibrium is a minimum, hence stable.\n' +
          'Step 3: \\(F(1) = -dU/dx|_{x=1} = -(6(1) - 12) = -(-6) = 6\\,\\text{N}\\) (directed toward the equilibrium).',
        exampleExplanation:
          'Find equilibrium positions by setting the first derivative of \\(U\\) to zero, check stability with the second derivative, and compute force as the negative of the first derivative.',
      },
      {
        id: '3-5',
        title: 'Conservation of Energy',
        summary:
          'The principle of conservation of mechanical energy states that if only conservative forces do work on a system, the total mechanical energy \\(E = K + U\\) remains constant: \\(K_i + U_i = K_f + U_f\\). This is an extraordinarily powerful problem solving tool because it relates the state of a system at one point to its state at another without needing to know the details of the motion in between. Conservation of energy is typically faster and simpler than force based methods for problems involving curved paths, varying forces, or situations where only speeds are needed.\n\n' +
          'When non conservative forces (such as friction or applied pushes) are present, the generalized energy equation becomes \\(K_i + U_i + W_{\\text{nc}} = K_f + U_f\\), where \\(W_{\\text{nc}}\\) is the total work done by all non conservative forces. Friction dissipates mechanical energy into thermal energy: \\(W_{\\text{friction}} = -f_k d < 0\\), so the final mechanical energy is less than the initial. An applied force that does positive work adds energy to the system. The broader principle of conservation of total energy (including thermal and other forms) always holds, but in mechanics we focus on mechanical energy and account for non conservative work as the "leak" or "input."\n\n' +
          'In AP Physics C, energy conservation is frequently combined with other principles. A common pattern is: use energy conservation to relate speeds at two positions, then use Newton\'s Second Law (often in the centripetal direction) at one of those positions to find a force. For example, finding the normal force at the bottom of a loop the loop requires first using energy conservation to find the speed at the bottom, then applying \\(\\sum F_r = mv^2/r\\) there. Another common pattern involves gravitational potential energy for orbits: the total energy of an orbit is \\(E = K + U = -GMm/(2r)\\) for a circular orbit, derived by combining \\(K = \\tfrac{1}{2}mv^2\\) with the orbital speed condition \\(v^2 = GM/r\\). Energy methods also connect naturally to the oscillation topics in Unit 7.',
        keyIdeas: [
          'If only conservative forces act: \\(K_i + U_i = K_f + U_f\\).',
          'With non conservative forces: \\(\\Delta E_{\\text{mech}} = W_{\\text{nc}}\\); friction removes mechanical energy.',
          'Energy conservation relates states at different positions without needing the detailed path.',
          'Often combined with Newton\'s Second Law at a specific point to find forces.',
        ],
        exampleCode:
          'Example question: A 0.50 kg ball is released from rest at the top of a frictionless circular track of radius 2.0 m. The top is at height \\(2R = 4.0\\,\\text{m}\\) above the bottom. (a) Find the speed at the bottom. (b) Find the normal force at the bottom.\n\n' +
          'Step 1: Energy conservation: \\(mgh = \\tfrac{1}{2}mv^2\\), so \\(v = \\sqrt{2gh} = \\sqrt{2(9.8)(4.0)} = 8.85\\,\\text{m/s}\\).\n' +
          'Step 2: At the bottom, Newton\'s Second Law in the radial direction: \\(N - mg = mv^2/r\\). So \\(N = m(g + v^2/r) = 0.50(9.8 + 78.4/2.0) = 0.50(9.8 + 39.2) = 24.5\\,\\text{N}\\).',
        exampleExplanation:
          'Use energy conservation to find the speed at the bottom of the track, then apply centripetal force analysis to find the normal force.',
      },
      {
        id: '3-6',
        title: 'Power and Energy Transfer Rate',
        summary:
          'Power is the rate at which work is done or energy is transferred: \\(P = dW/dt\\). The SI unit of power is the watt (W), equal to one joule per second. For a constant force, power can be expressed as \\(P = \\vec{F} \\cdot \\vec{v} = Fv\\cos\\theta\\), where \\(\\vec{v}\\) is the instantaneous velocity. This formula is particularly useful because it connects force and velocity directly to the rate of energy transfer, without needing to compute displacement first. A car engine operating at constant power, for example, produces a force \\(F = P/v\\) that decreases as speed increases, which is why acceleration decreases at higher speeds for a given power output.\n\n' +
          'Average power over a time interval is \\(\\bar{P} = W/\\Delta t = \\Delta E/\\Delta t\\). Instantaneous power is the limit as the time interval goes to zero. The distinction matters when power varies with time. For a force that varies with position, the instantaneous power at any moment is \\(P(t) = F(x(t)) \\cdot v(t)\\). In some problems, you are given that an engine delivers constant power, which leads to the differential equation \\(P = Fv = m(dv/dt)v\\), or \\(P = mv\\,dv/dt\\). Separating variables and integrating gives \\(v^2 = v_0^2 + 2Pt/m\\), showing that under constant power the speed increases with the square root of time.\n\n' +
          'Energy transfer rates appear in many contexts beyond mechanical work. The gravitational power required to lift an object at constant velocity \\(v\\) is \\(P = mgv\\). Friction dissipates energy at a rate \\(P_{\\text{friction}} = f_k v\\). In rotational contexts (discussed later), power delivered by a torque is \\(P = \\tau\\omega\\). In problems involving machines, engines, or elevators, power is often the limiting factor: a motor of given power rating can lift a load at a maximum speed \\(v_{\\text{max}} = P/(mg)\\) or accelerate a vehicle along a road at a rate that depends on the instantaneous speed. Understanding power as a rate rather than a cumulative quantity is essential for these dynamic scenarios.',
        keyIdeas: [
          'Power: \\(P = dW/dt = \\vec{F} \\cdot \\vec{v}\\); the rate of energy transfer.',
          'Average power: \\(\\bar{P} = W/\\Delta t\\); instantaneous power is the derivative.',
          'Constant power: \\(P = mv\\,dv/dt\\); leads to \\(v \\propto \\sqrt{t}\\) from rest.',
          'Power is the limiting factor for engines and motors: \\(F = P/v\\) decreases with speed at constant power.',
        ],
        exampleCode:
          'Example question: A 1000 kg car has an engine that delivers a constant 50 kW. (a) What is the maximum speed on a level road if resistive forces total 1000 N? (b) At \\(v = 25\\,\\text{m/s}\\), what is the net force and acceleration?\n\n' +
          'Step 1: At maximum speed, engine force equals resistive force: \\(P/v_{\\text{max}} = 1000\\,\\text{N}\\), so \\(v_{\\text{max}} = P/F_r = 50{,}000/1000 = 50\\,\\text{m/s}\\).\n' +
          'Step 2: At \\(v = 25\\,\\text{m/s}\\): engine force \\(= P/v = 50{,}000/25 = 2000\\,\\text{N}\\). Net force \\(= 2000 - 1000 = 1000\\,\\text{N}\\). Acceleration \\(= 1000/1000 = 1.0\\,\\text{m/s}^2\\).',
        exampleExplanation:
          'At maximum speed, the engine force (\\(P/v\\)) balances the resistive force. At lower speeds, the engine force exceeds resistance, giving a net force and acceleration.',
      },
    ],
  },
  {
    unitNumber: 4,
    title: 'Linear Momentum',
    subunits: [
      {
        id: '4-1',
        title: 'Momentum and Impulse',
        summary:
          'Linear momentum is defined as \\(\\vec{p} = m\\vec{v}\\), the product of an object\'s mass and velocity. It is a vector quantity with the same direction as the velocity. Newton\'s Second Law in its most general form is \\(\\vec{F}_{\\text{net}} = d\\vec{p}/dt\\), which reduces to \\(\\vec{F} = m\\vec{a}\\) when mass is constant. Momentum is an important quantity because, unlike kinetic energy, it is a vector and is conserved in isolated systems regardless of whether collisions are elastic or inelastic. The impulse momentum theorem connects force and time to changes in momentum.\n\n' +
          'Impulse is defined as the integral of force over time: \\(\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}\\,dt\\). The impulse momentum theorem states that the impulse equals the change in momentum: \\(\\vec{J} = \\Delta \\vec{p}\\). For a constant net force over an interval, this reduces to \\(\\vec{J} = \\vec{F}\\Delta t\\), which explains why brief collisions can involve very large average forces. In AP Physics C, the integral form is essential whenever \\(F(t)\\) is not constant.\n\n' +
          'The momentum of a system of particles is \\(\\vec{P} = \\sum_i \\vec{p}_i\\). If the net external impulse on the system is zero (or the interaction is so brief that external forces are negligible compared with internal forces), total momentum is conserved: \\(\\vec{P}_i = \\vec{P}_f\\). This vector conservation law holds for both elastic and inelastic collisions; kinetic energy may or may not be conserved separately.',
        keyIdeas: [
          'Linear momentum: \\(\\vec{p} = m\\vec{v}\\); Newton\'s Second Law: \\(\\vec{F}_{\\text{net}} = d\\vec{p}/dt\\).',
          'Impulse: \\(\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}\\); for constant force, \\(\\vec{J} = \\vec{F}\\Delta t\\).',
          'Total momentum of an isolated system is conserved when net external impulse is negligible.',
          'Momentum conservation applies to elastic and inelastic collisions; energy conservation is a separate condition.',
        ],
        exampleCode:
          'Example question: A 2.0 kg cart moving at 3.0 m/s on a frictionless track collides head on with a 4.0 kg cart initially at rest. The carts stick together. Find their speed just after the collision.\n\n' +
          'Step 1: Momentum conservation: \\(m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f\\).\n' +
          'Step 2: \\((2.0)(3.0) + (4.0)(0) = (6.0)v_f\\), so \\(v_f = 6.0/6.0 = 1.0\\,\\text{m/s}\\) in the direction of the incoming 2.0 kg cart.',
        exampleExplanation:
          'Use conservation of momentum for a perfectly inelastic collision; kinetic energy is not conserved, but total momentum is.',
      },
      {
        id: '4-2',
        title: 'Conservation of Linear Momentum',
        summary:
          'The principle of conservation of linear momentum states that if the net external force acting on a system of particles is zero, the total linear momentum of the system remains constant. Mathematically, if \\(\\Sigma\\vec{F}_{\\text{ext}} = 0\\), then \\(d\\vec{P}/dt = 0\\), which means the initial and final momentum vectors are equal: \\(\\vec{P}_i = \\vec{P}_f\\). Because momentum is a vector quantity, this conservation law applies independently in each spatial dimension (e.g., \\(P_{ix} = P_{fx}\\) and \\(P_{iy} = P_{fy}\\)).\n\n' +
          'This principle is crucial for analyzing explosions, recoil, and collisions in isolated systems. It also implies that for an isolated system, the velocity of the center of mass, \\(\\vec{v}_{\\text{cm}}\\), remains constant regardless of the internal interactions between the objects. Internal forces change the momenta of individual particles but always occur in equal and opposite action-reaction pairs according to Newton\'s Third Law, leaving the total momentum of the system entirely unchanged.',
        keyIdeas: [
          'Total momentum is conserved in an isolated system where the net external force is zero: \\(\\vec{P}_i = \\vec{P}_f\\).',
          'Momentum conservation applies independently to each dimensional axis (x, y, and z components).',
          'In an isolated system, the velocity of the center of mass, \\(\\vec{v}_{\\text{cm}}\\), is constant.',
          'Internal forces (like those in explosions or spring releases) do not change the total momentum of a system.',
        ],
        exampleCode:
          'Example question: A 50.0 kg astronaut is floating at rest in space and throws a 2.0 kg wrench at a speed of 10.0 m/s. What is the recoil velocity of the astronaut?\n\n' +
          'Step 1: Set up the conservation of momentum for the isolated system (astronaut + wrench) initially at rest: \\(0 = m_a v_a + m_w v_w\\).\n' +
          'Step 2: Substitute the known values: \\(0 = (50.0)v_a + (2.0)(10.0)\\).\n' +
          'Step 3: Solve for the astronaut\'s velocity: \\(v_a = -20.0/50.0 = -0.40\\,\\text{m/s}\\).',
        exampleExplanation:
          'Since there are no external forces, the total momentum remains zero. The astronaut moves in the opposite direction of the wrench (indicated by the negative sign) with a smaller speed proportional to the mass ratio.',
      },
      {
        id: '4-3',
        title: 'Collisions (Elastic and Inelastic)',
        summary:
          'During any collision in an isolated system, the total linear momentum is always conserved. However, collisions are categorized based on what happens to the system\'s total kinetic energy. In an elastic collision, both total momentum and total kinetic energy are conserved (\\(K_i = K_f\\)). These typically occur only at the atomic or subatomic level, though macroscopic collisions (like hard billiard balls) can closely approximate them.\n\n' +
          'In an inelastic collision, momentum is conserved but some kinetic energy is transformed into other forms of energy, such as thermal energy, sound, or deformation (\\(K_i > K_f\\)). A perfectly inelastic collision is a special case where the colliding objects stick together after impact, moving with a common final velocity. This type of collision results in the maximum possible loss of kinetic energy. When analyzing 2D collisions (glancing blows), you must set up separate conservation of momentum equations for the x-axis and y-axis.',
        keyIdeas: [
          'Elastic collisions: Both total momentum (\\(\\vec{P}_i = \\vec{P}_f\\)) and total kinetic energy (\\(K_i = K_f\\)) are conserved.',
          'Inelastic collisions: Total momentum is conserved, but kinetic energy is not (some KE is lost to heat/deformation).',
          'Perfectly inelastic collisions: Objects stick together and share the same final velocity, losing the maximum amount of kinetic energy.',
          'For 2D collisions, momentum conservation must be evaluated using vector components.',
        ],
        exampleCode:
          'Example question: A 3.0 kg mass moving at 4.0 m/s in the positive x-direction strikes a stationary 1.0 kg mass. The collision is perfectly elastic. Find the final velocities of both masses.\n\n' +
          'Step 1: Use momentum conservation: \\(m_1 v_{1i} + 0 = m_1 v_{1f} + m_2 v_{2f} \\implies (3.0)(4.0) = 3.0 v_{1f} + 1.0 v_{2f}\\).\n' +
          'Step 2: Use the relative velocity equation for 1D elastic collisions: \\(v_{1i} - v_{2i} = -(v_{1f} - v_{2f}) \\implies 4.0 - 0 = v_{2f} - v_{1f} \\implies v_{2f} = v_{1f} + 4.0\\).\n' +
          'Step 3: Substitute \\(v_{2f}\\) into the momentum equation: \\(12.0 = 3.0 v_{1f} + 1.0(v_{1f} + 4.0)\\).\n' +
          'Step 4: Solve for \\(v_{1f}\\): \\(12.0 = 4.0 v_{1f} + 4.0 \\implies 4.0 v_{1f} = 8.0 \\implies v_{1f} = 2.0\\,\\text{m/s}\\).\n' +
          'Step 5: Solve for \\(v_{2f}\\): \\(v_{2f} = 2.0 + 4.0 = 6.0\\,\\text{m/s}\\).',
        exampleExplanation:
          'For a perfectly elastic collision, applying both momentum and kinetic energy conservation (simplified via the relative velocity formula) allows you to solve a system of equations for the two unknown final velocities.',
      },
    ],
  },
  {
    unitNumber: 5,
    title: 'Torque and Rotational Motion',
    subunits: [
      {
        id: '5-1',
        title: 'Rotational Kinematics',
        summary:
          'Rotational kinematics describes the rotational motion of an object without considering the forces causing it. It uses angular variables that are perfectly analogous to linear kinematic variables: angular displacement (\\(\\theta\\)), angular velocity (\\(\\omega = d\\theta/dt\\)), and angular acceleration (\\(\\alpha = d\\omega/dt\\)). When angular acceleration is constant, a set of kinematic equations identical in structure to the linear ones can be used (e.g., \\(\\omega = \\omega_0 + \\alpha t\\)).\n\n' +
          'Linear and angular quantities are connected by the radius \\(r\\) from the axis of rotation: \\(s = r\\theta\\), \\(v_t = r\\omega\\), and \\(a_t = r\\alpha\\), where the subscript \\(t\\) denotes tangential components. Additionally, any point on a rotating object experiences centripetal acceleration directed toward the axis, given by \\(a_c = v_t^2/r = r\\omega^2\\).',
        keyIdeas: [
          'Angular variables (\\(\\theta\\), \\(\\omega\\), \\(\\alpha\\)) mirror linear variables (\\(x\\), \\(v\\), \\(a\\)).',
          'Kinematic equations for constant angular acceleration behave identically to their linear counterparts.',
          'Tangential linear variables are related to angular variables by multiplying by the radius \\(r\\).',
          'Centripetal acceleration (\\(a_c = r\\omega^2\\)) is always present if the object is rotating, even if \\(\\alpha = 0\\).',
        ],
        exampleCode:
          'Example question: A centrifuge rotor accelerates from rest to \\(20.0\\) rad/s in \\(5.0\\) s with constant angular acceleration. What is its angular displacement during this time?\n\n' +
          'Step 1: Identify given information: \\(\\omega_0 = 0\\), \\(\\omega = 20.0\\) rad/s, \\(t = 5.0\\) s.\n' +
          'Step 2: Use the kinematic equation that doesn\'t require acceleration: \\(\\Delta\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t\\).\n' +
          'Step 3: Calculate: \\(\\Delta\\theta = \\frac{1}{2}(0 + 20.0)(5.0) = 50.0\\) radians.',
        exampleExplanation:
          'Because the angular acceleration is constant, you can use the standard rotational kinematic equations to find the displacement without needing to calculate the angular acceleration explicitly first.',
      },
      {
        id: '5-2',
        title: 'Translational vs Rotational Motion',
        summary:
          'Real-world objects often undergo both translational (moving through space) and rotational (spinning) motion simultaneously. The kinetic energy of such an object is the sum of its translational kinetic energy of the center of mass (\\(K_{\\text{trans}} = \\frac{1}{2}Mv_{\\text{cm}}^2\\)) and its rotational kinetic energy about the center of mass (\\(K_{\\text{rot}} = \\frac{1}{2}I_{\\text{cm}}\\omega^2\\)).\n\n' +
          'A critical special case is rolling without slipping. In this condition, the point of contact with the surface is instantaneously at rest. This creates a direct constraint between translational and rotational motion: \\(v_{\\text{cm}} = R\\omega\\) and \\(a_{\\text{cm}} = R\\alpha\\). When solving energy problems for objects rolling down ramps without slipping, static friction does no work (because the contact point doesn\'t move relative to the surface), allowing total mechanical energy to be conserved.',
        keyIdeas: [
          'Total kinetic energy is the sum of translational and rotational kinetic energy: \\(K_{\\text{tot}} = \\frac{1}{2}Mv_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2\\).',
          'Rolling without slipping means \\(v_{\\text{cm}} = R\\omega\\) and \\(a_{\\text{cm}} = R\\alpha\\).',
          'In rolling without slipping, static friction prevents sliding but does no non-conservative work, so mechanical energy is conserved.',
        ],
        exampleCode:
          'Example question: A solid sphere of mass \\(M\\) and radius \\(R\\) (\\(I = \\frac{2}{5}MR^2\\)) rolls without slipping down a hill of height \\(h\\). What is its speed at the bottom?\n\n' +
          'Step 1: Apply conservation of energy: \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2\\).\n' +
          'Step 2: Substitute \\(I\\) and \\(\\omega = v/R\\): \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{2}{5}MR^2)(v/R)^2\\).\n' +
          'Step 3: Simplify: \\(Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{5}Mv^2 = \\frac{7}{10}Mv^2\\).\n' +
          'Step 4: Solve for \\(v\\): \\(v = \\sqrt{\\frac{10}{7}gh}\\).',
        exampleExplanation:
          'By substituting the rolling without slipping constraint (\\(\\omega = v/R\\)) into the rotational kinetic energy term, you can express total kinetic energy purely in terms of translational velocity and solve using conservation of energy.',
      },
      {
        id: '5-3',
        title: 'Torque',
        summary:
          'Torque (\\(\\vec{\\tau}\\)) is the rotational equivalent of force; it measures the effectiveness of a force in producing rotational acceleration. Mathematically, it is defined as the cross product of the position vector from the pivot to the point of force application (\\(\\vec{r}\\)) and the force vector (\\(\\vec{F}\\)): \\(\\vec{\\tau} = \\vec{r} \\times \\vec{F}\\).\n\n' +
          'The magnitude of torque is \\(\\tau = rF\\sin\\theta\\), where \\(\\theta\\) is the angle between \\(\\vec{r}\\) and \\(\\vec{F}\\). Alternatively, it can be calculated using the lever arm (\\(\\tau = r_{\\perp}F\\)), where \\(r_{\\perp}\\) is the perpendicular distance from the pivot to the line of action of the force. The direction of torque is given by the right-hand rule, pointing along the axis of rotation.',
        keyIdeas: [
          'Torque definition: \\(\\vec{\\tau} = \\vec{r} \\times \\vec{F}\\).',
          'Magnitude: \\(\\tau = rF\\sin\\theta\\) or \\(\\tau = r_{\\perp}F\\).',
          'Torque depends on the chosen pivot point or axis of rotation.',
          'Forces applied directly at the pivot, or pointing exactly toward/away from the pivot, produce zero torque.',
        ],
        exampleCode:
          'Example question: A force of \\(50.0\\) N is applied to the end of a \\(0.20\\) m wrench at an angle of \\(30^{\\circ}\\) relative to the handle. What is the magnitude of the torque exerted on the bolt?\n\n' +
          'Step 1: Identify variables: \\(r = 0.20\\) m, \\(F = 50.0\\) N, \\(\\theta = 30^{\\circ}\\).\n' +
          'Step 2: Apply torque formula: \\(\\tau = rF\\sin\\theta\\).\n' +
          'Step 3: Calculate: \\(\\tau = (0.20)(50.0)\\sin(30^{\\circ}) = (10.0)(0.5) = 5.0\\,\\text{N}\\cdot\\text{m}\\).',
        exampleExplanation:
          'Only the component of the force perpendicular to the radius arm (\\(F\\sin\\theta\\)) contributes to generating rotation around the pivot.',
      },
      {
        id: '5-4',
        title: 'Rotational Inertia',
        summary:
          'Rotational inertia, or moment of inertia (\\(I\\)), is the rotational equivalent of mass. It represents an object\'s resistance to changes in its rotational motion. Unlike mass, \\(I\\) depends not only on the total mass of the object but also on how that mass is distributed relative to the axis of rotation. For a system of discrete particles, \\(I = \\Sigma m_i r_i^2\\).\n\n' +
          'For continuous rigid bodies, this becomes an integral: \\(I = \\int r^2 \\,dm\\). In AP Physics C, calculating \\(I\\) via integration often involves relating the mass element \\(dm\\) to a geometric element (like \\(dx\\), \\(dr\\), or \\(dV\\)) using density (\\(\\lambda\\), \\(\\sigma\\), or \\(\\rho\\)). The Parallel Axis Theorem (\\(I = I_{\\text{cm}} + Md^2\\)) is a powerful tool to find the inertia about any axis parallel to an axis through the center of mass, where \\(d\\) is the distance between the two axes.',
        keyIdeas: [
          'Moment of inertia depends on mass and its distribution relative to the rotational axis.',
          'Discrete systems: \\(I = \\Sigma m_i r_i^2\\). Continuous objects: \\(I = \\int r^2 \\,dm\\).',
          'Mass distribution further from the axis of rotation creates a much larger moment of inertia.',
          'Parallel Axis Theorem: \\(I = I_{\\text{cm}} + Md^2\\) simplifies finding \\(I\\) for off-center axes.',
        ],
        exampleCode:
          'Example question: A uniform rod of mass \\(M\\) and length \\(L\\) has a moment of inertia \\(I_{\\text{cm}} = \\frac{1}{12}ML^2\\) about its center. What is its moment of inertia about an axis through its end?\n\n' +
          'Step 1: Identify that the axis at the end is parallel to the axis through the center of mass.\n' +
          'Step 2: Determine the distance \\(d\\) between the two axes. The center to the end is \\(d = L/2\\).\n' +
          'Step 3: Apply the Parallel Axis Theorem: \\(I = I_{\\text{cm}} + Md^2\\).\n' +
          'Step 4: Substitute and solve: \\(I = \\frac{1}{12}ML^2 + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2\\).',
        exampleExplanation:
          'The Parallel Axis Theorem avoids the need to set up a new integral when shifting the axis of rotation, saving time and reducing algebraic errors.',
      },
      {
        id: '5-5',
        title: 'Rotational Equilibrium and Newton\'s Laws',
        summary:
          'For an extended object to be in complete static equilibrium, it must satisfy two conditions simultaneously: the net external force must be zero (\\(\\Sigma\\vec{F} = 0\\), translational equilibrium), and the net external torque must be zero (\\(\\Sigma\\vec{\\tau} = 0\\), rotational equilibrium). \n\n' +
          'Because the object is not rotating, you can choose *any* point as the pivot for calculating torques. A strategic choice of pivot point (usually located at the point of application of an unknown force) will eliminate that unknown force from the torque equation, significantly simplifying the math. When analyzing these problems, the force of gravity on a uniform extended object can be treated as acting entirely at its center of gravity (which coincides with the center of mass in a uniform gravitational field).',
        keyIdeas: [
          'Static equilibrium requires both \\(\\Sigma F_x = 0\\), \\(\\Sigma F_y = 0\\), and \\(\\Sigma\\tau = 0\\).',
          'The pivot point for calculating torques is arbitrary in equilibrium; choose it wisely to eliminate unknowns.',
          'Gravity acts as a single force located at the object\'s center of mass.',
        ],
        exampleCode:
          'Example question: A \\(10.0\\) m long uniform beam weighing \\(200\\) N rests on two supports, one at the left end and one \\(2.0\\) m from the right end. Find the upward force exerted by the left support.\n\n' +
          'Step 1: Choose the right support as the pivot to eliminate its unknown force from the torque equation.\n' +
          'Step 2: Identify torques about the right support. The left support is \\(8.0\\) m away. The center of mass (where gravity acts) is at \\(5.0\\) m, which is \\(3.0\\) m away from the right support.\n' +
          'Step 3: Set \\(\\Sigma\\tau = 0\\): \\(-(F_{\\text{left}})(8.0) + (200)(3.0) = 0\\).\n' +
          'Step 4: Solve for \\(F_{\\text{left}}\\): \\(8.0F_{\\text{left}} = 600 \\implies F_{\\text{left}} = 75.0\\,\\text{N}\\).',
        exampleExplanation:
          'By placing the pivot exactly at the location of the right support, the lever arm for that support becomes zero, removing it from the equation and allowing you to solve directly for the left support\'s force.',
      },
      {
        id: '5-6',
        title: 'Rotational Dynamics',
        summary:
          'Newton\'s Second Law for rotation states that the net external torque on an object determines its angular acceleration: \\(\\Sigma\\vec{\\tau} = I\\vec{\\alpha}\\). This is the rotational counterpart to \\(\\Sigma\\vec{F} = m\\vec{a}\\). For systems involving both translating and rotating objects (like a block pulling a massive pulley via a string), you must write force equations for the translating parts, torque equations for the rotating parts, and link them using kinematic constraints (e.g., \\(a = R\\alpha\\)). Note that the tension in a string on either side of a massive pulley is no longer equal; the difference in tension provides the net torque to accelerate the pulley.\n\n' +
          'This subunit also covers angular momentum, \\(\\vec{L} = \\vec{r} \\times \\vec{p}\\) for a point particle, or \\(L = I\\omega\\) for a rigid rotating body. Just as linear momentum is conserved when \\(\\Sigma\\vec{F} = 0\\), angular momentum is conserved when the net external torque is zero (\\(\\Sigma\\vec{\\tau} = 0\\)). This explains why a figure skater spins faster when pulling their arms inward (decreasing \\(I\\) increases \\(\\omega\\) to keep \\(L\\) constant).',
        keyIdeas: [
          'Newton\'s Second Law for rotation: \\(\\Sigma\\vec{\\tau} = I\\vec{\\alpha}\\).',
          'In coupled systems (e.g., mass and pulley), link linear and angular equations using \\(a = R\\alpha\\).',
          'Tension is not uniform across a massive pulley undergoing angular acceleration.',
          'Angular momentum (\\(L = I\\omega\\)) is conserved if there is no net external torque.',
        ],
        exampleCode:
          'Example question: A block of mass \\(m\\) hangs from a string wrapped around a solid cylinder of mass \\(M\\) and radius \\(R\\) (\\(I = \\frac{1}{2}MR^2\\)). Find the downward acceleration of the block.\n\n' +
          'Step 1: Write linear equation for the block: \\(mg - T = ma\\).\n' +
          'Step 2: Write torque equation for the cylinder: \\(TR = I\\alpha\\).\n' +
          'Step 3: Link acceleration: substitute \\(\\alpha = a/R\\) and \\(I = \\frac{1}{2}MR^2\\) into torque equation: \\(TR = (\\frac{1}{2}MR^2)(a/R) \\implies T = \\frac{1}{2}Ma\\).\n' +
          'Step 4: Substitute \\(T\\) into the block\'s equation: \\(mg - \\frac{1}{2}Ma = ma\\).\n' +
          'Step 5: Solve for \\(a\\): \\(mg = a(m + M/2) \\implies a = \\frac{mg}{m + M/2}\\).',
        exampleExplanation:
          'By treating the block and the cylinder as a coupled system, you use the tension to bridge the linear dynamics of the block and the rotational dynamics of the cylinder, solving the system of equations algebraically.',
      },
    ],
  },
  {
    unitNumber: 6,
    title: 'Rotating Systems: Energy & Momentum',
    subunits: [
      {
        id: '6-1',
        title: 'Rotational Kinetic Energy',
        summary:
          'Rotational kinetic energy (\\(K_{\\text{rot}}\\)) is the kinetic energy an object possesses due to the orbital motion of its constituent particles around an axis. For a rigid body, this is defined as \\(K_{\\text{rot}} = \\frac{1}{2}I\\omega^2\\). This formula establishes a direct mathematical parallel to translational kinetic energy (\\(K_{\\text{trans}} = \\frac{1}{2}mv^2\\)), where moment of inertia (\\(I\\)) replaces mass as the measure of rotational "laziness," and angular velocity (\\(\\omega\\)) replaces linear velocity.\n\n' +
          'In the context of AP Physics C, it is vital to recognize that \\(K_{\\text{rot}}\\) is a scalar quantity, meaning it is not associated with a specific direction and can be added directly to other forms of energy. If a system consists of multiple rotating components (such as two gears or a pulley system), the total rotational energy is the algebraic sum of the individual energies. Because \\(I\\) depends on the square of the distance from the axis, distributing mass further from the center exponentially increases the energy required to reach a specific angular velocity, even if the total mass remains constant.',
        keyIdeas: [
          'Rotational kinetic energy formula: \\(K_{\\text{rot}} = \\frac{1}{2}I\\omega^2\\); \\(I\\) must be calculated relative to the specific axis of rotation.',
          'Energy is a scalar quantity; it is always positive or zero, regardless of the direction of rotation (clockwise vs. counter-clockwise).',
          'Work done by a net torque results in a change in rotational kinetic energy (\\(W_{\\text{rot}} = \\Delta K_{\\text{rot}}\\)).',
          'Objects with larger moments of inertia require more energy to achieve the same \\(\\omega\\) compared to objects with smaller \\(I\\).',
        ],
        exampleCode:
          'Example question: A 2.0 kg uniform disk (\\(I = \\frac{1}{2}MR^2\\)) with radius 0.5 m is spinning at 10 rad/s. A thin hoop of the same mass and radius is spinning at the same speed. Which has more kinetic energy?\n\n' +
          'Step 1: Compare moments of inertia. \\(I_{\\text{disk}} = \\frac{1}{2}MR^2\\), while \\(I_{\\text{hoop}} = MR^2\\).\n' +
          'Step 2: Note that \\(I_{\\text{hoop}} = 2 \\times I_{\\text{disk}}\\).\n' +
          'Step 3: Since \\(K_{\\text{rot}} = \\frac{1}{2}I\\omega^2\\) and \\(\\omega\\) is identical, the hoop has exactly twice the rotational kinetic energy of the disk.',
        exampleExplanation:
          'Even though the masses and speeds are identical, the hoop stores more energy because its mass is distributed at the maximum possible distance from the axis, maximizing its moment of inertia.',
      },
      {
        id: '6-2',
        title: 'Work and Energy in Rotating Systems',
        summary:
          'The Work-Energy Theorem for rotation states that the net work done by external torques equals the change in the system\'s rotational kinetic energy: \\(W_{\\text{net}} = \\int \\tau_{\\text{net}}\\,d\\theta = \\Delta K_{\\text{rot}}\\). For a constant torque, this simplifies to \\(W = \\tau\\Delta\\theta\\). This relationship is the rotational analog of \\(W = Fd\\). It is important to ensure \\(\\Delta\\theta\\) is expressed in radians to maintain consistency with the Joule unit.\n\n' +
          'Rotational power is the rate at which this work is performed: \\(P = dW/dt = \\tau\\omega\\). This is a critical concept for engineering applications, such as calculating the power output of a motor or an engine. When analyzing systems with changing torques, such as a variable force applied to a pulley, the integral form must be used. Additionally, if a force is causing both translation and rotation (like a string pulling a rolling cylinder), the total work done by the force is the sum of the translational and rotational work components.',
        keyIdeas: [
          'Rotational work: \\(W = \\int \\tau\\,d\\theta\\). For constant torque: \\(W = \\tau\\Delta\\theta\\).',
          'The Work-Energy Theorem: \\(W_{\\text{ext}} = \\Delta K_{\\text{trans}} + \\Delta K_{\\text{rot}} + \\Delta U\\).',
          'Instantaneous rotational power: \\(P = \\tau\\omega\\).',
          'Friction can do negative rotational work, converting \\(K_{\\text{rot}}\\) into thermal energy.',
        ],
        exampleCode:
          'Example question: An electric motor provides a constant torque of 5.0 N·m to a flywheel. If the flywheel starts from rest and rotates through 10 full revolutions, what is its final rotational kinetic energy?\n\n' +
          'Step 1: Convert revolutions to radians: \\(\\Delta\\theta = 10 \\times 2\\pi = 20\\pi\\) rad.\n' +
          'Step 2: Calculate work done by torque: \\(W = \\tau\\Delta\\theta = (5.0)(20\\pi) = 100\\pi \\approx 314.2\\) J.\n' +
          'Step 3: By the Work-Energy Theorem, \\(\\Delta K_{\\text{rot}} = W\\). Since it started from rest, \\(K_f = 314.2\\) J.',
        exampleExplanation:
          'This calculation shows how torque applied over an angular displacement directly transfers energy into the rotating body, allowing us to find the final energy state without needing to know the time elapsed or the moment of inertia.',
      },
      {
        id: '6-3',
        title: 'Angular Momentum',
        summary:
          'Angular momentum (\\(\\vec{L}\\)) is the rotational analog of linear momentum and is a fundamental vector quantity describing an object\'s "amount of rotation." For a rigid body rotating about a principal axis, \\(\\vec{L} = I\\vec{\\omega}\\). However, a point particle also possesses angular momentum relative to an origin, defined by the cross product \\(\\vec{L} = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})\\). The magnitude is \\(L = mvr\\sin\\phi\\), where \\(\\phi\\) is the angle between the position and velocity vectors.\n\n' +
          'A key insight for AP Physics C is that a particle moving in a straight line has a constant angular momentum relative to any fixed point not on its path. This is calculated as \\(L = mvr_{\\perp}\\), where \\(r_{\\perp}\\) (the "impact parameter") is the perpendicular distance from the point to the line of motion. The direction of \\(\\vec{L}\\) is determined by the right-hand rule: curl your fingers from \\(\\vec{r}\\) to \\(\\vec{v}\\), and your thumb points in the direction of \\(\\vec{L}\\). Newton\'s Second Law can be rewritten in its most general form as \\(\\Sigma\\vec{\\tau} = d\\vec{L}/dt\\), which states that a net torque is required to change the angular momentum of a system.',
        keyIdeas: [
          'Rigid body definition: \\(L = I\\omega\\). Point particle definition: \\(\\vec{L} = \\vec{r} \\times \\vec{p}\\).',
          'Direction: Use the right-hand rule; \\(\\vec{L}\\) is perpendicular to the plane of motion.',
          'A particle in straight-line motion at constant velocity has constant angular momentum relative to a fixed origin (\\(L = mvr_{\\perp}\\)).',
          'Total angular momentum of a system is the vector sum of the individual angular momenta of its parts.',
        ],
        exampleCode:
          'Example question: A 0.2 kg bird flies at a constant velocity of 5.0 m/s at a constant height of 10.0 m above the ground. What is the magnitude of its angular momentum relative to a person standing directly under the bird\'s path?\n\n' +
          'Step 1: Identify the impact parameter (\\(r_{\\perp}\\)). The bird is always 10.0 m "away" from the line of sight when measuring perpendicularly. So \\(r_{\\perp} = 10.0\\) m.\n' +
          'Step 2: Calculate magnitude: \\(L = mvr_{\\perp} = (0.2)(5.0)(10.0) = 10.0\\,\\text{kg}\\cdot\\text{m}^2/\\text{s}\\).',
        exampleExplanation:
          'Even though the bird is not "orbiting" the person, it possesses angular momentum relative to them because its position vector is changing its angle relative to the person over time.',
      },
      {
        id: '6-4',
        title: 'Conservation of Angular Momentum',
        summary:
          'The Principle of Conservation of Angular Momentum states that if the net external torque acting on a system is zero, the total angular momentum of that system remains constant: \\(\\vec{L}_i = \\vec{L}_f\\). This is one of the most powerful tools in physics because it applies even when internal forces are non-conservative (e.g., in a "sticky" rotational collision) and when the system\'s moment of inertia changes.\n\n' +
          'Classic applications include a spinning skater pulling in their arms: as mass moves closer to the axis, \\(I\\) decreases, necessitating an increase in \\(\\omega\\) to keep the product \\(I\\omega\\) constant. In collisions involving a moving particle striking a pivoted rod, angular momentum is typically conserved about the pivot point because the force exerted by the pivot itself acts at \\(r = 0\\), producing zero torque. It is important to remember that while \\(L\\) is conserved, rotational kinetic energy is often NOT conserved in these interactions due to work done by internal forces or deformation.',
        keyIdeas: [
          'Conservation condition: \\(\\Sigma\\tau_{\\text{ext}} = 0\\).',
          'Mathematical form: \\(I_i\\omega_i = I_f\\omega_f\\) (for rigid bodies) or \\(\\Sigma(mrv\\sin\\phi)_i = \\Sigma(mrv\\sin\\phi)_f\\).',
          'Internal interactions (like a person walking on a rotating platform) cannot change the total \\(L\\) of the system.',
          'Kinetic energy is often lost in rotational collisions, even though angular momentum is perfectly conserved.',
        ],
        exampleCode:
          'Example question: A figure skater with \\(I = 4.0\\,\\text{kg}\\cdot\\text{m}^2\\) spins at 2.0 rad/s. She pulls her arms in, reducing her \\(I\\) to \\(1.6\\,\\text{kg}\\cdot\\text{m}^2\\). What is her new angular velocity and what happens to her kinetic energy?\n\n' +
          'Step 1: Conserve \\(L\\): \\((4.0)(2.0) = (1.6)\\omega_f \\implies \\omega_f = 8.0/1.6 = 5.0\\) rad/s.\n' +
          'Step 2: Initial \\(K = 0.5(4.0)(2.0)^2 = 8.0\\) J.\n' +
          'Step 3: Final \\(K = 0.5(1.6)(5.0)^2 = 20.0\\) J.\n' +
          'Result: Kinetic energy INCREASED because the skater did internal work to pull her arms in.',
        exampleExplanation:
          'Conservation of angular momentum dictates the speed change, but the increase in kinetic energy comes from the biological work performed by the skater\'s muscles against the "centrifugal" effect.',
      },
      {
        id: '6-5',
        title: 'Combined Translational and Rotational Energy',
        summary:
          'Objects that roll without slipping undergo a combination of translation and rotation. The total kinetic energy is the sum of the energy of the center of mass moving through space and the energy of the object spinning around that center: \\(K_{\\text{tot}} = \\frac{1}{2}Mv_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2\\). Under the condition of rolling without slipping, these two motions are coupled by the constraint \\(v_{\\text{cm}} = R\\omega\\).\n\n' +
          'This coupling leads to a fascinating result in energy conservation: when different shapes roll down a ramp, the distribution of their energy depends on their geometric "shape factor" (\\(c\\) in \\(I = cMR^2\\)). A hoop (\\(c = 1\\)) spends half of its energy on rotation, while a solid sphere (\\(c = 0.4\\)) spends much less. Consequently, the sphere will have a higher translational velocity and win the race down the incline. If an object "slips" or "skids," the \\(v = R\\omega\\) constraint is broken, and kinetic friction will do work on the system, meaning mechanical energy is no longer conserved.',
        keyIdeas: [
          'Total KE: \\(K_{\\text{tot}} = \\frac{1}{2}Mv_{\\text{cm}}^2 \\bigl(1 + \\frac{I_{\\text{cm}}}{MR^2}\\bigr)\\).',
          'Rolling without slipping constraint: \\(v = R\\omega\\) and \\(a = R\\alpha\\).',
          'The static friction force responsible for rolling without slipping does no work.',
          'Objects with lower mass-concentration at the edges (smaller \\(I\\)) accelerate faster down inclines.',
        ],
        exampleCode:
          'Example question: A solid cylinder (\\(I = \\frac{1}{2}MR^2\\)) rolls without slipping at 4.0 m/s. What fraction of its total kinetic energy is rotational?\n\n' +
          'Step 1: Write \\(K_{\\text{tot}} = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{1}{2}MR^2)(v/R)^2\\).\n' +
          'Step 2: Simplify: \\(K_{\\text{tot}} = \\frac{1}{2}Mv^2 + \\frac{1}{4}Mv^2 = \\frac{3}{4}Mv^2\\).\n' +
          'Step 3: Ratio: \\(K_{\\text{rot}} / K_{\\text{tot}} = (\\frac{1}{4}Mv^2) / (\\frac{3}{4}Mv^2) = 1/3\\).',
        exampleExplanation:
          'For a solid cylinder, exactly one-third of its total energy is "stored" in its rotation, while the remaining two-thirds is translational energy.',
      },
      {
        id: '6-6',
        title: 'Orbital Motion and Satellites',
        summary:
          'Angular momentum is the cornerstone of analyzing celestial orbits. Because the force of gravity is a "central force" (acting directly along the radial line between the two masses), the torque \\(\\vec{\\tau} = \\vec{r} \\times \\vec{F}_g\\) is zero. This implies that the angular momentum of a planet or satellite is conserved throughout its entire orbit: \\(L = mvr\\sin\\phi = \\text{constant}\\).\n\n' +
          'In an elliptical orbit, the distance \\(r\\) and velocity \\(v\\) vary inversely. At the closest point (perigee/perihelion) and furthest point (apogee/aphelion), the velocity is perfectly perpendicular to the radius (\\(\\sin 90^{\\circ} = 1\\)), leading to the simple relationship \\(v_a r_a = v_p r_p\\). Additionally, total mechanical energy \\(E = K + U_g = \\frac{1}{2}mv^2 - GmM/r\\) is conserved. By combining these two conservation laws (\\(L\\) and \\(E\\)), we can solve for any orbital parameter. This conservation of \\(L\\) also provides the physical proof for Kepler\'s Second Law: the "equal areas in equal times" rule is simply a statement that \\(L/2m\\) (the areal velocity) is constant.',
        keyIdeas: [
          'The torque exerted by gravity on an orbiting body is zero; \\(\\vec{L}\\) is constant.',
          'Angular momentum at extrema: \\(L = m v_1 r_1 = m v_2 r_2\\).',
          'Total energy in orbit: \\(E = \\frac{1}{2}mv^2 - GmM/r\\). For circular orbits, \\(E = -GmM/(2r)\\).',
          'Changes in orbital radius (like an engine burn) change \\(L\\), but once the engine is off, \\(L\\) is conserved again.',
        ],
        exampleCode:
          'Example question: A satellite in a highly elliptical orbit has a speed of 8000 m/s at its perigee (\\(r = 7000\\,\\text{km}\\)). If its apogee is at \\(r = 28{,}000\\,\\text{km}\\), what is its speed there?\n\n' +
          'Step 1: Conserve \\(L\\) at the two points: \\(m v_p r_p = m v_a r_a\\).\n' +
          'Step 2: \\(v_a = v_p (r_p / r_a)\\).\n' +
          'Step 3: \\(v_a = 8000 \\times (7000 / 28{,}000) = 8000 \\times (1/4) = 2000\\,\\text{m/s}\\).',
        exampleExplanation:
          'By using the conservation of angular momentum, we can instantly determine the speed at one point of an orbit if the speed and radius of another point are known, independent of the mass of the central body.',
      },
    ],
  },
  {
    unitNumber: 7,
    title: 'Oscillations',
    subunits: [
      {
        id: '7-1',
        title: 'Simple Harmonic Motion Fundamentals',
        summary:
          'Simple Harmonic Motion (SHM) is a specific type of periodic motion where the restoring force is directly proportional to the displacement from equilibrium and acts in the opposite direction. This relationship is defined by Hooke\'s Law: \\(F_s = -kx\\). Applying Newton\'s Second Law (\\(F = ma\\)) leads to the defining differential equation for SHM: \\(d^2x/dt^2 = -(k/m)x\\). This identifies that acceleration is not constant but is a function of position, always pulling the object back toward the center.\n\n' +
          'The solution to this differential equation is a sinusoidal function of time: \\(x(t) = A\\cos(\\omega t + \\phi)\\), where \\(A\\) is the amplitude (maximum displacement) and \\(\\phi\\) is the phase constant. By taking derivatives, we find the velocity \\(v(t) = -A\\omega\\sin(\\omega t + \\phi)\\) and acceleration \\(a(t) = -A\\omega^2\\cos(\\omega t + \\phi)\\). A critical takeaway for AP Physics C is the relationship for maximum values: \\(v_{\\text{max}} = A\\omega\\) and \\(a_{\\text{max}} = A\\omega^2\\). The angular frequency \\(\\omega\\) represents the rate of oscillation in radians per second and is determined solely by the physical properties of the system (\\(\\omega = \\sqrt{k/m}\\) for a spring-mass system), independent of the amplitude.',
        keyIdeas: [
          'Defining condition for SHM: Restoring force is proportional to displacement (\\(F \\propto -x\\)).',
          'The second-order differential equation \\(d^2x/dt^2 + \\omega^2 x = 0\\) characterizes all SHM systems.',
          'Position, velocity, and acceleration are 90° out of phase with each other (sine vs. cosine).',
          'Maximum acceleration occurs at maximum displacement (turning points), while maximum velocity occurs at equilibrium (\\(x = 0\\)).',
          'Angular frequency \\(\\omega = 2\\pi f = 2\\pi/T\\).',
        ],
        exampleCode:
          'Example question: A 0.5 kg object is attached to a spring with \\(k = 200\\) N/m. It is pulled 0.1 m from equilibrium and released. Find the maximum acceleration and the velocity as it passes the equilibrium point.\n\n' +
          'Step 1: Calculate angular frequency: \\(\\omega = \\sqrt{k/m} = \\sqrt{200/0.5} = \\sqrt{400} = 20\\) rad/s.\n' +
          'Step 2: Identify amplitude \\(A = 0.1\\) m.\n' +
          'Step 3: Calculate \\(a_{\\text{max}} = A\\omega^2 = (0.1)(20)^2 = (0.1)(400) = 40\\,\\text{m/s}^2\\).\n' +
          'Step 4: Calculate \\(v_{\\text{max}}\\) (velocity at equilibrium): \\(v_{\\text{max}} = A\\omega = (0.1)(20) = 2.0\\,\\text{m/s}\\).',
        exampleExplanation:
          'By first determining the angular frequency from the system constants (\\(k\\) and \\(m\\)), you can derive all kinematic limits (max \\(v\\) and \\(a\\)) using the amplitude of the oscillation.',
      },
      {
        id: '7-2',
        title: 'Energy, Frequency, and Period of SHM',
        summary:
          'In an ideal SHM system, mechanical energy is conserved as it continuously transforms between kinetic energy (\\(K = \\frac{1}{2}mv^2\\)) and potential energy (\\(U = \\frac{1}{2}kx^2\\)). The total energy \\(E_{\\text{tot}}\\) is constant and proportional to the square of the amplitude: \\(E_{\\text{tot}} = \\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2\\). At any intermediate position \\(x\\), the energy equation is \\(\\frac{1}{2}kA^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2\\). This energy-based approach is often the most efficient way to find the velocity of an oscillator at a specific displacement.\n\n' +
          'The period (\\(T\\)) is the time required for one full cycle, and frequency (\\(f\\)) is the number of cycles per unit time. For a mass-spring system, \\(T = 2\\pi\\sqrt{m/k}\\). A fundamental property of SHM is that the period and frequency are independent of the amplitude. Whether you pull a spring back 1 cm or 10 cm, the time it takes to complete one oscillation remains the same (as long as it stays within the elastic limit). This is because a larger displacement results in a larger restoring force and thus a higher average speed, which perfectly compensates for the longer distance traveled.',
        keyIdeas: [
          'Total energy is constant: \\(E = \\frac{1}{2}kA^2\\). Energy is proportional to \\(A^2\\).',
          'At \\(x = A\\) and \\(x = -A\\), energy is 100% potential. At \\(x = 0\\), energy is 100% kinetic.',
          'Period for spring-mass: \\(T = 2\\pi\\sqrt{m/k}\\).',
          'Period is independent of amplitude (isochronism).',
          'Solving for velocity at any \\(x\\): \\(v = \\omega\\sqrt{A^2 - x^2}\\).',
        ],
        exampleCode:
          'Example question: A spring-mass system has a total energy of 4.0 J. If the amplitude is doubled, what is the new total energy? If the mass is quadrupled, what happens to the period?\n\n' +
          'Step 1 (Energy): Since \\(E \\propto A^2\\), doubling \\(A\\) increases energy by a factor of \\(2^2 = 4\\). New energy = 16.0 J.\n' +
          'Step 2 (Period): Since \\(T = 2\\pi\\sqrt{m/k}\\), if \\(m\\) becomes \\(4m\\), the period becomes \\(\\sqrt{4}\\) times larger. New period = \\(2T\\).',
        exampleExplanation:
          'Understanding the proportionalities within the energy and period formulas allows for quick conceptual analysis without needing specific numerical values for \\(k\\) or \\(m\\).',
      },
      {
        id: '7-3',
        title: 'Pendulums and Real Oscillating Systems',
        summary:
          'Pendulums provide a real-world application of SHM, provided the "small angle approximation" (\\(\\sin\\theta \\approx \\theta\\)) holds. A simple pendulum (mass \\(m\\) on string \\(L\\)) has a restoring force provided by the tangential component of gravity (\\(F = -mg\\sin\\theta\\)). For small angles, this behaves like SHM with a period \\(T = 2\\pi\\sqrt{L/g}\\). Note that the mass of the bob does not affect the period of a simple pendulum.\n\n' +
          'A physical pendulum is any rigid body that oscillates about a fixed pivot. Its period is derived from the rotational analog of SHM: \\(\\Sigma\\tau = I\\alpha\\). The restoring torque is \\(\\tau = -Mgd\\sin\\theta\\), where \\(d\\) is the distance from the pivot to the center of mass. This leads to the period \\(T = 2\\pi\\sqrt{I/(Mgd)}\\). This general formula reduces to the simple pendulum formula if you treat the object as a point mass (\\(I = md^2\\)). In real systems, damping forces (like air resistance or friction) eventually dissipate the mechanical energy, causing the amplitude to decay over time, though the period usually remains relatively constant for light damping.',
        keyIdeas: [
          'Simple pendulum period: \\(T = 2\\pi\\sqrt{L/g}\\) (independent of mass and amplitude).',
          'Physical pendulum period: \\(T = 2\\pi\\sqrt{I/(Mgd)}\\). Use the Parallel Axis Theorem if needed to find \\(I\\).',
          'Small angle approximation (\\(\\theta < 15^{\\circ}\\)) is required for pendulum motion to be considered true SHM.',
          'The "effective length" of a physical pendulum is \\(L_{\\text{eff}} = I/(Md)\\).',
          'Damped oscillations involve non-conservative forces that decrease mechanical energy over time.',
        ],
        exampleCode:
          'Example question: A uniform thin rod of length \\(L\\) and mass \\(M\\) pivots about one end. What is the period of its small-angle oscillations? (\\(I_{\\text{end}} = \\frac{1}{3}ML^2\\))\n\n' +
          'Step 1: Identify distance from pivot to center of mass: \\(d = L/2\\).\n' +
          'Step 2: Use physical pendulum formula: \\(T = 2\\pi\\sqrt{I/(Mgd)}\\).\n' +
          'Step 3: Substitute \\(I = \\frac{1}{3}ML^2\\) and \\(d = L/2\\): \\(T = 2\\pi\\sqrt{(\\frac{1}{3}ML^2) / (MgL/2)}\\).\n' +
          'Step 4: Simplify: \\(T = 2\\pi\\sqrt{2L/(3g)}\\).',
        exampleExplanation:
          'By identifying the center of mass and the moment of inertia about the pivot, you can apply the general physical pendulum equation to any rigid object to find its characteristic oscillation time.',
      },
    ],
  },
]

export const AP_PHYSICS_C_MECHANICS_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics C: Mechanics',
  units: AP_PHYSICS_C_MECHANICS_UNITS,
  features: { latex: true, codeExamples: false },
}


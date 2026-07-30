import type { SubjectUnitBank } from './types'

export const BANK_AP_PHYSICS_1: SubjectUnitBank = {
  "label": "AP Physics 1",
  "slug": "ap-physics-1",
  "units": [
    {
      "unitNumber": 1,
      "title": "Kinematics",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "Velocity differs from speed in that velocity is",
          "options": [
            "a vector with magnitude and direction",
            "always larger",
            "a scalar",
            "the same as acceleration"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity is a vector (speed plus direction), while speed is a scalar (magnitude only).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "Acceleration is defined as the rate of change of",
          "options": [
            "velocity",
            "position",
            "force",
            "mass"
          ],
          "correctAnswer": 0,
          "explanation": "Acceleration is the rate of change of velocity with time, \\(a = \\frac{\\Delta v}{\\Delta t}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "An object starting from rest with acceleration \\(3\\ \\text{m/s}^2\\) has velocity after 4 s of",
          "options": [
            "\\(12\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)",
            "\\(7\\ \\text{m/s}\\)",
            "\\(0.75\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = v_0 + at = 0 + (3)(4) = 12\\ \\text{m/s}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "On a position-time graph, the slope gives the",
          "options": [
            "velocity",
            "acceleration",
            "displacement",
            "force"
          ],
          "correctAnswer": 0,
          "explanation": "The slope of a position-time graph is the velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "The acceleration of a freely falling object (ignoring air resistance) is",
          "options": [
            "about \\(9.8\\ \\text{m/s}^2\\) downward",
            "zero",
            "upward",
            "increasing"
          ],
          "correctAnswer": 0,
          "explanation": "Near Earth's surface, free fall has \\(g \\approx 9.8\\ \\text{m/s}^2\\) directed downward.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "On a velocity-time graph, the area under the curve represents",
          "options": [
            "displacement",
            "acceleration",
            "force",
            "speed"
          ],
          "correctAnswer": 0,
          "explanation": "The area under a velocity-time graph gives displacement.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "For projectile motion with no air resistance, the horizontal velocity is",
          "options": [
            "constant",
            "increasing",
            "decreasing",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "With no horizontal force, the horizontal velocity of a projectile stays constant.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "A ball thrown straight up has, at its highest point, a velocity of",
          "options": [
            "zero",
            "maximum",
            "9.8 m/s",
            "its initial value"
          ],
          "correctAnswer": 0,
          "explanation": "At the top of its path, the ball's velocity is momentarily zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "On a velocity-time graph, the slope represents",
          "options": [
            "acceleration",
            "displacement",
            "position",
            "force"
          ],
          "correctAnswer": 0,
          "explanation": "The slope of a velocity-time graph is the acceleration.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Displacement is",
          "options": [
            "the change in position (a vector)",
            "the total path length",
            "always positive",
            "the same as distance"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement is the vector change in position, which can differ from the total distance traveled.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "A car decelerates from \\(30\\ \\text{m/s}\\) to rest in \\(6\\ \\text{s}\\). Its acceleration is",
          "options": [
            "\\(-5\\ \\text{m/s}^2\\)",
            "\\(5\\ \\text{m/s}^2\\)",
            "\\(-30\\ \\text{m/s}^2\\)",
            "\\(-180\\ \\text{m/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(a = \\frac{0 - 30}{6} = -5\\ \\text{m/s}^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "An object dropped from rest falls how far in 2 s? (Use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(20\\ \\text{m}\\)",
            "\\(10\\ \\text{m}\\)",
            "\\(40\\ \\text{m}\\)",
            "\\(5\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(d = \\tfrac{1}{2}gt^2 = \\tfrac{1}{2}(10)(2)^2 = 20\\ \\text{m}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "A projectile launched at angle \\(\\theta\\) with speed \\(v_0\\) has initial vertical velocity",
          "options": [
            "\\(v_0\\sin\\theta\\)",
            "\\(v_0\\cos\\theta\\)",
            "\\(v_0\\)",
            "\\(v_0\\tan\\theta\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The vertical component of the launch velocity is \\(v_{0y} = v_0\\sin\\theta\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "Using \\(v^2 = v_0^2 + 2ad\\), an object from rest accelerating at \\(2\\ \\text{m/s}^2\\) over \\(9\\ \\text{m}\\) reaches speed",
          "options": [
            "\\(6\\ \\text{m/s}\\)",
            "\\(18\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)",
            "\\(36\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v^2 = 0 + 2(2)(9) = 36\\), so \\(v = 6\\ \\text{m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "A ball is thrown horizontally off a cliff. Its vertical and horizontal motions are",
          "options": [
            "independent of each other",
            "identical",
            "opposite",
            "dependent on each other"
          ],
          "correctAnswer": 0,
          "explanation": "In projectile motion, the horizontal and vertical components are independent; gravity affects only the vertical motion.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "An object thrown upward at \\(20\\ \\text{m/s}\\) reaches maximum height in (use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(2\\ \\text{s}\\)",
            "\\(4\\ \\text{s}\\)",
            "\\(1\\ \\text{s}\\)",
            "\\(20\\ \\text{s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Time to peak = \\(v_0/g = 20/10 = 2\\ \\text{s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "A negative slope on a position-time graph indicates",
          "options": [
            "motion in the negative direction",
            "acceleration",
            "no motion",
            "positive velocity"
          ],
          "correctAnswer": 0,
          "explanation": "A negative slope means position is decreasing, so the object moves in the negative direction.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "When an object's velocity and acceleration point in opposite directions, the object is",
          "options": [
            "slowing down",
            "speeding up",
            "at rest",
            "moving at constant velocity"
          ],
          "correctAnswer": 0,
          "explanation": "If acceleration opposes velocity, the object decelerates (slows down).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "Two balls are dropped, one from twice the height of the other. The ratio of their impact speeds is",
          "options": [
            "\\(\\sqrt{2} : 1\\)",
            "\\(2 : 1\\)",
            "\\(4 : 1\\)",
            "\\(1 : 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(v = \\sqrt{2gh}\\), \\(v \\propto \\sqrt{h}\\); doubling h multiplies speed by \\(\\sqrt{2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "For a projectile over level ground, maximum range occurs at a launch angle of",
          "options": [
            "\\(45°\\)",
            "\\(30°\\)",
            "\\(60°\\)",
            "\\(90°\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Range is maximized at \\(45°\\), where \\(\\sin(2\\theta) = 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "A projectile is launched at \\(30°\\) with speed \\(20\\ \\text{m/s}\\). Its maximum height is (use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(5\\ \\text{m}\\)",
            "\\(10\\ \\text{m}\\)",
            "\\(20\\ \\text{m}\\)",
            "\\(2.5\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v_{0y} = 20\\sin30° = 10\\); max height \\(= \\frac{v_{0y}^2}{2g} = \\frac{100}{20} = 5\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "A ball thrown horizontally at \\(15\\ \\text{m/s}\\) from a \\(20\\ \\text{m}\\) cliff lands how far away? (Use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(30\\ \\text{m}\\)",
            "\\(15\\ \\text{m}\\)",
            "\\(45\\ \\text{m}\\)",
            "\\(20\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Fall time: \\(t = \\sqrt{2h/g} = \\sqrt{4} = 2\\ \\text{s}\\). Range \\(= v_x t = 15 \\times 2 = 30\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "Two projectiles launched at \\(30°\\) and \\(60°\\) with the same speed have",
          "options": [
            "the same range",
            "the same maximum height",
            "the same flight time",
            "different ranges"
          ],
          "correctAnswer": 0,
          "explanation": "Complementary angles produce the same range because \\(\\sin(2\\theta)\\) is equal for \\(30°\\) and \\(60°\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "A ball thrown upward returns to its launch point. Compared to the launch, its speed at return is",
          "options": [
            "equal in magnitude, opposite in direction",
            "greater",
            "less",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "By symmetry (no air resistance), the ball returns with the same speed it was launched, but moving downward.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "On a curved position-time graph, the instantaneous velocity at a point is found from",
          "options": [
            "the slope of the tangent line at that point",
            "the y-value",
            "the area",
            "the average slope"
          ],
          "correctAnswer": 0,
          "explanation": "Instantaneous velocity is the slope of the tangent to the position-time curve at that instant.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "A car travels 100 m in the first 10 s and 300 m in the next 10 s. Its average velocity over the full 20 s is",
          "options": [
            "\\(20\\ \\text{m/s}\\)",
            "\\(10\\ \\text{m/s}\\)",
            "\\(30\\ \\text{m/s}\\)",
            "\\(40\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Total displacement \\(= 400\\ \\text{m}\\) over \\(20\\ \\text{s}\\): average velocity \\(= 400/20 = 20\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "An object in free fall passes a window of height \\(h\\). If it enters faster, the time to cross the window is",
          "options": [
            "shorter",
            "longer",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A faster-moving object covers the same window height in less time, so the crossing time is shorter.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "At the top of a projectile's trajectory, its velocity and acceleration are",
          "options": [
            "velocity horizontal, acceleration downward",
            "both zero",
            "both horizontal",
            "both downward"
          ],
          "correctAnswer": 0,
          "explanation": "At the peak, vertical velocity is zero (so velocity is purely horizontal), but acceleration remains \\(g\\) downward throughout.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A velocity-time graph is a straight line from \\((0, 2\\ \\text{m/s})\\) to \\((4\\ \\text{s}, 10\\ \\text{m/s})\\). The displacement is",
          "options": [
            "\\(24\\ \\text{m}\\)",
            "\\(48\\ \\text{m}\\)",
            "\\(12\\ \\text{m}\\)",
            "\\(40\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Area under the line (trapezoid): \\(\\tfrac{1}{2}(2 + 10)(4) = 24\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "Why do two objects of different mass dropped in a vacuum hit the ground at the same time?",
          "options": [
            "Gravitational acceleration is independent of mass",
            "heavier objects fall faster",
            "lighter objects fall faster",
            "air resistance is equal"
          ],
          "correctAnswer": 0,
          "explanation": "In a vacuum, all objects fall with the same acceleration g regardless of mass, so they land simultaneously.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Force and Translational Dynamics",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "Newton's second law is",
          "options": [
            "\\(F_{net} = ma\\)",
            "\\(F = mv\\)",
            "\\(F = \\tfrac{1}{2}mv^2\\)",
            "\\(F = mgh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Newton's second law: net force equals mass times acceleration, \\(F_{net} = ma\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "Newton's first law (inertia) states that an object at rest",
          "options": [
            "stays at rest unless acted on by a net force",
            "always moves",
            "accelerates",
            "loses mass"
          ],
          "correctAnswer": 0,
          "explanation": "An object at rest remains at rest, and one in motion stays in motion, unless a net external force acts.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "Newton's third law states that forces come in",
          "options": [
            "equal and opposite pairs",
            "single forces",
            "triples",
            "unequal pairs"
          ],
          "correctAnswer": 0,
          "explanation": "For every action force there is an equal and opposite reaction force on the other object.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "The weight of an object is",
          "options": [
            "\\(mg\\)",
            "\\(ma\\)",
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(m/g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Weight is the gravitational force on an object, \\(W = mg\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "The normal force is directed",
          "options": [
            "perpendicular to the surface",
            "along the surface",
            "downward always",
            "toward the center of Earth"
          ],
          "correctAnswer": 0,
          "explanation": "The normal force is perpendicular to the contact surface.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "Kinetic friction is given by",
          "options": [
            "\\(f_k = \\mu_k N\\)",
            "\\(f_k = mg\\)",
            "\\(f_k = ma\\)",
            "\\(f_k = N/\\mu_k\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic friction is \\(f_k = \\mu_k N\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "When the net force on an object is zero, the object",
          "options": [
            "moves at constant velocity or stays at rest",
            "accelerates",
            "speeds up",
            "stops immediately"
          ],
          "correctAnswer": 0,
          "explanation": "Zero net force means zero acceleration, so the object is in equilibrium.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "The centripetal force for circular motion points",
          "options": [
            "toward the center",
            "away from the center",
            "tangent to the circle",
            "in the direction of motion"
          ],
          "correctAnswer": 0,
          "explanation": "Circular motion requires a centripetal (center-directed) net force.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "A free-body diagram shows",
          "options": [
            "all forces on a single object",
            "the object's path",
            "its velocity",
            "its energy"
          ],
          "correctAnswer": 0,
          "explanation": "A free-body diagram represents all the external forces acting on a single object.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "The unit of force is the",
          "options": [
            "newton",
            "joule",
            "watt",
            "kilogram"
          ],
          "correctAnswer": 0,
          "explanation": "Force is measured in newtons (N), \\(1\\ \\text{N} = 1\\ \\text{kg·m/s}^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "A \\(4\\ \\text{kg}\\) object experiences a net force of \\(12\\ \\text{N}\\). Its acceleration is",
          "options": [
            "\\(3\\ \\text{m/s}^2\\)",
            "\\(48\\ \\text{m/s}^2\\)",
            "\\(0.33\\ \\text{m/s}^2\\)",
            "\\(16\\ \\text{m/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(a = F/m = 12/4 = 3\\ \\text{m/s}^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "A block on a level surface (\\(\\mu_k = 0.3\\), weight \\(20\\ \\text{N}\\)) experiences kinetic friction of",
          "options": [
            "\\(6\\ \\text{N}\\)",
            "\\(20\\ \\text{N}\\)",
            "\\(0.3\\ \\text{N}\\)",
            "\\(60\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "On a level surface, \\(N = 20\\ \\text{N}\\), so \\(f_k = \\mu_k N = 0.3(20) = 6\\ \\text{N}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "On a frictionless incline of angle \\(\\theta\\), an object's acceleration is",
          "options": [
            "\\(g\\sin\\theta\\)",
            "\\(g\\cos\\theta\\)",
            "\\(g\\tan\\theta\\)",
            "\\(g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The acceleration down a frictionless incline is \\(a = g\\sin\\theta\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "An object moves in a circle of radius \\(r\\) at speed \\(v\\). Its centripetal acceleration is",
          "options": [
            "\\(v^2/r\\)",
            "\\(v/r\\)",
            "\\(vr\\)",
            "\\(r/v^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Centripetal acceleration is \\(a_c = v^2/r\\), directed toward the center.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "When you sit in a chair, the reaction force to your weight pressing down on the chair is",
          "options": [
            "your body pulling up on the Earth (or the chair pushing up on you, as the pair to a different force)",
            "the chair pushing up on you",
            "gravity",
            "friction"
          ],
          "correctAnswer": 0,
          "explanation": "Newton's third law pairs act on different objects: your weight is Earth pulling you down, whose pair is you pulling Earth up. The chair's upward push on you is a separate pair with your downward push on the chair.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "A \\(1500\\ \\text{kg}\\) car accelerates at \\(2\\ \\text{m/s}^2\\). The net force is",
          "options": [
            "\\(3000\\ \\text{N}\\)",
            "\\(750\\ \\text{N}\\)",
            "\\(1500\\ \\text{N}\\)",
            "\\(15000\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(F = ma = 1500 \\times 2 = 3000\\ \\text{N}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "A car rounds a flat curve. The force providing the centripetal acceleration is",
          "options": [
            "friction between tires and road",
            "gravity",
            "the normal force",
            "air resistance"
          ],
          "correctAnswer": 0,
          "explanation": "On a flat curve, static friction between the tires and road supplies the centripetal force.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "For a stationary block on an incline, static friction",
          "options": [
            "balances the gravity component along the incline",
            "is zero",
            "points down the incline",
            "exceeds the weight"
          ],
          "correctAnswer": 0,
          "explanation": "Static friction points up the incline and balances \\(mg\\sin\\theta\\), keeping the block in equilibrium.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "In an elevator accelerating upward, the apparent weight of a passenger",
          "options": [
            "increases",
            "decreases",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "Upward acceleration requires a larger normal force, so the passenger feels heavier (greater apparent weight).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "An object in free fall (only gravity acting) experiences a normal force of",
          "options": [
            "zero",
            "mg",
            "2mg",
            "its weight"
          ],
          "correctAnswer": 0,
          "explanation": "In free fall there is no contact surface, so the normal force is zero and the object feels 'weightless.'",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "A block on an incline of angle \\(\\theta\\) with kinetic friction \\(\\mu_k\\) slides down with acceleration",
          "options": [
            "\\(g(\\sin\\theta - \\mu_k\\cos\\theta)\\)",
            "\\(g\\sin\\theta\\)",
            "\\(g\\mu_k\\cos\\theta\\)",
            "\\(g(\\sin\\theta + \\mu_k\\cos\\theta)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Along the incline: \\(a = g\\sin\\theta - \\mu_k g\\cos\\theta = g(\\sin\\theta - \\mu_k\\cos\\theta)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "Two blocks (\\(3\\ \\text{kg}\\) and \\(2\\ \\text{kg}\\)) connected by a string hang over a frictionless pulley. The acceleration is (use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(2\\ \\text{m/s}^2\\)",
            "\\(5\\ \\text{m/s}^2\\)",
            "\\(10\\ \\text{m/s}^2\\)",
            "\\(1\\ \\text{m/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(a = \\frac{(m_1 - m_2)g}{m_1 + m_2} = \\frac{(1)(10)}{5} = 2\\ \\text{m/s}^2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "A car rounds a flat curve of radius \\(r\\). The maximum speed without skidding is",
          "options": [
            "\\(\\sqrt{\\mu_s g r}\\)",
            "\\(\\mu_s g r\\)",
            "\\(\\sqrt{g/r}\\)",
            "\\(\\mu_s r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Static friction provides centripetal force: \\(\\mu_s mg = mv^2/r\\), so \\(v_{max} = \\sqrt{\\mu_s g r}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "At the top of a vertical circular loop, the minimum speed for an object to maintain contact is",
          "options": [
            "\\(\\sqrt{gr}\\)",
            "\\(\\sqrt{2gr}\\)",
            "\\(gr\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "At minimum speed, gravity alone provides the centripetal force: \\(mg = mv^2/r\\), so \\(v = \\sqrt{gr}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "A person in an elevator accelerating downward at \\(2\\ \\text{m/s}^2\\) has apparent weight (mass \\(60\\ \\text{kg}\\), \\(g = 10\\)) of",
          "options": [
            "\\(480\\ \\text{N}\\)",
            "\\(600\\ \\text{N}\\)",
            "\\(720\\ \\text{N}\\)",
            "\\(120\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(N = m(g - a) = 60(10 - 2) = 480\\ \\text{N}\\); downward acceleration reduces apparent weight.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "Why do Newton's third-law force pairs never cancel each other out?",
          "options": [
            "They act on different objects",
            "they are unequal",
            "they act in the same direction",
            "they are not real forces"
          ],
          "correctAnswer": 0,
          "explanation": "Third-law pairs act on two different objects, so they cannot cancel; canceling forces must act on the same object.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "A block is pushed with a force at an angle below the horizontal across a floor. Compared to a horizontal push of the same magnitude, the friction force is",
          "options": [
            "greater, because the normal force increases",
            "smaller",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A downward-angled push increases the normal force (\\(N = mg + F\\sin\\theta\\)), increasing friction.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "A ball on a string is swung in a horizontal circle. The horizontal component of the tension provides",
          "options": [
            "the centripetal force",
            "the weight balance",
            "friction",
            "zero force"
          ],
          "correctAnswer": 0,
          "explanation": "In a conical pendulum, the horizontal component of tension supplies the centripetal force, while the vertical component balances gravity.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "Two blocks in contact are pushed by a force F. The contact force between them equals the force needed to accelerate",
          "options": [
            "the second (pushed-upon) block alone",
            "both blocks",
            "the first block",
            "neither block"
          ],
          "correctAnswer": 0,
          "explanation": "The contact force between the blocks equals the mass of the second block times the shared acceleration—the net force needed to accelerate just that block.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "An object moves in a horizontal circle at constant speed. Its acceleration is",
          "options": [
            "nonzero, directed toward the center",
            "zero",
            "tangent to the circle",
            "in the direction of motion"
          ],
          "correctAnswer": 0,
          "explanation": "Even at constant speed, the direction of velocity changes, so there is a nonzero centripetal acceleration directed toward the center.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Work, Energy, and Power",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "Work done by a constant force is",
          "options": [
            "\\(W = Fd\\cos\\theta\\)",
            "\\(W = ma\\)",
            "\\(W = mv\\)",
            "\\(W = \\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Work is \\(W = Fd\\cos\\theta\\), the force times displacement times the cosine of the angle between them.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "Kinetic energy is",
          "options": [
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(mgh\\)",
            "\\(Fd\\)",
            "\\(mv\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic energy is \\(KE = \\tfrac{1}{2}mv^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "Gravitational potential energy near Earth's surface is",
          "options": [
            "\\(mgh\\)",
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(Fd\\)",
            "\\(ma\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Gravitational PE is \\(PE = mgh\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "The work-energy theorem states net work equals",
          "options": [
            "the change in kinetic energy",
            "the potential energy",
            "the momentum",
            "the force"
          ],
          "correctAnswer": 0,
          "explanation": "The work-energy theorem: \\(W_{net} = \\Delta KE\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "Power is",
          "options": [
            "the rate of doing work",
            "force times distance",
            "energy squared",
            "mass times velocity"
          ],
          "correctAnswer": 0,
          "explanation": "Power is the rate of energy transfer, \\(P = W/t = Fv\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "The SI unit of energy is the",
          "options": [
            "joule",
            "newton",
            "watt",
            "pascal"
          ],
          "correctAnswer": 0,
          "explanation": "Energy is measured in joules (J).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "When only conservative forces act, mechanical energy is",
          "options": [
            "conserved",
            "increasing",
            "decreasing",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "With only conservative forces, total mechanical energy (KE + PE) is conserved.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "Elastic potential energy in a spring is",
          "options": [
            "\\(\\tfrac{1}{2}kx^2\\)",
            "\\(kx\\)",
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(mgh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A spring stretched by x stores \\(PE = \\tfrac{1}{2}kx^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "The SI unit of power is the",
          "options": [
            "watt",
            "joule",
            "newton",
            "volt"
          ],
          "correctAnswer": 0,
          "explanation": "Power is measured in watts (W), \\(1\\ \\text{W} = 1\\ \\text{J/s}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "A force perpendicular to displacement does",
          "options": [
            "zero work",
            "maximum work",
            "negative work",
            "work equal to Fd"
          ],
          "correctAnswer": 0,
          "explanation": "When force is perpendicular to displacement, \\(\\cos90° = 0\\), so the work is zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "A \\(3\\ \\text{kg}\\) object moving at \\(4\\ \\text{m/s}\\) has kinetic energy",
          "options": [
            "\\(24\\ \\text{J}\\)",
            "\\(12\\ \\text{J}\\)",
            "\\(48\\ \\text{J}\\)",
            "\\(6\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE = \\tfrac{1}{2}(3)(4)^2 = 24\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "An object falls from rest through height \\(h\\). Its speed just before impact is",
          "options": [
            "\\(\\sqrt{2gh}\\)",
            "\\(gh\\)",
            "\\(2gh\\)",
            "\\(\\sqrt{gh}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, \\(mgh = \\tfrac{1}{2}mv^2\\), so \\(v = \\sqrt{2gh}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "A motor lifts a \\(200\\ \\text{N}\\) load at \\(3\\ \\text{m/s}\\). Its power output is",
          "options": [
            "\\(600\\ \\text{W}\\)",
            "\\(200\\ \\text{W}\\)",
            "\\(67\\ \\text{W}\\)",
            "\\(3\\ \\text{W}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(P = Fv = 200 \\times 3 = 600\\ \\text{W}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "Work done by friction on a sliding object is",
          "options": [
            "negative, dissipating mechanical energy",
            "positive",
            "zero",
            "conservative"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic friction opposes motion and does negative work, converting mechanical energy to heat.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "A spring (\\(k = 400\\ \\text{N/m}\\)) is compressed \\(0.1\\ \\text{m}\\). Its stored energy is",
          "options": [
            "\\(2\\ \\text{J}\\)",
            "\\(40\\ \\text{J}\\)",
            "\\(20\\ \\text{J}\\)",
            "\\(0.4\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(PE = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(400)(0.1)^2 = 2\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "A \\(10\\ \\text{N}\\) force pushes an object \\(4\\ \\text{m}\\) at \\(60°\\) to the displacement. The work done is",
          "options": [
            "\\(20\\ \\text{J}\\)",
            "\\(40\\ \\text{J}\\)",
            "\\(35\\ \\text{J}\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(W = Fd\\cos60° = 10 \\times 4 \\times 0.5 = 20\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "At the bottom of a swing, a pendulum has its maximum",
          "options": [
            "kinetic energy",
            "potential energy",
            "height",
            "period"
          ],
          "correctAnswer": 0,
          "explanation": "At the lowest point, all the potential energy has converted to kinetic energy, so KE is maximum.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "Two objects have the same kinetic energy, but object A has twice the mass of object B. The ratio of their speeds \\(v_A : v_B\\) is",
          "options": [
            "\\(1 : \\sqrt{2}\\)",
            "\\(2 : 1\\)",
            "\\(1 : 2\\)",
            "\\(\\sqrt{2} : 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Equal KE: \\(\\tfrac{1}{2}(2m)v_A^2 = \\tfrac{1}{2}m v_B^2\\), so \\(v_A/v_B = 1/\\sqrt{2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "If a car's speed doubles, its kinetic energy",
          "options": [
            "quadruples",
            "doubles",
            "halves",
            "stays the same"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(KE \\propto v^2\\), doubling the speed multiplies KE by 4.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "A ball rolls down a frictionless ramp. Its speed at the bottom depends on",
          "options": [
            "only the height dropped",
            "the ramp length",
            "the ramp angle",
            "the mass"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, \\(v = \\sqrt{2gh}\\) depends only on the height dropped, not the path.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "A block slides down a frictionless ramp of height \\(h\\), then across a rough floor (\\(\\mu_k\\)). It stops after distance",
          "options": [
            "\\(d = \\frac{h}{\\mu_k}\\)",
            "\\(d = \\mu_k h\\)",
            "\\(d = h\\)",
            "\\(d = \\frac{\\mu_k}{h}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Energy: \\(mgh = \\mu_k mg\\,d\\), so \\(d = h/\\mu_k\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "A pendulum released from a height \\(h\\) above its lowest point reaches maximum speed at the bottom of",
          "options": [
            "\\(\\sqrt{2gh}\\)",
            "\\(\\sqrt{gh}\\)",
            "\\(2gh\\)",
            "\\(gh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Energy conservation gives \\(v = \\sqrt{2gh}\\) at the bottom.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "A block is launched by a spring (constant \\(k\\), compression \\(x\\)) on a frictionless surface. Its launch speed is",
          "options": [
            "\\(x\\sqrt{k/m}\\)",
            "\\(\\sqrt{kx}\\)",
            "\\(kx/m\\)",
            "\\(\\sqrt{2kx}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\tfrac{1}{2}kx^2 = \\tfrac{1}{2}mv^2\\), so \\(v = x\\sqrt{k/m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "A \\(1000\\ \\text{kg}\\) car climbs a hill of height \\(20\\ \\text{m}\\) in \\(10\\ \\text{s}\\) at constant speed. The power needed against gravity is (use \\(g = 10\\))",
          "options": [
            "\\(20{,}000\\ \\text{W}\\)",
            "\\(2000\\ \\text{W}\\)",
            "\\(200{,}000\\ \\text{W}\\)",
            "\\(1000\\ \\text{W}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Work against gravity \\(= mgh = 1000 \\times 10 \\times 20 = 200{,}000\\ \\text{J}\\); power \\(= 200{,}000/10 = 20{,}000\\ \\text{W}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "A ball is thrown up with kinetic energy \\(KE_0\\). At half its maximum height (no air resistance), its kinetic energy is",
          "options": [
            "\\(KE_0/2\\)",
            "\\(KE_0\\)",
            "\\(KE_0/4\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "At maximum height all \\(KE_0\\) is PE. At half that height, half is PE, so \\(KE = KE_0/2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "A roller coaster car starts at rest at height \\(h\\) and reaches a second hill of height \\(h/2\\) (frictionless). Its speed there is",
          "options": [
            "\\(\\sqrt{gh}\\)",
            "\\(\\sqrt{2gh}\\)",
            "\\(\\sqrt{gh/2}\\)",
            "\\(gh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Energy conservation: \\(mgh = mg(h/2) + \\tfrac{1}{2}mv^2\\), so \\(v^2 = gh\\), \\(v = \\sqrt{gh}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "Why does a rolling ball reach a lower speed at the bottom of a ramp than a frictionless sliding block?",
          "options": [
            "Some energy goes into rotational kinetic energy",
            "friction adds energy",
            "the ball has more mass",
            "gravity is weaker for the ball"
          ],
          "correctAnswer": 0,
          "explanation": "For a rolling object, gravitational PE splits between translational and rotational KE, so its translational speed is lower.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "A \\(2\\ \\text{kg}\\) object is pulled \\(5\\ \\text{m}\\) by a \\(10\\ \\text{N}\\) force against \\(4\\ \\text{N}\\) of friction. Its final KE (from rest) is",
          "options": [
            "\\(30\\ \\text{J}\\)",
            "\\(50\\ \\text{J}\\)",
            "\\(70\\ \\text{J}\\)",
            "\\(20\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Net force \\(= 10 - 4 = 6\\ \\text{N}\\); \\(W_{net} = 6 \\times 5 = 30\\ \\text{J} = \\Delta KE\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "A constant power engine accelerates a car. As speed increases, the driving force",
          "options": [
            "decreases (since \\(F = P/v\\))",
            "increases",
            "stays constant",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "At constant power, \\(F = P/v\\), so the force decreases as speed increases (and so does acceleration).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "A block compresses a spring, is launched up a frictionless incline. The maximum height depends on",
          "options": [
            "the spring's stored energy converting fully to gravitational PE",
            "the incline angle",
            "the block's shape",
            "air resistance"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, the spring's stored energy \\(\\tfrac{1}{2}kx^2\\) equals \\(mgh\\) at maximum height, independent of the incline angle.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Linear Momentum",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "Momentum is defined as",
          "options": [
            "\\(p = mv\\)",
            "\\(p = ma\\)",
            "\\(p = \\tfrac{1}{2}mv^2\\)",
            "\\(p = Fd\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum is mass times velocity, \\(p = mv\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "Impulse equals",
          "options": [
            "the change in momentum, \\(J = F\\Delta t = \\Delta p\\)",
            "force times distance",
            "mass times velocity",
            "\\(\\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Impulse \\(J = F\\Delta t = \\Delta p\\), the change in momentum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "In the absence of external forces, total momentum is",
          "options": [
            "conserved",
            "increasing",
            "decreasing",
            "zero always"
          ],
          "correctAnswer": 0,
          "explanation": "With no net external force, the total momentum of a system is conserved.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "In a perfectly inelastic collision, the objects",
          "options": [
            "stick together",
            "bounce apart",
            "conserve kinetic energy",
            "pass through each other"
          ],
          "correctAnswer": 0,
          "explanation": "In a perfectly inelastic collision, objects stick together; momentum is conserved but KE is not.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "In an elastic collision,",
          "options": [
            "both momentum and kinetic energy are conserved",
            "only momentum is conserved",
            "neither is conserved",
            "only energy is conserved"
          ],
          "correctAnswer": 0,
          "explanation": "Elastic collisions conserve both momentum and kinetic energy.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "A \\(3\\ \\text{kg}\\) object at \\(4\\ \\text{m/s}\\) has momentum",
          "options": [
            "\\(12\\ \\text{kg·m/s}\\)",
            "\\(24\\ \\text{kg·m/s}\\)",
            "\\(1.3\\ \\text{kg·m/s}\\)",
            "\\(7\\ \\text{kg·m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(p = mv = 3 \\times 4 = 12\\ \\text{kg·m/s}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "To increase impulse for a given force, one can",
          "options": [
            "apply the force for a longer time",
            "reduce the time",
            "reduce the mass",
            "reduce the force"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(J = F\\Delta t\\), applying the force longer increases the impulse.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "The area under a force-time graph gives",
          "options": [
            "impulse",
            "work",
            "power",
            "energy"
          ],
          "correctAnswer": 0,
          "explanation": "The area under a force-time graph equals the impulse (change in momentum).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "Momentum is a",
          "options": [
            "vector quantity",
            "scalar quantity",
            "form of energy",
            "unit of force"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum has both magnitude and direction, making it a vector.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "The unit of momentum is",
          "options": [
            "kg·m/s",
            "newton",
            "joule",
            "watt"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum has units of kilogram-meters per second (kg·m/s).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A \\(2\\ \\text{kg}\\) cart at \\(3\\ \\text{m/s}\\) collides and sticks to a \\(4\\ \\text{kg}\\) cart at rest. Their common speed is",
          "options": [
            "\\(1\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(0.5\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation: \\((2)(3) = (6)v\\), so \\(v = 1\\ \\text{m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "A \\(0.2\\ \\text{kg}\\) ball hits a wall at \\(5\\ \\text{m/s}\\) and rebounds at \\(5\\ \\text{m/s}\\). The impulse magnitude is",
          "options": [
            "\\(2\\ \\text{kg·m/s}\\)",
            "\\(1\\ \\text{kg·m/s}\\)",
            "\\(0\\)",
            "\\(10\\ \\text{kg·m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\Delta p = m(v_f - v_i) = 0.2(-5 - 5) = -2\\); magnitude \\(2\\ \\text{kg·m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "Why does bending your knees when landing reduce the force of impact?",
          "options": [
            "It increases the time of impact, reducing the force for the same momentum change",
            "it reduces momentum",
            "it increases the force",
            "it eliminates the impact"
          ],
          "correctAnswer": 0,
          "explanation": "Extending \\(\\Delta t\\) reduces the force needed for the same \\(\\Delta p\\) (since \\(F = \\Delta p/\\Delta t\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "A \\(50\\ \\text{kg}\\) skater throws a \\(2\\ \\text{kg}\\) ball at \\(10\\ \\text{m/s}\\) on frictionless ice. The skater recoils at",
          "options": [
            "\\(0.4\\ \\text{m/s}\\)",
            "\\(10\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(5\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation: \\(50v = 2(10)\\), so \\(v = 0.4\\ \\text{m/s}\\) backward.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "Kinetic energy is conserved only in a ___ collision.",
          "options": [
            "elastic",
            "perfectly inelastic",
            "inelastic",
            "explosive"
          ],
          "correctAnswer": 0,
          "explanation": "Only elastic collisions conserve kinetic energy; inelastic ones lose some to heat, sound, or deformation.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "Two equal-mass objects collide head-on elastically with equal and opposite velocities. Afterward they",
          "options": [
            "reverse direction (exchange velocities)",
            "stick together",
            "stop",
            "move together"
          ],
          "correctAnswer": 0,
          "explanation": "Elastic equal-mass collisions exchange velocities; with equal and opposite speeds, each reverses direction.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "During an explosion, an initially stationary object breaks into pieces. The total momentum after is",
          "options": [
            "zero",
            "large",
            "equal to the mass",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "If initial momentum is zero and no external forces act, the total momentum stays zero.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "A larger, softer surface (like an airbag) reduces injury by",
          "options": [
            "extending the collision time and reducing peak force",
            "reducing momentum change",
            "increasing the force",
            "eliminating the collision"
          ],
          "correctAnswer": 0,
          "explanation": "By increasing the time over which momentum changes, the peak force is reduced.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "A \\(1\\ \\text{kg}\\) ball at \\(6\\ \\text{m/s}\\) collides elastically head-on with an identical ball at rest. After, the first ball moves at",
          "options": [
            "\\(0\\ \\text{m/s}\\)",
            "\\(6\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)",
            "\\(-6\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For equal masses in an elastic head-on collision, velocities exchange: the first stops and the second moves at \\(6\\ \\text{m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "Momentum is conserved in a collision because the collision forces are",
          "options": [
            "internal, equal and opposite (Newton's third law)",
            "external",
            "gravitational",
            "frictional"
          ],
          "correctAnswer": 0,
          "explanation": "Internal collision forces are equal and opposite, so they cancel and total momentum is conserved.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A \\(0.05\\ \\text{kg}\\) bullet at \\(400\\ \\text{m/s}\\) embeds in a \\(2\\ \\text{kg}\\) block at rest. Their speed just after is",
          "options": [
            "about \\(9.8\\ \\text{m/s}\\)",
            "\\(400\\ \\text{m/s}\\)",
            "\\(20\\ \\text{m/s}\\)",
            "\\(200\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation: \\((0.05)(400) = (2.05)v\\), so \\(v = 20/2.05 \\approx 9.8\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "A \\(3\\ \\text{kg}\\) object at \\(4\\ \\text{m/s}\\) collides and sticks to a \\(1\\ \\text{kg}\\) object at rest. The fraction of kinetic energy lost is",
          "options": [
            "\\(1/4\\)",
            "\\(1/2\\)",
            "\\(3/4\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "After: \\(v = 12/4 = 3\\). \\(KE_i = 24\\ \\text{J}\\), \\(KE_f = 18\\ \\text{J}\\); fraction lost \\(= 6/24 = 1/4\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "A force \\(F(t)\\) varies with time and acts on an object. The change in momentum equals",
          "options": [
            "the area under the force-time graph",
            "F times distance",
            "the average force only",
            "the peak force"
          ],
          "correctAnswer": 0,
          "explanation": "Impulse \\(= \\int F\\,dt\\), the area under the force-time graph, which equals the momentum change.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Two skaters (masses \\(m\\) and \\(3m\\)) push off from rest. The ratio of their speeds \\(v_m : v_{3m}\\) is",
          "options": [
            "\\(3 : 1\\)",
            "\\(1 : 3\\)",
            "\\(1 : 1\\)",
            "\\(9 : 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation: \\(mv_m = 3m\\,v_{3m}\\), so \\(v_m : v_{3m} = 3 : 1\\)—the lighter skater moves faster.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "Why can two colliding cars conserve momentum but lose kinetic energy?",
          "options": [
            "Internal forces conserve momentum, while KE converts to heat, sound, and deformation",
            "momentum is always lost",
            "both are always conserved",
            "neither is conserved"
          ],
          "correctAnswer": 0,
          "explanation": "Newton's third law ensures momentum conservation, but in an inelastic collision kinetic energy converts to other forms.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "In a two-dimensional collision, momentum is conserved",
          "options": [
            "independently in the x and y directions",
            "only in total magnitude",
            "only in the x direction",
            "only if elastic"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum is a vector, conserved separately along each perpendicular axis.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "A ball dropped onto the floor bounces back with less speed. This collision is",
          "options": [
            "inelastic (some kinetic energy is lost)",
            "elastic",
            "perfectly inelastic",
            "explosive"
          ],
          "correctAnswer": 0,
          "explanation": "Returning with less speed means kinetic energy was lost, so the collision is inelastic (but not perfectly inelastic since it bounces).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "A rocket accelerates in space by ejecting mass. This works because",
          "options": [
            "ejecting mass backward gives the rocket forward momentum",
            "the exhaust pushes on surrounding air",
            "gravity assists it",
            "of friction"
          ],
          "correctAnswer": 0,
          "explanation": "By conservation of momentum, ejecting exhaust backward imparts equal forward momentum to the rocket—working even in a vacuum.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "An object of mass \\(m\\) moving at \\(v\\) strikes and sticks to an identical object at rest. The final KE compared to the initial KE is",
          "options": [
            "half",
            "the same",
            "double",
            "one-fourth"
          ],
          "correctAnswer": 0,
          "explanation": "Final speed \\(v/2\\); \\(KE_f = \\tfrac{1}{2}(2m)(v/2)^2 = \\tfrac{1}{4}mv^2\\), which is half of \\(KE_i = \\tfrac{1}{2}mv^2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "A \\(0.15\\ \\text{kg}\\) baseball moving at \\(40\\ \\text{m/s}\\) is hit back at \\(50\\ \\text{m/s}\\). The impulse magnitude on the ball is",
          "options": [
            "\\(13.5\\ \\text{kg·m/s}\\)",
            "\\(1.5\\ \\text{kg·m/s}\\)",
            "\\(6\\ \\text{kg·m/s}\\)",
            "\\(90\\ \\text{kg·m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Taking initial as \\(+40\\) and return as \\(-50\\): \\(\\Delta p = 0.15(-50 - 40) = -13.5\\); magnitude \\(13.5\\ \\text{kg·m/s}\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Torque and Rotational Dynamics",
      "questions": [
        {
          "id": "q-u5-easy-1",
          "question": "Torque is defined as",
          "options": [
            "\\(\\tau = rF\\sin\\theta\\)",
            "\\(\\tau = ma\\)",
            "\\(\\tau = mv\\)",
            "\\(\\tau = Fd\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Torque is \\(\\tau = rF\\sin\\theta\\), the rotational effect of a force.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "The rotational analog of Newton's second law is",
          "options": [
            "\\(\\tau = I\\alpha\\)",
            "\\(F = ma\\)",
            "\\(p = mv\\)",
            "\\(W = Fd\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Net torque equals moment of inertia times angular acceleration: \\(\\tau = I\\alpha\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "Moment of inertia depends on",
          "options": [
            "mass and its distribution relative to the axis",
            "only mass",
            "only velocity",
            "only force"
          ],
          "correctAnswer": 0,
          "explanation": "Moment of inertia depends on how mass is distributed about the rotation axis.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "For rotational equilibrium, the net torque must be",
          "options": [
            "zero",
            "maximum",
            "equal to the force",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "An object in rotational equilibrium has zero net torque.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "Angular velocity \\(\\omega\\) relates to linear velocity \\(v\\) at radius \\(r\\) by",
          "options": [
            "\\(v = r\\omega\\)",
            "\\(v = \\omega/r\\)",
            "\\(v = r/\\omega\\)",
            "\\(v = \\omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a point at radius r, \\(v = r\\omega\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "Angular acceleration is the rate of change of",
          "options": [
            "angular velocity",
            "position",
            "torque",
            "angular momentum"
          ],
          "correctAnswer": 0,
          "explanation": "Angular acceleration is \\(\\alpha = \\frac{d\\omega}{dt}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "A larger moment of inertia means an object is",
          "options": [
            "harder to angularly accelerate",
            "easier to spin",
            "lighter",
            "faster"
          ],
          "correctAnswer": 0,
          "explanation": "A larger moment of inertia resists changes in rotational motion, so more torque is needed for a given angular acceleration.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "The lever arm is the",
          "options": [
            "perpendicular distance from the axis to the line of the force",
            "distance along the force",
            "the object's length",
            "the mass"
          ],
          "correctAnswer": 0,
          "explanation": "The lever arm (moment arm) is the perpendicular distance from the rotation axis to the line of action of the force.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "Torque is greatest when the force is applied",
          "options": [
            "perpendicular to the lever arm",
            "parallel to the lever arm",
            "at the axis",
            "at 0°"
          ],
          "correctAnswer": 0,
          "explanation": "Torque \\(\\tau = rF\\sin\\theta\\) is maximized when \\(\\theta = 90°\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "The unit of torque is the",
          "options": [
            "newton-meter (N·m)",
            "joule",
            "watt",
            "newton"
          ],
          "correctAnswer": 0,
          "explanation": "Torque has units of newton-meters (N·m).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "A net torque of \\(8\\ \\text{N·m}\\) acts on a wheel with \\(I = 2\\ \\text{kg·m}^2\\). Its angular acceleration is",
          "options": [
            "\\(4\\ \\text{rad/s}^2\\)",
            "\\(16\\ \\text{rad/s}^2\\)",
            "\\(2\\ \\text{rad/s}^2\\)",
            "\\(0.25\\ \\text{rad/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\alpha = \\tau/I = 8/2 = 4\\ \\text{rad/s}^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "A \\(15\\ \\text{N}\\) force is applied perpendicular to a wrench \\(0.2\\ \\text{m}\\) from the bolt. The torque is",
          "options": [
            "\\(3\\ \\text{N·m}\\)",
            "\\(15\\ \\text{N·m}\\)",
            "\\(0.2\\ \\text{N·m}\\)",
            "\\(75\\ \\text{N·m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\tau = rF = 0.2 \\times 15 = 3\\ \\text{N·m}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "To balance a seesaw, a heavier child should sit",
          "options": [
            "closer to the pivot than a lighter child",
            "farther from the pivot",
            "at the same distance",
            "off the seesaw"
          ],
          "correctAnswer": 0,
          "explanation": "For torque balance, the heavier child sits closer to the pivot so their larger weight has a smaller lever arm.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "The moment of inertia of a point mass \\(m\\) at distance \\(r\\) is",
          "options": [
            "\\(mr^2\\)",
            "\\(\\tfrac{1}{2}mr^2\\)",
            "\\(mr\\)",
            "\\(2mr^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a point mass, \\(I = mr^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "An object rolls without slipping when",
          "options": [
            "\\(v = r\\omega\\)",
            "\\(v = 0\\)",
            "\\(\\omega = 0\\)",
            "\\(v = 2r\\omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Rolling without slipping requires \\(v = r\\omega\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "A uniform beam is supported at its center. Adding equal weights at equal distances on both sides keeps it",
          "options": [
            "balanced (net torque zero)",
            "tilting left",
            "tilting right",
            "spinning"
          ],
          "correctAnswer": 0,
          "explanation": "Equal weights at equal distances produce equal and opposite torques, keeping the beam balanced.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "A solid disk (\\(I = \\tfrac{1}{2}MR^2\\)) and a hoop (\\(I = MR^2\\)) of equal mass and radius roll down an incline. The disk reaches the bottom",
          "options": [
            "first (smaller I means more translational energy)",
            "last",
            "at the same time",
            "only if pushed"
          ],
          "correctAnswer": 0,
          "explanation": "The disk's smaller moment of inertia means less energy goes into rotation, giving it greater translational acceleration—it arrives first.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "A force applied at the axis of rotation produces",
          "options": [
            "zero torque",
            "maximum torque",
            "negative torque",
            "infinite torque"
          ],
          "correctAnswer": 0,
          "explanation": "With \\(r = 0\\) (force at the axis), \\(\\tau = rF\\sin\\theta = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "Doubling the distance of a mass from the rotation axis changes its moment of inertia by a factor of",
          "options": [
            "4",
            "2",
            "1/2",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(I = mr^2\\), doubling r multiplies I by \\(2^2 = 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "For static equilibrium, an object must have",
          "options": [
            "both zero net force and zero net torque",
            "only zero net force",
            "only zero net torque",
            "maximum torque"
          ],
          "correctAnswer": 0,
          "explanation": "Static equilibrium requires both translational (zero net force) and rotational (zero net torque) equilibrium.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "A uniform rod of mass \\(M\\) and length \\(L\\) rotates about one end. Its moment of inertia is",
          "options": [
            "\\(\\tfrac{1}{3}ML^2\\)",
            "\\(\\tfrac{1}{12}ML^2\\)",
            "\\(ML^2\\)",
            "\\(\\tfrac{1}{2}ML^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A rod rotating about its end has \\(I = \\tfrac{1}{3}ML^2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "A \\(2\\ \\text{m}\\) uniform beam (weight \\(100\\ \\text{N}\\)) rests on a pivot \\(0.5\\ \\text{m}\\) from one end. What downward force at that near end balances it? (weight acts at center)",
          "options": [
            "\\(100\\ \\text{N}\\)",
            "\\(50\\ \\text{N}\\)",
            "\\(200\\ \\text{N}\\)",
            "\\(25\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Weight (100 N) acts at center, 0.5 m from pivot on the far side; balancing torque: \\(F(0.5) = 100(0.5)\\), so \\(F = 100\\ \\text{N}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "A solid sphere (\\(I = \\tfrac{2}{5}MR^2\\)) rolls down an incline of height \\(h\\). Its speed at the bottom is",
          "options": [
            "\\(\\sqrt{\\tfrac{10}{7}gh}\\)",
            "\\(\\sqrt{2gh}\\)",
            "\\(\\sqrt{gh}\\)",
            "\\(\\sqrt{\\tfrac{5}{7}gh}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Energy: \\(mgh = \\tfrac{7}{10}mv^2\\), so \\(v = \\sqrt{\\tfrac{10}{7}gh}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "A torque \\(\\tau(t) = 6t\\) acts on a wheel (\\(I = 3\\ \\text{kg·m}^2\\)) from rest. Its angular velocity at \\(t = 2\\ \\text{s}\\) is",
          "options": [
            "\\(4\\ \\text{rad/s}\\)",
            "\\(12\\ \\text{rad/s}\\)",
            "\\(2\\ \\text{rad/s}\\)",
            "\\(6\\ \\text{rad/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Angular impulse \\(= \\int_0^2 6t\\,dt = [3t^2]_0^2 = 12 = I\\omega\\), so \\(\\omega = 12/3 = 4\\ \\text{rad/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-5",
          "question": "Why does a rolling object accelerate more slowly down an incline than a sliding one?",
          "options": [
            "Part of the gravitational energy goes into rotation, reducing translational acceleration",
            "friction adds energy",
            "it has more mass",
            "gravity is weaker"
          ],
          "correctAnswer": 0,
          "explanation": "For a rolling object, the gravitational component must accelerate both translation and rotation, so its translational acceleration is smaller.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "For objects of the same mass and radius, which rolls down an incline fastest?",
          "options": [
            "the one with the smallest moment of inertia (e.g., a solid sphere)",
            "the hoop",
            "they all tie",
            "the largest I"
          ],
          "correctAnswer": 0,
          "explanation": "Smaller I means less energy goes into rotation, so more into translation—the solid sphere (smallest I) is fastest.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "A ladder leans against a frictionless wall. It is prevented from slipping by",
          "options": [
            "friction at the floor",
            "friction at the wall",
            "gravity",
            "the normal force at the wall"
          ],
          "correctAnswer": 0,
          "explanation": "With a frictionless wall, only the floor's friction can prevent the base from sliding, providing the horizontal force for equilibrium.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "Using the parallel axis theorem, the moment of inertia about an axis a distance \\(d\\) from the center of mass is",
          "options": [
            "\\(I = I_{cm} + Md^2\\)",
            "\\(I = I_{cm} - Md^2\\)",
            "\\(I = Md^2\\)",
            "\\(I = I_{cm}/d^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The parallel axis theorem: \\(I = I_{cm} + Md^2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "A disk starts from rest and a constant torque acts on it. Its angular velocity",
          "options": [
            "increases linearly with time",
            "stays constant",
            "decreases",
            "oscillates"
          ],
          "correctAnswer": 0,
          "explanation": "Constant torque gives constant angular acceleration, so \\(\\omega = \\alpha t\\) increases linearly with time.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "Two forces of equal magnitude but opposite direction act on a rigid body along different lines (a couple). The net effect is",
          "options": [
            "a pure torque with zero net force",
            "zero torque",
            "a net force only",
            "no effect"
          ],
          "correctAnswer": 0,
          "explanation": "A couple (two equal, opposite forces along different lines) produces a net torque but zero net force, causing pure rotation.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 6,
      "title": "Energy and Momentum of Rotating Systems",
      "questions": [
        {
          "id": "q-u6-easy-1",
          "question": "Rotational kinetic energy is",
          "options": [
            "\\(\\tfrac{1}{2}I\\omega^2\\)",
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(I\\omega\\)",
            "\\(mgh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Rotational kinetic energy is \\(KE_{rot} = \\tfrac{1}{2}I\\omega^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-2",
          "question": "Angular momentum of a rotating rigid body is",
          "options": [
            "\\(L = I\\omega\\)",
            "\\(L = mv\\)",
            "\\(L = \\tfrac{1}{2}I\\omega^2\\)",
            "\\(L = I\\alpha\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum is \\(L = I\\omega\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-3",
          "question": "In the absence of external torque, angular momentum is",
          "options": [
            "conserved",
            "increasing",
            "decreasing",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "With no net external torque, total angular momentum is conserved.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-4",
          "question": "A rolling object has kinetic energy that is",
          "options": [
            "the sum of translational and rotational KE",
            "only translational",
            "only rotational",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A rolling object has both translational (\\(\\tfrac{1}{2}mv^2\\)) and rotational (\\(\\tfrac{1}{2}I\\omega^2\\)) kinetic energy.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-5",
          "question": "A figure skater pulling in their arms spins faster because",
          "options": [
            "reducing I increases \\(\\omega\\) (conserving L)",
            "they gain energy",
            "torque increases",
            "mass increases"
          ],
          "correctAnswer": 0,
          "explanation": "With \\(L = I\\omega\\) conserved, reducing the moment of inertia increases the angular velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-6",
          "question": "Angular momentum of a point particle is",
          "options": [
            "\\(L = mvr\\) (for velocity perpendicular to r)",
            "\\(L = mv\\)",
            "\\(L = mr\\)",
            "\\(L = \\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a particle moving perpendicular to the radius, \\(L = mvr\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-7",
          "question": "The unit of angular momentum is",
          "options": [
            "kg·m²/s",
            "kg·m/s",
            "N·m",
            "joule"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum has units of kg·m²/s (equivalent to J·s).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-8",
          "question": "A diver tucks into a ball to complete more flips because",
          "options": [
            "reducing I increases spin rate to conserve angular momentum",
            "they gain torque",
            "they gain energy",
            "mass increases"
          ],
          "correctAnswer": 0,
          "explanation": "Tucking reduces moment of inertia, so angular velocity increases to conserve angular momentum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-9",
          "question": "A wheel spinning at \\(\\omega\\) with moment of inertia \\(I\\) has angular momentum",
          "options": [
            "\\(I\\omega\\)",
            "\\(\\tfrac{1}{2}I\\omega^2\\)",
            "\\(I\\alpha\\)",
            "\\(I/\\omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum is \\(L = I\\omega\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-10",
          "question": "Angular momentum changes only due to",
          "options": [
            "external torque",
            "internal forces",
            "gravity always",
            "no cause"
          ],
          "correctAnswer": 0,
          "explanation": "Only a net external torque changes a system's total angular momentum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-medium-1",
          "question": "A wheel with \\(I = 4\\ \\text{kg·m}^2\\) spins at \\(3\\ \\text{rad/s}\\). Its rotational KE is",
          "options": [
            "\\(18\\ \\text{J}\\)",
            "\\(12\\ \\text{J}\\)",
            "\\(36\\ \\text{J}\\)",
            "\\(6\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE = \\tfrac{1}{2}I\\omega^2 = \\tfrac{1}{2}(4)(3)^2 = 18\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-2",
          "question": "A wheel with \\(I = 2\\ \\text{kg·m}^2\\) at \\(5\\ \\text{rad/s}\\) has angular momentum",
          "options": [
            "\\(10\\ \\text{kg·m}^2/\\text{s}\\)",
            "\\(25\\ \\text{kg·m}^2/\\text{s}\\)",
            "\\(2.5\\ \\text{kg·m}^2/\\text{s}\\)",
            "\\(7\\ \\text{kg·m}^2/\\text{s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(L = I\\omega = 2 \\times 5 = 10\\ \\text{kg·m}^2/\\text{s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-3",
          "question": "A person on a rotating platform pulls in their arms, halving their moment of inertia. Their angular velocity",
          "options": [
            "doubles",
            "halves",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "By conservation of L, if I halves, \\(\\omega\\) doubles.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-4",
          "question": "When the skater pulls in their arms and spins faster, their rotational kinetic energy",
          "options": [
            "increases (they do work pulling arms in)",
            "decreases",
            "stays the same",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE = \\tfrac{1}{2}L\\omega\\); with L constant and \\(\\omega\\) increasing, KE rises—the skater does work pulling their arms inward.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-5",
          "question": "A disk (\\(I = \\tfrac{1}{2}MR^2\\)) rolls without slipping. What fraction of its total KE is rotational?",
          "options": [
            "1/3",
            "1/2",
            "2/3",
            "1/4"
          ],
          "correctAnswer": 0,
          "explanation": "For a disk, \\(KE_{rot} = \\tfrac{1}{4}Mv^2\\) and \\(KE_{trans} = \\tfrac{1}{2}Mv^2\\); rotational is \\(\\tfrac{1/4}{3/4} = 1/3\\) of the total.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-6",
          "question": "A spinning disk drops onto an identical stationary disk and they stick. Their combined angular velocity is",
          "options": [
            "half the original",
            "the same",
            "double",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum conserved: \\(I\\omega_0 = 2I\\omega_f\\), so \\(\\omega_f = \\omega_0/2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-7",
          "question": "Why does a gyroscope resist changes to its orientation?",
          "options": [
            "Its large angular momentum resists changes in direction",
            "it has no mass",
            "gravity holds it",
            "it spins slowly"
          ],
          "correctAnswer": 0,
          "explanation": "A large angular momentum vector resists reorientation, giving a gyroscope its stability.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-8",
          "question": "A planet orbiting the Sun sweeps out equal areas in equal times because",
          "options": [
            "its angular momentum is conserved",
            "of friction",
            "of its mass",
            "the Sun exerts a torque"
          ],
          "correctAnswer": 0,
          "explanation": "With no external torque about the Sun, the planet's angular momentum is conserved—Kepler's second law.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-9",
          "question": "For a rolling object, more of the energy goes into rotation when the moment of inertia is",
          "options": [
            "larger",
            "smaller",
            "zero",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "A larger moment of inertia stores more energy as rotational KE for a given rolling speed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-10",
          "question": "When a person walks toward the center of a rotating merry-go-round, the system's angular velocity",
          "options": [
            "increases",
            "decreases",
            "stays constant",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "Moving inward reduces the moment of inertia, so \\(\\omega\\) increases to conserve angular momentum.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-hard-1",
          "question": "A disk (\\(I = \\tfrac{1}{2}MR^2\\)) spinning at \\(\\omega_0\\) drops onto an identical stationary disk and sticks. The fraction of kinetic energy lost is",
          "options": [
            "1/2",
            "1/4",
            "3/4",
            "0"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE_i = \\tfrac{1}{2}I\\omega_0^2\\); \\(KE_f = \\tfrac{1}{2}(2I)(\\omega_0/2)^2 = \\tfrac{1}{4}I\\omega_0^2\\), half the initial—so half is lost.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-2",
          "question": "A merry-go-round (\\(I = 500\\ \\text{kg·m}^2\\)) spins at \\(2\\ \\text{rad/s}\\). A \\(50\\ \\text{kg}\\) person steps onto its edge (\\(r = 2\\ \\text{m}\\)). The new angular velocity is about",
          "options": [
            "\\(1.43\\ \\text{rad/s}\\)",
            "\\(2\\ \\text{rad/s}\\)",
            "\\(4\\ \\text{rad/s}\\)",
            "\\(0.5\\ \\text{rad/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Person adds \\(I = mr^2 = 50(4) = 200\\). \\(L = 500(2) = 1000 = (700)\\omega\\), so \\(\\omega \\approx 1.43\\ \\text{rad/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-3",
          "question": "Why does a neutron star spin extremely fast?",
          "options": [
            "Collapse dramatically reduces its radius and moment of inertia, so \\(\\omega\\) increases to conserve L",
            "it gains energy",
            "gravity spins it",
            "it was always fast"
          ],
          "correctAnswer": 0,
          "explanation": "When a stellar core collapses, its radius (and thus I) shrinks enormously, so angular velocity increases dramatically to conserve angular momentum.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-4",
          "question": "A solid cylinder and a hollow cylinder of equal mass and radius roll down an incline. The one arriving first is",
          "options": [
            "the solid cylinder (smaller I)",
            "the hollow cylinder",
            "they tie",
            "neither rolls"
          ],
          "correctAnswer": 0,
          "explanation": "The solid cylinder has a smaller moment of inertia, so less energy goes into rotation and it accelerates faster, arriving first.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-5",
          "question": "A rotating system's kinetic energy can increase while its angular momentum stays constant if",
          "options": [
            "work is done to reduce the moment of inertia (as when a skater pulls in arms)",
            "no work is done",
            "angular momentum decreases",
            "torque is applied"
          ],
          "correctAnswer": 0,
          "explanation": "Reducing I at constant L increases \\(\\omega\\) and KE (\\(= \\tfrac{1}{2}L\\omega\\)); the extra energy comes from work done pulling mass inward.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-6",
          "question": "A ball rolling without slipping up an incline slows down. Its rotational and translational speeds decrease together because",
          "options": [
            "the rolling condition \\(v = r\\omega\\) links them",
            "they are independent",
            "only rotation slows",
            "only translation slows"
          ],
          "correctAnswer": 0,
          "explanation": "The rolling-without-slipping constraint \\(v = r\\omega\\) means translational and rotational speeds change together.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-7",
          "question": "A comet moves faster at perihelion (closest to the Sun) than at aphelion (farthest) because",
          "options": [
            "conservation of angular momentum requires greater speed at smaller radius",
            "the Sun pushes it",
            "of friction",
            "its mass changes"
          ],
          "correctAnswer": 0,
          "explanation": "With angular momentum \\(L = mvr\\) conserved, a smaller r requires a larger v—so the comet speeds up near the Sun.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-8",
          "question": "A hoop and a disk of equal mass, radius, and translational speed roll along the ground. Which has greater total kinetic energy?",
          "options": [
            "the hoop (larger moment of inertia)",
            "the disk",
            "they are equal",
            "neither has KE"
          ],
          "correctAnswer": 0,
          "explanation": "With the same v, the hoop's larger moment of inertia gives it greater rotational KE, so its total KE is larger.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-9",
          "question": "Angular momentum is conserved in a collision when",
          "options": [
            "there is no net external torque about the chosen axis",
            "kinetic energy is conserved",
            "momentum is zero",
            "the objects are identical"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum about an axis is conserved when the net external torque about that axis is zero, regardless of whether KE is conserved.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-10",
          "question": "A person standing on a frictionless rotating platform holds a spinning bicycle wheel and flips it over. The person",
          "options": [
            "begins to rotate to conserve total angular momentum",
            "stays still",
            "stops the wheel",
            "gains energy from nothing"
          ],
          "correctAnswer": 0,
          "explanation": "Flipping the wheel reverses its angular momentum; to conserve the system's total angular momentum, the person rotates in the opposite sense.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 7,
      "title": "Oscillations",
      "questions": [
        {
          "id": "q-u7-easy-1",
          "question": "Simple harmonic motion (SHM) occurs when the restoring force is",
          "options": [
            "proportional to displacement and opposite in direction",
            "constant",
            "zero",
            "proportional to velocity"
          ],
          "correctAnswer": 0,
          "explanation": "SHM requires a restoring force \\(F = -kx\\), proportional to displacement and directed back toward equilibrium.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-2",
          "question": "The period of oscillation is the",
          "options": [
            "time for one complete cycle",
            "number of cycles per second",
            "maximum displacement",
            "restoring force"
          ],
          "correctAnswer": 0,
          "explanation": "The period T is the time to complete one full oscillation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-3",
          "question": "Frequency is the",
          "options": [
            "number of cycles per second",
            "time for one cycle",
            "maximum displacement",
            "restoring force"
          ],
          "correctAnswer": 0,
          "explanation": "Frequency f is the number of cycles per unit time, \\(f = 1/T\\), measured in hertz.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-4",
          "question": "Amplitude is the",
          "options": [
            "maximum displacement from equilibrium",
            "period",
            "frequency",
            "restoring force"
          ],
          "correctAnswer": 0,
          "explanation": "Amplitude is the maximum distance from the equilibrium position.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-5",
          "question": "The period of a mass-spring system is",
          "options": [
            "\\(T = 2\\pi\\sqrt{m/k}\\)",
            "\\(T = 2\\pi\\sqrt{k/m}\\)",
            "\\(T = 2\\pi\\sqrt{L/g}\\)",
            "\\(T = 2\\pi mk\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a mass on a spring, \\(T = 2\\pi\\sqrt{m/k}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-6",
          "question": "The period of a simple pendulum (small angle) is",
          "options": [
            "\\(T = 2\\pi\\sqrt{L/g}\\)",
            "\\(T = 2\\pi\\sqrt{m/k}\\)",
            "\\(T = 2\\pi\\sqrt{g/L}\\)",
            "\\(T = 2\\pi Lg\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A simple pendulum has \\(T = 2\\pi\\sqrt{L/g}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-7",
          "question": "In SHM, the speed of the oscillator is maximum at",
          "options": [
            "the equilibrium position",
            "the maximum displacement",
            "the turning points",
            "zero displacement only when at rest"
          ],
          "correctAnswer": 0,
          "explanation": "Speed is maximum at equilibrium (where all energy is kinetic) and zero at the extremes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-8",
          "question": "In SHM, the acceleration is maximum at",
          "options": [
            "the maximum displacement",
            "the equilibrium position",
            "the midpoint",
            "constant everywhere"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(a = -\\omega^2 x\\), acceleration is greatest at maximum displacement (where the restoring force is largest).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-9",
          "question": "The period of a simple pendulum depends on",
          "options": [
            "its length and g, but not its mass",
            "its mass",
            "its amplitude (large)",
            "the material"
          ],
          "correctAnswer": 0,
          "explanation": "A pendulum's period depends only on length and gravity, not on the bob's mass (for small angles).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-10",
          "question": "The total mechanical energy of an ideal SHM oscillator is",
          "options": [
            "constant",
            "increasing",
            "decreasing",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "In ideal (undamped) SHM, energy continuously converts between KE and PE but the total is constant.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-medium-1",
          "question": "A mass on a spring has period \\(T\\). If the mass is quadrupled, the new period is",
          "options": [
            "\\(2T\\)",
            "\\(T/2\\)",
            "\\(4T\\)",
            "\\(T\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(T \\propto \\sqrt{m}\\), quadrupling m multiplies T by \\(\\sqrt{4} = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-2",
          "question": "A pendulum's length is quadrupled. Its new period is",
          "options": [
            "twice the original",
            "half the original",
            "four times",
            "unchanged"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(T \\propto \\sqrt{L}\\), quadrupling L multiplies T by 2.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-3",
          "question": "In SHM, when the displacement is maximum, the kinetic energy is",
          "options": [
            "zero",
            "maximum",
            "half the total",
            "equal to PE"
          ],
          "correctAnswer": 0,
          "explanation": "At maximum displacement, the oscillator is momentarily at rest, so KE is zero and all energy is potential.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-4",
          "question": "A \\(0.5\\ \\text{kg}\\) mass on a spring (\\(k = 200\\ \\text{N/m}\\)) has period approximately",
          "options": [
            "\\(0.31\\ \\text{s}\\)",
            "\\(3.1\\ \\text{s}\\)",
            "\\(1\\ \\text{s}\\)",
            "\\(6.3\\ \\text{s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.5/200} = 2\\pi(0.05) \\approx 0.31\\ \\text{s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-5",
          "question": "Increasing the amplitude of a mass-spring oscillator (in ideal SHM)",
          "options": [
            "does not change its period",
            "increases the period",
            "decreases the period",
            "stops the motion"
          ],
          "correctAnswer": 0,
          "explanation": "In SHM, the period is independent of amplitude—larger swings just have proportionally greater speeds.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-6",
          "question": "The angular frequency of a mass-spring system is",
          "options": [
            "\\(\\omega = \\sqrt{k/m}\\)",
            "\\(\\omega = \\sqrt{m/k}\\)",
            "\\(\\omega = k/m\\)",
            "\\(\\omega = 2\\pi km\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The angular frequency is \\(\\omega = \\sqrt{k/m}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-7",
          "question": "At the equilibrium position in SHM, the net force is",
          "options": [
            "zero",
            "maximum",
            "half the maximum",
            "directed outward"
          ],
          "correctAnswer": 0,
          "explanation": "At equilibrium, displacement is zero so the restoring force \\(F = -kx = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-8",
          "question": "A pendulum clock runs slow. To fix it, one should",
          "options": [
            "shorten the pendulum",
            "lengthen the pendulum",
            "add mass",
            "remove mass"
          ],
          "correctAnswer": 0,
          "explanation": "A slow clock has too long a period; shortening the pendulum decreases T (\\(T \\propto \\sqrt{L}\\)), speeding it up.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-9",
          "question": "The displacement in SHM can be written as",
          "options": [
            "\\(x = A\\cos(\\omega t)\\)",
            "\\(x = A\\omega t\\)",
            "\\(x = At^2\\)",
            "\\(x = A/t\\)"
          ],
          "correctAnswer": 0,
          "explanation": "SHM displacement is sinusoidal: \\(x = A\\cos(\\omega t + \\phi)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-10",
          "question": "A pendulum taken to the Moon (weaker gravity) would have a period that is",
          "options": [
            "longer",
            "shorter",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(T = 2\\pi\\sqrt{L/g}\\), smaller g gives a longer period.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-hard-1",
          "question": "In SHM with amplitude \\(A\\), at what displacement is the kinetic energy equal to the potential energy?",
          "options": [
            "\\(x = A/\\sqrt{2}\\)",
            "\\(x = A/2\\)",
            "\\(x = A\\)",
            "\\(x = 0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "KE = PE when \\(\\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(\\tfrac{1}{2}kA^2)\\), so \\(x^2 = A^2/2\\), giving \\(x = A/\\sqrt{2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-2",
          "question": "The maximum speed of a mass-spring oscillator is",
          "options": [
            "\\(v_{max} = A\\omega\\)",
            "\\(v_{max} = A/\\omega\\)",
            "\\(v_{max} = A\\omega^2\\)",
            "\\(v_{max} = \\omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Maximum speed occurs at equilibrium: \\(v_{max} = A\\omega = A\\sqrt{k/m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-3",
          "question": "The maximum acceleration in SHM is",
          "options": [
            "\\(a_{max} = A\\omega^2\\)",
            "\\(a_{max} = A\\omega\\)",
            "\\(a_{max} = A/\\omega\\)",
            "\\(a_{max} = \\omega^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(a = -\\omega^2 x\\), the maximum acceleration (at \\(x = A\\)) is \\(a_{max} = A\\omega^2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-4",
          "question": "Why is the period of a simple pendulum independent of the bob's mass?",
          "options": [
            "Both the restoring force and inertia scale with mass, so mass cancels",
            "mass is negligible",
            "gravity has no mass dependence",
            "the string absorbs mass effects"
          ],
          "correctAnswer": 0,
          "explanation": "The gravitational restoring force is proportional to m, and so is the inertia; the mass cancels in the equation of motion, leaving period independent of mass.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-5",
          "question": "A mass-spring oscillator has total energy \\(E = \\tfrac{1}{2}kA^2\\). If the amplitude doubles, the total energy",
          "options": [
            "quadruples",
            "doubles",
            "halves",
            "stays the same"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(E \\propto A^2\\), doubling the amplitude multiplies the energy by 4.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-6",
          "question": "For SHM \\(x = A\\cos(\\omega t)\\), the velocity is",
          "options": [
            "\\(v = -A\\omega\\sin(\\omega t)\\)",
            "\\(v = A\\omega\\cos(\\omega t)\\)",
            "\\(v = -A\\omega^2\\cos(\\omega t)\\)",
            "\\(v = A\\sin(\\omega t)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiating position: \\(v = \\frac{dx}{dt} = -A\\omega\\sin(\\omega t)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-7",
          "question": "Two identical springs are connected in parallel to a mass. Compared to one spring, the period is",
          "options": [
            "shorter (effective k doubles)",
            "longer",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Springs in parallel add their constants, doubling k; since \\(T \\propto 1/\\sqrt{k}\\), the period decreases (by \\(1/\\sqrt{2}\\)).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-8",
          "question": "A damped oscillator loses energy over time. Its amplitude",
          "options": [
            "decreases gradually",
            "stays constant",
            "increases",
            "remains at maximum"
          ],
          "correctAnswer": 0,
          "explanation": "Damping removes mechanical energy, so the amplitude of oscillation gradually decreases.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-9",
          "question": "Resonance occurs when a system is driven at",
          "options": [
            "its natural frequency, producing large amplitude",
            "any frequency",
            "a very high frequency only",
            "zero frequency"
          ],
          "correctAnswer": 0,
          "explanation": "When the driving frequency matches the system's natural frequency, energy transfer is maximal and the amplitude grows large—resonance.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-10",
          "question": "For a mass on a vertical spring, the oscillation period compared to the same spring horizontal is",
          "options": [
            "the same",
            "longer",
            "shorter",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Gravity only shifts the equilibrium position; the period \\(T = 2\\pi\\sqrt{m/k}\\) is unchanged whether the spring is vertical or horizontal.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 8,
      "title": "Fluids",
      "questions": [
        {
          "id": "q-u8-easy-1",
          "question": "Density is defined as",
          "options": [
            "mass per unit volume",
            "weight per area",
            "force per area",
            "volume per mass"
          ],
          "correctAnswer": 0,
          "explanation": "Density is \\(\\rho = m/V\\), mass per unit volume.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-2",
          "question": "Pressure is defined as",
          "options": [
            "force per unit area",
            "force times area",
            "mass per volume",
            "force times distance"
          ],
          "correctAnswer": 0,
          "explanation": "Pressure is \\(P = F/A\\), force per unit area.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-3",
          "question": "The pressure at depth \\(h\\) in a fluid is",
          "options": [
            "\\(P = \\rho g h\\) (plus atmospheric)",
            "\\(P = \\rho/gh\\)",
            "\\(P = gh\\)",
            "\\(P = \\rho g/h\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Gauge pressure at depth h in a fluid is \\(P = \\rho g h\\); absolute pressure adds atmospheric pressure.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-4",
          "question": "Buoyant force on a submerged object equals",
          "options": [
            "the weight of the fluid displaced",
            "the object's weight",
            "zero",
            "the object's volume"
          ],
          "correctAnswer": 0,
          "explanation": "Archimedes' principle: the buoyant force equals the weight of the displaced fluid.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-5",
          "question": "An object floats when",
          "options": [
            "its average density is less than the fluid's",
            "it is heavier than the fluid",
            "it has no volume",
            "the fluid is a gas"
          ],
          "correctAnswer": 0,
          "explanation": "An object floats if its average density is less than the fluid's, so the buoyant force can support its weight.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-6",
          "question": "The continuity equation for an incompressible fluid states that",
          "options": [
            "\\(A_1 v_1 = A_2 v_2\\)",
            "\\(P_1 = P_2\\)",
            "\\(A_1 = A_2\\)",
            "\\(v_1 = v_2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Continuity: \\(A_1 v_1 = A_2 v_2\\); flow speeds up where the cross-sectional area is smaller.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-7",
          "question": "Bernoulli's principle relates fluid speed and",
          "options": [
            "pressure (faster flow has lower pressure)",
            "temperature only",
            "density only",
            "mass"
          ],
          "correctAnswer": 0,
          "explanation": "Bernoulli's principle: in a flowing fluid, higher speed corresponds to lower pressure.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-8",
          "question": "The SI unit of pressure is the",
          "options": [
            "pascal",
            "newton",
            "joule",
            "watt"
          ],
          "correctAnswer": 0,
          "explanation": "Pressure is measured in pascals (Pa), where \\(1\\ \\text{Pa} = 1\\ \\text{N/m}^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-9",
          "question": "Pressure in a fluid at a given depth acts",
          "options": [
            "equally in all directions",
            "only downward",
            "only upward",
            "only sideways"
          ],
          "correctAnswer": 0,
          "explanation": "At a given depth, fluid pressure acts equally in all directions.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-10",
          "question": "An object fully submerged displaces a volume of fluid equal to",
          "options": [
            "its own volume",
            "its weight",
            "half its volume",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A fully submerged object displaces fluid equal to its entire volume.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-medium-1",
          "question": "The pressure at the bottom of a \\(2\\ \\text{m}\\) column of water (\\(\\rho = 1000\\ \\text{kg/m}^3\\), \\(g = 10\\)) is (gauge)",
          "options": [
            "\\(20{,}000\\ \\text{Pa}\\)",
            "\\(2000\\ \\text{Pa}\\)",
            "\\(200\\ \\text{Pa}\\)",
            "\\(100{,}000\\ \\text{Pa}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(P = \\rho g h = 1000 \\times 10 \\times 2 = 20{,}000\\ \\text{Pa}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-2",
          "question": "Why does fluid speed increase when a pipe narrows?",
          "options": [
            "The continuity equation requires higher speed where area is smaller",
            "pressure pushes it",
            "gravity increases",
            "the fluid compresses"
          ],
          "correctAnswer": 0,
          "explanation": "By continuity \\(A_1 v_1 = A_2 v_2\\), reducing the area must increase the speed to keep the volume flow rate constant.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-3",
          "question": "A block floats with half its volume submerged. Its density is",
          "options": [
            "half the fluid's density",
            "equal to the fluid's",
            "twice the fluid's",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "For floating, the fraction submerged equals the density ratio; half submerged means the block's density is half the fluid's.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-4",
          "question": "A hydraulic lift works because",
          "options": [
            "pressure applied to a confined fluid is transmitted equally (Pascal's principle)",
            "fluids compress",
            "the fluid heats up",
            "of gravity only"
          ],
          "correctAnswer": 0,
          "explanation": "Pascal's principle: pressure applied to a confined fluid is transmitted undiminished, so a small force on a small piston lifts a large load on a large piston.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-5",
          "question": "According to Bernoulli's principle, where a fluid flows faster, the pressure is",
          "options": [
            "lower",
            "higher",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Bernoulli's equation shows that faster flow corresponds to lower pressure (for constant height).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-6",
          "question": "An object weighs less when submerged in water because of",
          "options": [
            "the upward buoyant force",
            "reduced gravity",
            "increased mass",
            "surface tension"
          ],
          "correctAnswer": 0,
          "explanation": "The buoyant force acts upward, reducing the object's apparent weight when submerged.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-7",
          "question": "Pressure in a fluid depends on depth but not on",
          "options": [
            "the shape or total volume of the container",
            "the fluid density",
            "g",
            "the depth"
          ],
          "correctAnswer": 0,
          "explanation": "Fluid pressure depends only on depth, density, and g—not on the container's shape or total amount of fluid.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-8",
          "question": "A steel ship floats even though steel is denser than water because",
          "options": [
            "its hollow shape gives it a low average density",
            "steel floats naturally",
            "of surface tension",
            "water is denser than steel"
          ],
          "correctAnswer": 0,
          "explanation": "The ship's hollow shape encloses air, lowering its average density below water's, allowing it to float.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-9",
          "question": "The volume flow rate of a fluid is",
          "options": [
            "\\(Q = Av\\)",
            "\\(Q = A/v\\)",
            "\\(Q = \\rho v\\)",
            "\\(Q = Pv\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Volume flow rate is \\(Q = Av\\), cross-sectional area times flow speed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-10",
          "question": "An airplane wing generates lift partly because air moves ___ over the top, creating ___ pressure there.",
          "options": [
            "faster; lower",
            "slower; higher",
            "faster; higher",
            "slower; lower"
          ],
          "correctAnswer": 0,
          "explanation": "Faster airflow over the top of the wing produces lower pressure (Bernoulli), and the pressure difference contributes to lift.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-hard-1",
          "question": "A \\(0.02\\ \\text{m}^3\\) object with density \\(600\\ \\text{kg/m}^3\\) floats in water (\\(1000\\ \\text{kg/m}^3\\)). What fraction is submerged?",
          "options": [
            "0.6",
            "0.4",
            "1.0",
            "0.2"
          ],
          "correctAnswer": 0,
          "explanation": "Fraction submerged = density ratio = \\(600/1000 = 0.6\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-2",
          "question": "Water flows through a pipe that narrows from area \\(A\\) to \\(A/3\\). The speed in the narrow section is",
          "options": [
            "3 times the original",
            "1/3 the original",
            "the same",
            "9 times"
          ],
          "correctAnswer": 0,
          "explanation": "By continuity \\(Av_1 = (A/3)v_2\\), so \\(v_2 = 3v_1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-3",
          "question": "A \\(2\\ \\text{kg}\\) object with volume \\(0.001\\ \\text{m}^3\\) is fully submerged in water. Its apparent weight is (use \\(g = 10\\), \\(\\rho_w = 1000\\))",
          "options": [
            "\\(10\\ \\text{N}\\)",
            "\\(20\\ \\text{N}\\)",
            "\\(30\\ \\text{N}\\)",
            "\\(0\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Weight \\(= 20\\ \\text{N}\\); buoyancy \\(= \\rho_w V g = 1000(0.001)(10) = 10\\ \\text{N}\\). Apparent weight \\(= 20 - 10 = 10\\ \\text{N}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-4",
          "question": "In a hydraulic lift, a force of \\(50\\ \\text{N}\\) on a piston of area \\(0.01\\ \\text{m}^2\\) lifts a load on a piston of area \\(0.5\\ \\text{m}^2\\). The maximum load force is",
          "options": [
            "\\(2500\\ \\text{N}\\)",
            "\\(50\\ \\text{N}\\)",
            "\\(500\\ \\text{N}\\)",
            "\\(25\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Equal pressure: \\(F_2 = F_1(A_2/A_1) = 50(0.5/0.01) = 2500\\ \\text{N}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-5",
          "question": "Why does the buoyant force not depend on the depth of a fully submerged object?",
          "options": [
            "It depends on the displaced volume, which is constant once fully submerged",
            "pressure is uniform",
            "depth cancels out",
            "the object shrinks"
          ],
          "correctAnswer": 0,
          "explanation": "Once fully submerged, the object displaces a fixed volume regardless of depth, so the buoyant force (weight of displaced fluid) stays constant.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-6",
          "question": "Bernoulli's equation is a statement of",
          "options": [
            "energy conservation for flowing fluids",
            "momentum conservation",
            "mass creation",
            "Newton's third law"
          ],
          "correctAnswer": 0,
          "explanation": "Bernoulli's equation expresses conservation of energy per unit volume for an ideal flowing fluid, relating pressure, speed, and height.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-7",
          "question": "Two objects of equal volume but different mass are fully submerged in water. The buoyant forces on them are",
          "options": [
            "equal (same displaced volume)",
            "greater on the heavier one",
            "greater on the lighter one",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Buoyant force depends only on displaced volume; equal volumes displace equal fluid, so the buoyant forces are equal (though their apparent weights differ).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-8",
          "question": "Water flows from a wide, slow section to a narrow, fast section (same height). The pressure in the narrow section is",
          "options": [
            "lower than in the wide section",
            "higher",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "By Bernoulli's principle, the faster-moving fluid in the narrow section has lower pressure.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-9",
          "question": "A helium balloon rises because",
          "options": [
            "the buoyant force from displaced air exceeds the balloon's weight",
            "helium has no mass",
            "gravity pushes up",
            "of surface tension"
          ],
          "correctAnswer": 0,
          "explanation": "The balloon's average density (helium plus material) is less than air's, so the buoyant force exceeds its weight and it rises.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-10",
          "question": "Water exits a hole at depth \\(h\\) below the surface of an open tank with speed (Torricelli's theorem)",
          "options": [
            "\\(\\sqrt{2gh}\\)",
            "\\(\\sqrt{gh}\\)",
            "\\(2gh\\)",
            "\\(\\rho gh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Torricelli's theorem (from Bernoulli's equation) gives the efflux speed \\(v = \\sqrt{2gh}\\), the same as a freely falling object dropped through height h.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}

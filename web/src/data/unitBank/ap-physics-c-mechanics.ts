import type { SubjectUnitBank } from './types'

export const BANK_AP_PHYSICS_C_MECHANICS: SubjectUnitBank = {
  "label": "AP Physics C: Mechanics",
  "slug": "ap-physics-c-mechanics",
  "units": [
    {
      "unitNumber": 1,
      "title": "Kinematics",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "For an object moving in one dimension, velocity is defined as the",
          "options": [
            "derivative of position with respect to time",
            "integral of acceleration",
            "product of mass and velocity",
            "derivative of acceleration"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity is \\(v = \\frac{dx}{dt}\\), the time derivative of position.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "Acceleration is defined as the",
          "options": [
            "derivative of velocity with respect to time",
            "integral of position",
            "derivative of position",
            "product of force and time"
          ],
          "correctAnswer": 0,
          "explanation": "Acceleration is \\(a = \\frac{dv}{dt}\\), the time derivative of velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "An object starts from rest and accelerates uniformly at \\(2\\ \\text{m/s}^2\\). Its velocity after 5 s is",
          "options": [
            "\\(10\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(5\\ \\text{m/s}\\)",
            "\\(25\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Using \\(v = v_0 + at = 0 + (2)(5) = 10\\ \\text{m/s}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "For constant acceleration, which kinematic equation gives displacement?",
          "options": [
            "\\(x = x_0 + v_0 t + \\tfrac{1}{2}at^2\\)",
            "\\(x = v/t\\)",
            "\\(x = ma\\)",
            "\\(x = \\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The kinematic equation \\(x = x_0 + v_0 t + \\tfrac{1}{2}at^2\\) gives position under constant acceleration.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "The acceleration due to gravity near Earth's surface is approximately",
          "options": [
            "\\(9.8\\ \\text{m/s}^2\\)",
            "\\(1.0\\ \\text{m/s}^2\\)",
            "\\(98\\ \\text{m/s}^2\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Near Earth's surface, \\(g \\approx 9.8\\ \\text{m/s}^2\\) directed downward.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "On a position-versus-time graph, the slope represents",
          "options": [
            "velocity",
            "acceleration",
            "displacement",
            "force"
          ],
          "correctAnswer": 0,
          "explanation": "The slope of a position-time graph is \\(\\frac{dx}{dt} = v\\), the velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "On a velocity-versus-time graph, the area under the curve represents",
          "options": [
            "displacement",
            "acceleration",
            "force",
            "jerk"
          ],
          "correctAnswer": 0,
          "explanation": "The area under a velocity-time curve is \\(\\int v\\,dt = \\Delta x\\), the displacement.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "In projectile motion (no air resistance), the horizontal acceleration is",
          "options": [
            "zero",
            "\\(9.8\\ \\text{m/s}^2\\)",
            "increasing",
            "equal to g"
          ],
          "correctAnswer": 0,
          "explanation": "With no air resistance, horizontal acceleration is zero; only gravity acts vertically.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "An object thrown straight up has, at the top of its path, a velocity of",
          "options": [
            "zero",
            "maximum",
            "\\(9.8\\ \\text{m/s}\\)",
            "its initial value"
          ],
          "correctAnswer": 0,
          "explanation": "At the peak, the vertical velocity is momentarily zero before the object falls back down.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Displacement differs from distance in that displacement is",
          "options": [
            "a vector with direction, while distance is a scalar",
            "always larger",
            "always zero",
            "the same as speed"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement is a vector (change in position with direction), while distance is a scalar (total path length).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "A particle's position is \\(x(t) = 3t^2 - 2t\\). Its velocity at \\(t = 2\\ \\text{s}\\) is",
          "options": [
            "\\(10\\ \\text{m/s}\\)",
            "\\(8\\ \\text{m/s}\\)",
            "\\(12\\ \\text{m/s}\\)",
            "\\(4\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = \\frac{dx}{dt} = 6t - 2\\); at \\(t = 2\\), \\(v = 12 - 2 = 10\\ \\text{m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "A particle has velocity \\(v(t) = 4t\\). Its acceleration is",
          "options": [
            "\\(4\\ \\text{m/s}^2\\), constant",
            "\\(4t\\)",
            "\\(2t^2\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "\\(a = \\frac{dv}{dt} = 4\\ \\text{m/s}^2\\), a constant.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "A ball is dropped from rest. How far does it fall in 3 s? (Use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(45\\ \\text{m}\\)",
            "\\(30\\ \\text{m}\\)",
            "\\(90\\ \\text{m}\\)",
            "\\(15\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x = \\tfrac{1}{2}gt^2 = \\tfrac{1}{2}(10)(3)^2 = 45\\ \\text{m}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "A projectile is launched at angle \\(\\theta\\) with speed \\(v_0\\). Its horizontal velocity component is",
          "options": [
            "\\(v_0\\cos\\theta\\)",
            "\\(v_0\\sin\\theta\\)",
            "\\(v_0\\tan\\theta\\)",
            "\\(v_0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The horizontal component of the launch velocity is \\(v_{0x} = v_0\\cos\\theta\\), which stays constant.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "To find velocity from acceleration \\(a(t)\\), one must",
          "options": [
            "integrate a(t) with respect to time",
            "differentiate a(t)",
            "multiply by time",
            "divide by mass"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = \\int a(t)\\,dt + v_0\\); velocity is the integral of acceleration.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "A car traveling at \\(20\\ \\text{m/s}\\) brakes with constant acceleration and stops in \\(4\\ \\text{s}\\). Its acceleration is",
          "options": [
            "\\(-5\\ \\text{m/s}^2\\)",
            "\\(5\\ \\text{m/s}^2\\)",
            "\\(-20\\ \\text{m/s}^2\\)",
            "\\(-80\\ \\text{m/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(a = \\frac{\\Delta v}{\\Delta t} = \\frac{0 - 20}{4} = -5\\ \\text{m/s}^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "For a projectile, the time to reach maximum height depends on the",
          "options": [
            "initial vertical velocity component and g",
            "horizontal velocity",
            "total distance",
            "mass"
          ],
          "correctAnswer": 0,
          "explanation": "Time to peak is \\(t = \\frac{v_{0y}}{g}\\), depending on the initial vertical velocity and gravity.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "An object moving with velocity \\(v(t) = 6 - 2t\\) reverses direction at",
          "options": [
            "\\(t = 3\\ \\text{s}\\)",
            "\\(t = 6\\ \\text{s}\\)",
            "\\(t = 2\\ \\text{s}\\)",
            "\\(t = 0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity is zero (direction change) when \\(6 - 2t = 0\\), so \\(t = 3\\ \\text{s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "Using \\(v^2 = v_0^2 + 2a\\Delta x\\), an object accelerating from \\(0\\) at \\(3\\ \\text{m/s}^2\\) over \\(6\\ \\text{m}\\) reaches speed",
          "options": [
            "\\(6\\ \\text{m/s}\\)",
            "\\(18\\ \\text{m/s}\\)",
            "\\(36\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v^2 = 0 + 2(3)(6) = 36\\), so \\(v = 6\\ \\text{m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "Two objects are dropped, one from twice the height of the other. The ratio of their fall times is",
          "options": [
            "\\(\\sqrt{2} : 1\\)",
            "\\(2 : 1\\)",
            "\\(4 : 1\\)",
            "\\(1 : 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(h = \\tfrac{1}{2}gt^2\\), \\(t \\propto \\sqrt{h}\\); doubling h multiplies time by \\(\\sqrt{2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "A particle's acceleration is \\(a(t) = 6t\\). If it starts from rest at the origin, its position at \\(t = 2\\ \\text{s}\\) is",
          "options": [
            "\\(8\\ \\text{m}\\)",
            "\\(12\\ \\text{m}\\)",
            "\\(24\\ \\text{m}\\)",
            "\\(6\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = \\int 6t\\,dt = 3t^2\\); \\(x = \\int 3t^2\\,dt = t^3\\). At \\(t = 2\\), \\(x = 8\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "A projectile is launched at \\(30°\\) above horizontal with speed \\(20\\ \\text{m/s}\\). Its maximum height is (use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(5\\ \\text{m}\\)",
            "\\(10\\ \\text{m}\\)",
            "\\(20\\ \\text{m}\\)",
            "\\(2.5\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v_{0y} = 20\\sin30° = 10\\ \\text{m/s}\\). Max height \\(= \\frac{v_{0y}^2}{2g} = \\frac{100}{20} = 5\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "An object has velocity \\(v(t) = t^2 - 4t + 3\\). During the interval \\(1 < t < 3\\), the object is",
          "options": [
            "moving in the negative direction (v < 0)",
            "moving in the positive direction",
            "at rest",
            "accelerating negatively only"
          ],
          "correctAnswer": 0,
          "explanation": "Factoring: \\(v = (t-1)(t-3)\\), which is negative for \\(1 < t < 3\\), so the object moves in the negative direction.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "A ball thrown upward at \\(20\\ \\text{m/s}\\) returns to its launch height. Its total time in the air is (use \\(g = 10\\ \\text{m/s}^2\\))",
          "options": [
            "\\(4\\ \\text{s}\\)",
            "\\(2\\ \\text{s}\\)",
            "\\(8\\ \\text{s}\\)",
            "\\(1\\ \\text{s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Time up \\(= v_0/g = 20/10 = 2\\ \\text{s}\\); total time is twice that, \\(4\\ \\text{s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "For a projectile launched over level ground, the range is maximized at a launch angle of",
          "options": [
            "\\(45°\\)",
            "\\(30°\\)",
            "\\(60°\\)",
            "\\(90°\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Range \\(R = \\frac{v_0^2\\sin(2\\theta)}{g}\\) is maximized when \\(\\sin(2\\theta) = 1\\), i.e., \\(\\theta = 45°\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "A particle moves such that \\(x(t) = t^3 - 6t^2 + 9t\\). Its acceleration is zero at",
          "options": [
            "\\(t = 2\\ \\text{s}\\)",
            "\\(t = 1\\ \\text{s}\\)",
            "\\(t = 3\\ \\text{s}\\)",
            "\\(t = 0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = 3t^2 - 12t + 9\\), \\(a = 6t - 12\\). Setting \\(a = 0\\) gives \\(t = 2\\ \\text{s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "Two projectiles are launched with the same speed at angles \\(30°\\) and \\(60°\\). Compared to each other, they have",
          "options": [
            "the same horizontal range",
            "different ranges",
            "the same maximum height",
            "the same time of flight"
          ],
          "correctAnswer": 0,
          "explanation": "Complementary angles (\\(30°\\) and \\(60°\\)) produce the same range since \\(\\sin(2\\theta)\\) is equal for both (\\(\\sin60° = \\sin120°\\)).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "An object falls from rest and, due to air resistance, approaches a constant terminal velocity. At terminal velocity, its acceleration is",
          "options": [
            "zero",
            "g",
            "increasing",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "At terminal velocity, the drag force balances gravity, so the net force and thus the acceleration are zero.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A car's velocity-time graph is a straight line from \\((0, 4\\ \\text{m/s})\\) to \\((6\\ \\text{s}, 16\\ \\text{m/s})\\). The displacement over this interval is",
          "options": [
            "\\(60\\ \\text{m}\\)",
            "\\(48\\ \\text{m}\\)",
            "\\(30\\ \\text{m}\\)",
            "\\(96\\ \\text{m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement is the trapezoidal area: \\(\\tfrac{1}{2}(4 + 16)(6) = 60\\ \\text{m}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "A ball is thrown horizontally from a height \\(h\\). Doubling \\(h\\) changes its horizontal range (before landing) by a factor of",
          "options": [
            "\\(\\sqrt{2}\\)",
            "2",
            "4",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "Fall time \\(t = \\sqrt{2h/g} \\propto \\sqrt{h}\\), and range \\(= v_x t \\propto \\sqrt{h}\\). Doubling h multiplies range by \\(\\sqrt{2}\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Newton's Laws of Motion",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "Newton's second law states that",
          "options": [
            "\\(F_{net} = ma\\)",
            "\\(F = mv\\)",
            "\\(F = \\tfrac{1}{2}mv^2\\)",
            "\\(F = mgh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Newton's second law: the net force equals mass times acceleration, \\(F_{net} = ma\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "Newton's first law states that an object in motion",
          "options": [
            "stays in motion unless acted on by a net force",
            "always slows down",
            "always speeds up",
            "requires a force to keep moving"
          ],
          "correctAnswer": 0,
          "explanation": "The law of inertia: an object continues at constant velocity unless a net external force acts on it.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "Newton's third law states that for every action force there is",
          "options": [
            "an equal and opposite reaction force",
            "no reaction",
            "a smaller reaction",
            "a force in the same direction"
          ],
          "correctAnswer": 0,
          "explanation": "Forces come in pairs: if A exerts a force on B, B exerts an equal and opposite force on A.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "The weight of an object of mass \\(m\\) near Earth's surface is",
          "options": [
            "\\(mg\\)",
            "\\(ma\\)",
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(m/g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Weight is the gravitational force, \\(W = mg\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "The force of static friction",
          "options": [
            "opposes impending motion up to a maximum value",
            "causes motion",
            "is always zero",
            "acts in the direction of motion"
          ],
          "correctAnswer": 0,
          "explanation": "Static friction opposes the tendency to move, adjusting up to a maximum \\(\\mu_s N\\) before slipping begins.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "The normal force is",
          "options": [
            "the perpendicular support force from a surface",
            "the same as weight always",
            "a frictional force",
            "directed downward"
          ],
          "correctAnswer": 0,
          "explanation": "The normal force is the contact force perpendicular to a surface, supporting an object.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "If the net force on an object is zero, the object is",
          "options": [
            "in equilibrium (constant velocity or at rest)",
            "accelerating",
            "speeding up",
            "turning"
          ],
          "correctAnswer": 0,
          "explanation": "Zero net force means zero acceleration, so the object is in equilibrium—at rest or moving at constant velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "Kinetic friction force is given by",
          "options": [
            "\\(f_k = \\mu_k N\\)",
            "\\(f_k = mg\\)",
            "\\(f_k = ma\\)",
            "\\(f_k = N/\\mu_k\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic friction is \\(f_k = \\mu_k N\\), where \\(\\mu_k\\) is the coefficient of kinetic friction and \\(N\\) the normal force.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "A free-body diagram shows",
          "options": [
            "all the forces acting on a single object",
            "the object's velocity",
            "the energy of the object",
            "the object's path"
          ],
          "correctAnswer": 0,
          "explanation": "A free-body diagram represents all external forces acting on a single object as vectors.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "The units of force in SI are",
          "options": [
            "newtons (kg·m/s²)",
            "joules",
            "watts",
            "kilograms"
          ],
          "correctAnswer": 0,
          "explanation": "Force is measured in newtons, where \\(1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m/s}^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "A \\(2\\ \\text{kg}\\) object experiences a net force of \\(10\\ \\text{N}\\). Its acceleration is",
          "options": [
            "\\(5\\ \\text{m/s}^2\\)",
            "\\(20\\ \\text{m/s}^2\\)",
            "\\(2\\ \\text{m/s}^2\\)",
            "\\(0.2\\ \\text{m/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(a = F/m = 10/2 = 5\\ \\text{m/s}^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "A block on a horizontal surface (\\(\\mu_k = 0.2\\)) has weight \\(50\\ \\text{N}\\). The kinetic friction force is",
          "options": [
            "\\(10\\ \\text{N}\\)",
            "\\(50\\ \\text{N}\\)",
            "\\(0.2\\ \\text{N}\\)",
            "\\(250\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "On a horizontal surface \\(N = W = 50\\ \\text{N}\\), so \\(f_k = \\mu_k N = 0.2(50) = 10\\ \\text{N}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "An object on a frictionless incline of angle \\(\\theta\\) has acceleration along the incline of",
          "options": [
            "\\(g\\sin\\theta\\)",
            "\\(g\\cos\\theta\\)",
            "\\(g\\tan\\theta\\)",
            "\\(g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The component of gravity along a frictionless incline gives acceleration \\(a = g\\sin\\theta\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "For an object on a horizontal surface, the normal force equals its weight only when",
          "options": [
            "there are no other vertical forces",
            "friction is present",
            "the object accelerates",
            "an applied force acts at an angle"
          ],
          "correctAnswer": 0,
          "explanation": "On a horizontal surface with no other vertical forces, \\(N = mg\\); applied forces at angles or vertical accelerations change this.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "Two blocks of mass \\(m_1\\) and \\(m_2\\) are connected by a string over a frictionless pulley (Atwood machine). The acceleration magnitude is",
          "options": [
            "\\(\\frac{(m_1 - m_2)g}{m_1 + m_2}\\)",
            "\\((m_1 - m_2)g\\)",
            "\\(\\frac{g}{2}\\)",
            "\\((m_1 + m_2)g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For an Atwood machine, the net force \\((m_1 - m_2)g\\) accelerates total mass \\((m_1 + m_2)\\), giving \\(a = \\frac{(m_1 - m_2)g}{m_1 + m_2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "A \\(1000\\ \\text{kg}\\) car accelerates at \\(3\\ \\text{m/s}^2\\). The net force on it is",
          "options": [
            "\\(3000\\ \\text{N}\\)",
            "\\(333\\ \\text{N}\\)",
            "\\(1000\\ \\text{N}\\)",
            "\\(9800\\ \\text{N}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(F = ma = 1000 \\times 3 = 3000\\ \\text{N}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "When you push on a wall and it does not move, the wall",
          "options": [
            "pushes back on you with an equal and opposite force",
            "exerts no force",
            "pushes with a greater force",
            "pushes in the same direction"
          ],
          "correctAnswer": 0,
          "explanation": "By Newton's third law, the wall exerts a force on you equal in magnitude and opposite in direction to your push.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "For circular motion at constant speed, the net force points",
          "options": [
            "toward the center (centripetal)",
            "tangent to the circle",
            "outward",
            "in the direction of motion"
          ],
          "correctAnswer": 0,
          "explanation": "Uniform circular motion requires a centripetal net force directed toward the center, of magnitude \\(mv^2/r\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "An object moving in a circle of radius \\(r\\) at speed \\(v\\) has centripetal acceleration",
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
          "id": "q-u2-medium-10",
          "question": "A block is in equilibrium on an incline with friction. The friction force",
          "options": [
            "balances the component of gravity along the incline",
            "is zero",
            "points down the incline",
            "exceeds gravity"
          ],
          "correctAnswer": 0,
          "explanation": "For a stationary block on an incline, static friction points up the incline and balances the gravity component \\(mg\\sin\\theta\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "A block of mass \\(m\\) on an incline of angle \\(\\theta\\) with kinetic friction coefficient \\(\\mu_k\\) slides down. Its acceleration is",
          "options": [
            "\\(g(\\sin\\theta - \\mu_k\\cos\\theta)\\)",
            "\\(g\\sin\\theta\\)",
            "\\(g\\mu_k\\cos\\theta\\)",
            "\\(g(\\sin\\theta + \\mu_k\\cos\\theta)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Along the incline: \\(ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta\\), so \\(a = g(\\sin\\theta - \\mu_k\\cos\\theta)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "A velocity-dependent drag force \\(F = -bv\\) acts on a falling object of mass \\(m\\). Its terminal velocity is",
          "options": [
            "\\(mg/b\\)",
            "\\(bg/m\\)",
            "\\(b/(mg)\\)",
            "\\(mgb\\)"
          ],
          "correctAnswer": 0,
          "explanation": "At terminal velocity, \\(mg = bv_t\\), so \\(v_t = mg/b\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "A car rounds a flat curve of radius \\(r\\). The maximum speed without skidding depends on friction as",
          "options": [
            "\\(v_{max} = \\sqrt{\\mu_s g r}\\)",
            "\\(v_{max} = \\mu_s g r\\)",
            "\\(v_{max} = \\sqrt{g/r}\\)",
            "\\(v_{max} = \\mu_s r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Static friction provides the centripetal force: \\(\\mu_s mg = mv^2/r\\), so \\(v_{max} = \\sqrt{\\mu_s g r}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "In an Atwood machine with \\(m_1 = 3\\ \\text{kg}\\) and \\(m_2 = 2\\ \\text{kg}\\), the acceleration is (use \\(g = 10\\ \\text{m/s}^2\\))",
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
          "id": "q-u2-hard-5",
          "question": "For a falling object with drag \\(F = -bv\\), the equation of motion \\(m\\frac{dv}{dt} = mg - bv\\) describes velocity that",
          "options": [
            "asymptotically approaches terminal velocity",
            "increases without bound",
            "stays constant",
            "decreases to zero"
          ],
          "correctAnswer": 0,
          "explanation": "The solution approaches terminal velocity \\(v_t = mg/b\\) asymptotically as drag grows to balance gravity.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "A block is pushed with force \\(F\\) at angle \\(\\theta\\) below horizontal across a rough floor. Compared to a horizontal push, the normal force is",
          "options": [
            "greater, because the downward force component increases N",
            "smaller",
            "unchanged",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Pushing at an angle below horizontal adds a downward component (\\(F\\sin\\theta\\)) to the normal force: \\(N = mg + F\\sin\\theta\\), increasing friction.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "Two blocks (\\(m_1\\) on top of \\(m_2\\)) accelerate together. The force that accelerates the top block is provided by",
          "options": [
            "static friction between the blocks",
            "gravity",
            "the normal force",
            "tension"
          ],
          "correctAnswer": 0,
          "explanation": "For the top block to accelerate with the bottom one, static friction between them provides the necessary horizontal force.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "A conical pendulum of length \\(L\\) makes angle \\(\\theta\\) with vertical. The tension's vertical component balances",
          "options": [
            "the weight \\(mg\\)",
            "the centripetal force",
            "the horizontal force",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "In a conical pendulum, \\(T\\cos\\theta = mg\\) (vertical balance), while \\(T\\sin\\theta\\) provides the centripetal force.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "An object on a banked curve (angle \\(\\theta\\), no friction) can travel at a speed such that",
          "options": [
            "the horizontal component of the normal force provides the centripetal force",
            "friction provides all the force",
            "gravity provides the centripetal force",
            "no force is needed"
          ],
          "correctAnswer": 0,
          "explanation": "On a frictionless banked curve, the horizontal component of the normal force \\(N\\sin\\theta\\) supplies the centripetal force \\(mv^2/r\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "A force \\(F(t)\\) is applied to a mass. To find the velocity as a function of time, one uses",
          "options": [
            "\\(v = v_0 + \\frac{1}{m}\\int F\\,dt\\) (the impulse-momentum relationship)",
            "\\(v = F/m\\)",
            "\\(v = Ft\\)",
            "\\(v = \\tfrac{1}{2}Ft^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(F = m\\frac{dv}{dt}\\), integrating gives \\(v = v_0 + \\frac{1}{m}\\int F\\,dt\\), incorporating the impulse of the force.",
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
          "question": "Work done by a constant force is defined as",
          "options": [
            "\\(W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta\\)",
            "\\(W = ma\\)",
            "\\(W = mv\\)",
            "\\(W = \\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Work is the dot product of force and displacement: \\(W = Fd\\cos\\theta\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "Kinetic energy is given by",
          "options": [
            "\\(KE = \\tfrac{1}{2}mv^2\\)",
            "\\(KE = mgh\\)",
            "\\(KE = Fd\\)",
            "\\(KE = mv\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic energy is \\(KE = \\tfrac{1}{2}mv^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "Gravitational potential energy near Earth's surface is",
          "options": [
            "\\(PE = mgh\\)",
            "\\(PE = \\tfrac{1}{2}mv^2\\)",
            "\\(PE = Fd\\)",
            "\\(PE = ma\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Near Earth's surface, gravitational potential energy is \\(PE = mgh\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "The work-energy theorem states that the net work equals",
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
          "question": "Power is defined as the rate of doing work, or",
          "options": [
            "\\(P = \\frac{dW}{dt}\\)",
            "\\(P = Fd\\)",
            "\\(P = mv\\)",
            "\\(P = \\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Power is the rate of energy transfer: \\(P = \\frac{dW}{dt}\\), also \\(P = Fv\\).",
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
          "explanation": "Energy and work are measured in joules (J), where \\(1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "A conservative force is one for which",
          "options": [
            "the work done is path-independent",
            "work always equals zero",
            "energy is not conserved",
            "friction is involved"
          ],
          "correctAnswer": 0,
          "explanation": "For a conservative force (like gravity), the work done depends only on endpoints, not the path taken.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "The elastic potential energy stored in a spring is",
          "options": [
            "\\(\\tfrac{1}{2}kx^2\\)",
            "\\(kx\\)",
            "\\(\\tfrac{1}{2}mv^2\\)",
            "\\(mgh\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A spring stretched or compressed by \\(x\\) stores \\(PE = \\tfrac{1}{2}kx^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "When only conservative forces act, the total mechanical energy is",
          "options": [
            "conserved (constant)",
            "increasing",
            "decreasing",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "With only conservative forces, mechanical energy (KE + PE) is conserved.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "The SI unit of power is the",
          "options": [
            "watt",
            "joule",
            "newton",
            "volt"
          ],
          "correctAnswer": 0,
          "explanation": "Power is measured in watts (W), where \\(1\\ \\text{W} = 1\\ \\text{J/s}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "A \\(2\\ \\text{kg}\\) object moving at \\(3\\ \\text{m/s}\\) has kinetic energy",
          "options": [
            "\\(9\\ \\text{J}\\)",
            "\\(6\\ \\text{J}\\)",
            "\\(18\\ \\text{J}\\)",
            "\\(3\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}(2)(3)^2 = 9\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "A force of \\(10\\ \\text{N}\\) pushes an object \\(5\\ \\text{m}\\) in the direction of the force. The work done is",
          "options": [
            "\\(50\\ \\text{J}\\)",
            "\\(2\\ \\text{J}\\)",
            "\\(15\\ \\text{J}\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(W = Fd\\cos0° = 10 \\times 5 = 50\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "An object falls from rest through height \\(h\\). Just before landing, its speed is",
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
          "id": "q-u3-medium-4",
          "question": "The work done by a variable force is found by",
          "options": [
            "integrating force over displacement, \\(W = \\int F\\,dx\\)",
            "multiplying F and d",
            "dividing F by d",
            "F times time"
          ],
          "correctAnswer": 0,
          "explanation": "For a variable force, \\(W = \\int F\\,dx\\), the area under the force-position curve.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "A motor lifts a \\(100\\ \\text{N}\\) load at constant speed \\(2\\ \\text{m/s}\\). Its power output is",
          "options": [
            "\\(200\\ \\text{W}\\)",
            "\\(50\\ \\text{W}\\)",
            "\\(100\\ \\text{W}\\)",
            "\\(2\\ \\text{W}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(P = Fv = 100 \\times 2 = 200\\ \\text{W}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "Work done by friction is typically",
          "options": [
            "negative, removing mechanical energy",
            "positive",
            "zero",
            "conservative"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic friction opposes motion, doing negative work and dissipating mechanical energy as heat.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "A spring with \\(k = 200\\ \\text{N/m}\\) is compressed \\(0.1\\ \\text{m}\\). The stored energy is",
          "options": [
            "\\(1\\ \\text{J}\\)",
            "\\(20\\ \\text{J}\\)",
            "\\(10\\ \\text{J}\\)",
            "\\(0.1\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(PE = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.1)^2 = 1\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "If a force is perpendicular to an object's displacement, the work done is",
          "options": [
            "zero",
            "maximum",
            "negative",
            "equal to Fd"
          ],
          "correctAnswer": 0,
          "explanation": "When \\(\\theta = 90°\\), \\(W = Fd\\cos90° = 0\\); perpendicular forces do no work.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "The relationship between a conservative force and potential energy is",
          "options": [
            "\\(F = -\\frac{dU}{dx}\\)",
            "\\(F = \\frac{dU}{dx}\\)",
            "\\(F = U\\)",
            "\\(F = Ux\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A conservative force is the negative gradient of potential energy: \\(F = -\\frac{dU}{dx}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "A roller coaster car at the top of a hill has more ___ than at the bottom.",
          "options": [
            "gravitational potential energy",
            "kinetic energy",
            "momentum",
            "speed"
          ],
          "correctAnswer": 0,
          "explanation": "At the top, the car is higher, so it has more gravitational potential energy (and less kinetic energy).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "A block slides down a frictionless ramp of height \\(h\\) and then along a rough horizontal surface (\\(\\mu_k\\)). How far does it travel on the rough surface before stopping?",
          "options": [
            "\\(d = \\frac{h}{\\mu_k}\\)",
            "\\(d = \\mu_k h\\)",
            "\\(d = \\frac{\\mu_k}{h}\\)",
            "\\(d = h\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Energy: \\(mgh = \\mu_k mg\\,d\\), so \\(d = \\frac{h}{\\mu_k}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "A force \\(F(x) = 3x^2\\) acts on an object from \\(x = 0\\) to \\(x = 2\\). The work done is",
          "options": [
            "\\(8\\ \\text{J}\\)",
            "\\(12\\ \\text{J}\\)",
            "\\(6\\ \\text{J}\\)",
            "\\(4\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(W = \\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8\\ \\text{J}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "A pendulum of length \\(L\\) is released from horizontal. Its speed at the bottom is",
          "options": [
            "\\(\\sqrt{2gL}\\)",
            "\\(\\sqrt{gL}\\)",
            "\\(2gL\\)",
            "\\(\\sqrt{gL/2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The bob falls a height \\(L\\): \\(mgL = \\tfrac{1}{2}mv^2\\), so \\(v = \\sqrt{2gL}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "A potential energy function is \\(U(x) = x^2 - 4x\\). The equilibrium position (where force is zero) is at",
          "options": [
            "\\(x = 2\\)",
            "\\(x = 4\\)",
            "\\(x = 0\\)",
            "\\(x = -2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(F = -\\frac{dU}{dx} = -(2x - 4)\\); setting \\(F = 0\\) gives \\(x = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "A block of mass \\(m\\) is pushed against a spring (constant \\(k\\)), compressing it by \\(x\\), then released on a frictionless surface. The block's launch speed is",
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
          "id": "q-u3-hard-6",
          "question": "For \\(U(x) = x^2 - 4x\\), the equilibrium at \\(x = 2\\) is",
          "options": [
            "stable, because U has a minimum there",
            "unstable",
            "neutral",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\frac{d^2U}{dx^2} = 2 > 0\\), U is a minimum at \\(x = 2\\), indicating stable equilibrium.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "A car of power \\(P\\) accelerates from rest. At high speeds, its acceleration",
          "options": [
            "decreases, because \\(a = P/(mv)\\) falls as v increases",
            "increases",
            "stays constant",
            "becomes infinite"
          ],
          "correctAnswer": 0,
          "explanation": "At constant power, \\(F = P/v\\) and \\(a = P/(mv)\\), so acceleration decreases as speed increases.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "A block slides down a curved frictionless track from height \\(h\\). Its speed at the bottom depends on",
          "options": [
            "only the height h, not the shape of the track",
            "the track shape only",
            "the mass",
            "the horizontal distance"
          ],
          "correctAnswer": 0,
          "explanation": "By energy conservation, the final speed \\(v = \\sqrt{2gh}\\) depends only on the height dropped, not the path.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "An object is subject to force \\(F(x) = -kx\\) (a spring). The work done moving it from \\(x = 0\\) to \\(x = A\\) is",
          "options": [
            "\\(-\\tfrac{1}{2}kA^2\\)",
            "\\(\\tfrac{1}{2}kA^2\\)",
            "\\(-kA\\)",
            "\\(kA^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(W = \\int_0^A (-kx)\\,dx = -\\tfrac{1}{2}kA^2\\); the spring does negative work as it is stretched.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "A ball is thrown up with kinetic energy \\(KE_0\\). Ignoring air resistance, at half its maximum height its kinetic energy is",
          "options": [
            "\\(KE_0/2\\)",
            "\\(KE_0\\)",
            "\\(KE_0/4\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "At maximum height all \\(KE_0\\) becomes PE. At half that height, half the energy is PE and half remains KE, so \\(KE = KE_0/2\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Systems of Particles and Linear Momentum",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "Linear momentum is defined as",
          "options": [
            "\\(\\vec{p} = m\\vec{v}\\)",
            "\\(p = ma\\)",
            "\\(p = \\tfrac{1}{2}mv^2\\)",
            "\\(p = Fd\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum is the product of mass and velocity: \\(\\vec{p} = m\\vec{v}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "Impulse is defined as",
          "options": [
            "\\(\\vec{J} = \\vec{F}\\Delta t\\), equal to the change in momentum",
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
          "question": "In the absence of external forces, the total momentum of a system is",
          "options": [
            "conserved",
            "increasing",
            "decreasing",
            "zero always"
          ],
          "correctAnswer": 0,
          "explanation": "Conservation of momentum: with no net external force, total momentum stays constant.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "In a perfectly inelastic collision, the objects",
          "options": [
            "stick together after colliding",
            "bounce apart elastically",
            "conserve kinetic energy",
            "pass through each other"
          ],
          "correctAnswer": 0,
          "explanation": "In a perfectly inelastic collision, objects stick together; momentum is conserved but kinetic energy is not.",
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
          "explanation": "In an elastic collision, both momentum and kinetic energy are conserved.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "The center of mass of a system is",
          "options": [
            "the average position of mass, weighted by mass",
            "the geometric center always",
            "the heaviest point",
            "the point of highest velocity"
          ],
          "correctAnswer": 0,
          "explanation": "The center of mass is the mass-weighted average position of all the particles in a system.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "A \\(2\\ \\text{kg}\\) object moving at \\(3\\ \\text{m/s}\\) has momentum",
          "options": [
            "\\(6\\ \\text{kg·m/s}\\)",
            "\\(9\\ \\text{kg·m/s}\\)",
            "\\(1.5\\ \\text{kg·m/s}\\)",
            "\\(3\\ \\text{kg·m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(p = mv = 2 \\times 3 = 6\\ \\text{kg·m/s}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "A larger impulse can be achieved by",
          "options": [
            "applying a force for a longer time",
            "reducing the force",
            "reducing the time only",
            "increasing the mass"
          ],
          "correctAnswer": 0,
          "explanation": "Since impulse \\(J = F\\Delta t\\), applying force over a longer time (or a larger force) increases impulse.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "The momentum of a system's center of mass changes only due to",
          "options": [
            "external forces",
            "internal forces",
            "collisions between parts",
            "no forces"
          ],
          "correctAnswer": 0,
          "explanation": "Internal forces cancel by Newton's third law; only external forces change the total (center-of-mass) momentum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "The SI unit of momentum is",
          "options": [
            "kg·m/s",
            "newton",
            "joule",
            "watt"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum has units of kilogram-meters per second (kg·m/s), equivalent to N·s.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A \\(0.5\\ \\text{kg}\\) ball hits a wall at \\(4\\ \\text{m/s}\\) and rebounds at \\(4\\ \\text{m/s}\\). The magnitude of the impulse on the ball is",
          "options": [
            "\\(4\\ \\text{kg·m/s}\\)",
            "\\(2\\ \\text{kg·m/s}\\)",
            "\\(0\\)",
            "\\(8\\ \\text{kg·m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\Delta p = m(v_f - v_i) = 0.5(-4 - 4) = -4\\ \\text{kg·m/s}\\); magnitude \\(4\\ \\text{kg·m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "A \\(2\\ \\text{kg}\\) cart at \\(3\\ \\text{m/s}\\) collides and sticks to a \\(1\\ \\text{kg}\\) cart at rest. Their common velocity is",
          "options": [
            "\\(2\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)",
            "\\(1\\ \\text{m/s}\\)",
            "\\(1.5\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation: \\((2)(3) = (3)v\\), so \\(v = 2\\ \\text{m/s}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "Why do airbags reduce injury in a collision?",
          "options": [
            "They increase the time over which momentum changes, reducing the force",
            "they increase the force",
            "they reduce momentum change",
            "they eliminate the collision"
          ],
          "correctAnswer": 0,
          "explanation": "By extending the time \\(\\Delta t\\) for the same momentum change, airbags reduce the peak force (\\(F = \\Delta p/\\Delta t\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "A \\(60\\ \\text{kg}\\) person on frictionless ice throws a \\(2\\ \\text{kg}\\) ball at \\(15\\ \\text{m/s}\\). The person recoils at",
          "options": [
            "\\(0.5\\ \\text{m/s}\\)",
            "\\(15\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(30\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation: \\(60v = 2(15)\\), so \\(v = 0.5\\ \\text{m/s}\\) in the opposite direction.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "In a collision, kinetic energy is conserved only if the collision is",
          "options": [
            "elastic",
            "perfectly inelastic",
            "inelastic",
            "explosive"
          ],
          "correctAnswer": 0,
          "explanation": "Kinetic energy is conserved only in elastic collisions; inelastic collisions lose some to heat, sound, or deformation.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "The impulse-momentum theorem can be written as",
          "options": [
            "\\(\\int F\\,dt = \\Delta p\\)",
            "\\(Fd = \\Delta p\\)",
            "\\(F = \\Delta p\\)",
            "\\(F/t = \\Delta p\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Impulse is the time integral of force and equals the change in momentum: \\(\\int F\\,dt = \\Delta p\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "Two objects of equal mass collide head-on elastically with equal and opposite velocities. After the collision they",
          "options": [
            "move apart with their velocities exchanged (reversed)",
            "stick together",
            "stop",
            "move together"
          ],
          "correctAnswer": 0,
          "explanation": "In an elastic collision of equal masses, velocities are exchanged; with equal and opposite speeds, each reverses direction.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "The center of mass of two equal masses is located",
          "options": [
            "exactly halfway between them",
            "at the heavier mass",
            "at one of the masses",
            "outside the system"
          ],
          "correctAnswer": 0,
          "explanation": "For two equal masses, the center of mass lies at the midpoint between them.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "During an explosion, a stationary object breaks into two pieces. Their total momentum afterward is",
          "options": [
            "zero (momentum conserved)",
            "large and positive",
            "large and negative",
            "equal to the mass"
          ],
          "correctAnswer": 0,
          "explanation": "If the initial momentum is zero and no external forces act, total momentum after the explosion is still zero.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "A force-time graph's area under the curve represents",
          "options": [
            "impulse",
            "work",
            "power",
            "energy"
          ],
          "correctAnswer": 0,
          "explanation": "The area under a force-time graph equals the impulse, \\(\\int F\\,dt = \\Delta p\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A \\(1\\ \\text{kg}\\) ball at \\(4\\ \\text{m/s}\\) collides elastically head-on with a stationary \\(1\\ \\text{kg}\\) ball. After the collision, the first ball's velocity is",
          "options": [
            "\\(0\\ \\text{m/s}\\)",
            "\\(4\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(-4\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For equal masses in an elastic head-on collision, velocities are exchanged: the first stops (\\(0\\)) and the second moves at \\(4\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "A ballistic pendulum: a bullet of mass \\(m\\) at speed \\(v\\) embeds in a block of mass \\(M\\) at rest. The block-bullet speed just after is",
          "options": [
            "\\(\\frac{mv}{m + M}\\)",
            "\\(v\\)",
            "\\(\\frac{mv}{M}\\)",
            "\\(mv\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Perfectly inelastic collision, momentum conserved: \\(mv = (m + M)v'\\), so \\(v' = \\frac{mv}{m+M}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "In the ballistic pendulum, why can't you use energy conservation for the collision itself?",
          "options": [
            "The collision is inelastic, so kinetic energy is not conserved",
            "energy is always conserved",
            "momentum is not conserved",
            "the block is too heavy"
          ],
          "correctAnswer": 0,
          "explanation": "The embedding collision is perfectly inelastic and loses kinetic energy to heat/deformation, so only momentum (not KE) is conserved during it.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "A force \\(F(t) = 6t\\) acts on a \\(3\\ \\text{kg}\\) object initially at rest, for 2 s. Its final velocity is",
          "options": [
            "\\(4\\ \\text{m/s}\\)",
            "\\(12\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(6\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Impulse \\(= \\int_0^2 6t\\,dt = [3t^2]_0^2 = 12\\ \\text{N·s} = \\Delta p\\). Then \\(v = 12/3 = 4\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "Two skaters (masses \\(m\\) and \\(2m\\)) push off from rest. The ratio of their speeds (\\(v_m : v_{2m}\\)) is",
          "options": [
            "\\(2 : 1\\)",
            "\\(1 : 2\\)",
            "\\(1 : 1\\)",
            "\\(4 : 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum conservation from rest: \\(mv_m = 2m\\,v_{2m}\\), so \\(v_m : v_{2m} = 2 : 1\\); the lighter skater moves faster.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "A system's center of mass moves at constant velocity. This tells us that",
          "options": [
            "the net external force on the system is zero",
            "internal forces are zero",
            "kinetic energy is conserved",
            "the system is at rest"
          ],
          "correctAnswer": 0,
          "explanation": "The center of mass moves at constant velocity only if the net external force is zero (internal forces don't affect it).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "In a two-dimensional collision, momentum is conserved",
          "options": [
            "independently in the x and y directions",
            "only in the x direction",
            "only in total magnitude",
            "only if elastic"
          ],
          "correctAnswer": 0,
          "explanation": "Momentum is a vector, so it is conserved separately in each independent direction (x and y).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "A rocket propels itself by ejecting mass. This works because",
          "options": [
            "ejecting mass backward gives the rocket forward momentum (conservation)",
            "the exhaust pushes on the air",
            "gravity pulls it up",
            "of centrifugal force"
          ],
          "correctAnswer": 0,
          "explanation": "By conservation of momentum, ejecting exhaust backward imparts equal and opposite forward momentum to the rocket—it works even in a vacuum.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "A \\(3\\ \\text{kg}\\) object at \\(4\\ \\text{m/s}\\) collides with a \\(1\\ \\text{kg}\\) object at rest and they stick. The fraction of kinetic energy lost is",
          "options": [
            "\\(1/4\\)",
            "\\(1/2\\)",
            "\\(3/4\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "After: \\(v = 12/4 = 3\\ \\text{m/s}\\). \\(KE_i = \\tfrac{1}{2}(3)(16) = 24\\ \\text{J}\\); \\(KE_f = \\tfrac{1}{2}(4)(9) = 18\\ \\text{J}\\). Fraction lost \\(= 6/24 = 1/4\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "Why is momentum conserved in a collision but kinetic energy sometimes not?",
          "options": [
            "Momentum conservation follows from Newton's third law (equal/opposite forces), while KE can convert to other forms",
            "both are always conserved",
            "neither is conserved",
            "they are the same quantity"
          ],
          "correctAnswer": 0,
          "explanation": "Internal collision forces are equal and opposite (Newton's third law), so total momentum is always conserved; kinetic energy, however, can convert to heat, sound, or deformation in inelastic collisions.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Rotation",
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
          "explanation": "Torque is \\(\\tau = rF\\sin\\theta\\), the rotational effect of a force applied at distance r from the axis.",
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
          "explanation": "For rotation, net torque equals moment of inertia times angular acceleration: \\(\\tau = I\\alpha\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "The moment of inertia depends on",
          "options": [
            "mass and its distribution relative to the axis",
            "only mass",
            "only velocity",
            "only force"
          ],
          "correctAnswer": 0,
          "explanation": "Moment of inertia depends on how mass is distributed relative to the rotation axis: \\(I = \\sum m_i r_i^2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "Angular momentum for a rotating rigid body is",
          "options": [
            "\\(L = I\\omega\\)",
            "\\(L = mv\\)",
            "\\(L = \\tfrac{1}{2}I\\omega^2\\)",
            "\\(L = I\\alpha\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum of a rigid body is \\(L = I\\omega\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "Rotational kinetic energy is given by",
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
          "id": "q-u5-easy-6",
          "question": "Angular velocity \\(\\omega\\) relates to linear velocity \\(v\\) at radius \\(r\\) by",
          "options": [
            "\\(v = r\\omega\\)",
            "\\(v = \\omega/r\\)",
            "\\(v = r/\\omega\\)",
            "\\(v = \\omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a point at radius r, the linear speed is \\(v = r\\omega\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "In the absence of external torque, angular momentum is",
          "options": [
            "conserved",
            "increasing",
            "decreasing",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Conservation of angular momentum: with no net external torque, total angular momentum stays constant.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "A figure skater pulling in their arms spins faster because",
          "options": [
            "reducing I increases \\(\\omega\\) to conserve angular momentum",
            "they gain energy",
            "torque increases",
            "mass increases"
          ],
          "correctAnswer": 0,
          "explanation": "With \\(L = I\\omega\\) conserved, decreasing the moment of inertia I increases the angular velocity \\(\\omega\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "For rotational equilibrium, the net torque must be",
          "options": [
            "zero",
            "maximum",
            "equal to the force",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "An object in rotational equilibrium has zero net torque, so it does not angularly accelerate.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "The angular acceleration \\(\\alpha\\) is the",
          "options": [
            "rate of change of angular velocity",
            "rate of change of position",
            "same as torque",
            "same as angular momentum"
          ],
          "correctAnswer": 0,
          "explanation": "Angular acceleration is \\(\\alpha = \\frac{d\\omega}{dt}\\), the rate of change of angular velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "A net torque of \\(10\\ \\text{N·m}\\) acts on a wheel with moment of inertia \\(2\\ \\text{kg·m}^2\\). Its angular acceleration is",
          "options": [
            "\\(5\\ \\text{rad/s}^2\\)",
            "\\(20\\ \\text{rad/s}^2\\)",
            "\\(2\\ \\text{rad/s}^2\\)",
            "\\(0.2\\ \\text{rad/s}^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\alpha = \\tau/I = 10/2 = 5\\ \\text{rad/s}^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "A force of \\(20\\ \\text{N}\\) is applied perpendicular to a wrench \\(0.3\\ \\text{m}\\) from the bolt. The torque is",
          "options": [
            "\\(6\\ \\text{N·m}\\)",
            "\\(20\\ \\text{N·m}\\)",
            "\\(0.3\\ \\text{N·m}\\)",
            "\\(60\\ \\text{N·m}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\tau = rF\\sin90° = 0.3 \\times 20 = 6\\ \\text{N·m}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "A solid disk and a hoop of the same mass and radius roll down an incline. Which reaches the bottom first?",
          "options": [
            "the solid disk (smaller moment of inertia)",
            "the hoop",
            "they tie",
            "neither rolls"
          ],
          "correctAnswer": 0,
          "explanation": "The disk has a smaller I (\\(\\tfrac{1}{2}MR^2\\) vs. \\(MR^2\\)), so more energy goes to translation, and it accelerates faster, reaching the bottom first.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "An object rolls without slipping when",
          "options": [
            "\\(v = r\\omega\\)",
            "\\(v = 0\\)",
            "\\(\\omega = 0\\)",
            "\\(v = 2r\\omega\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Rolling without slipping requires the rolling condition \\(v = r\\omega\\) between linear and angular speed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "A wheel rotating at \\(4\\ \\text{rad/s}\\) with \\(I = 3\\ \\text{kg·m}^2\\) has rotational kinetic energy",
          "options": [
            "\\(24\\ \\text{J}\\)",
            "\\(12\\ \\text{J}\\)",
            "\\(48\\ \\text{J}\\)",
            "\\(6\\ \\text{J}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE = \\tfrac{1}{2}I\\omega^2 = \\tfrac{1}{2}(3)(4)^2 = 24\\ \\text{J}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "A rolling object's total kinetic energy is",
          "options": [
            "the sum of translational and rotational KE",
            "only translational",
            "only rotational",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A rolling object has both translational (\\(\\tfrac{1}{2}mv^2\\)) and rotational (\\(\\tfrac{1}{2}I\\omega^2\\)) kinetic energy.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "Why does a diver tuck to complete more flips?",
          "options": [
            "Tucking reduces moment of inertia, increasing spin rate (conserving L)",
            "tucking increases I",
            "it adds torque",
            "it adds energy"
          ],
          "correctAnswer": 0,
          "explanation": "Tucking reduces the moment of inertia, so angular velocity increases to conserve angular momentum, allowing faster spinning.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "The moment of inertia of a point mass \\(m\\) at distance \\(r\\) from the axis is",
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
          "id": "q-u5-medium-9",
          "question": "Angular momentum of a point particle about an axis is",
          "options": [
            "\\(L = mvr\\) (for motion perpendicular to r)",
            "\\(L = mv\\)",
            "\\(L = mr\\)",
            "\\(L = \\tfrac{1}{2}mv^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a particle moving perpendicular to the radius, \\(L = mvr\\) (equivalently \\(L = I\\omega\\) with \\(I = mr^2\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "A torque is greatest when the force is applied",
          "options": [
            "perpendicular to the lever arm (\\(\\theta = 90°\\))",
            "parallel to the lever arm",
            "at the axis",
            "at \\(\\theta = 0°\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Torque \\(\\tau = rF\\sin\\theta\\) is maximized when \\(\\theta = 90°\\) (force perpendicular to the lever arm).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "A solid sphere (\\(I = \\tfrac{2}{5}MR^2\\)) rolls without slipping down an incline of height \\(h\\). Its speed at the bottom is",
          "options": [
            "\\(\\sqrt{\\tfrac{10}{7}gh}\\)",
            "\\(\\sqrt{2gh}\\)",
            "\\(\\sqrt{gh}\\)",
            "\\(\\sqrt{\\tfrac{5}{7}gh}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Energy: \\(mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}(\\tfrac{2}{5}mR^2)(v/R)^2 = \\tfrac{7}{10}mv^2\\), giving \\(v = \\sqrt{\\tfrac{10}{7}gh}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "A rod of length \\(L\\) and mass \\(M\\) rotates about one end. Its moment of inertia is",
          "options": [
            "\\(\\tfrac{1}{3}ML^2\\)",
            "\\(\\tfrac{1}{12}ML^2\\)",
            "\\(ML^2\\)",
            "\\(\\tfrac{1}{2}ML^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A uniform rod rotating about one end has \\(I = \\tfrac{1}{3}ML^2\\) (via integration or the parallel axis theorem).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "A disk (\\(I = \\tfrac{1}{2}MR^2\\)) spinning at \\(\\omega_0\\) drops onto an identical stationary disk, and they stick. Their common angular velocity is",
          "options": [
            "\\(\\omega_0/2\\)",
            "\\(\\omega_0\\)",
            "\\(2\\omega_0\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Angular momentum conserved: \\(I\\omega_0 = 2I\\omega_f\\), so \\(\\omega_f = \\omega_0/2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
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
          "id": "q-u5-hard-5",
          "question": "When the two disks stick together in the previous problem, the kinetic energy",
          "options": [
            "decreases (half is lost)",
            "stays the same",
            "doubles",
            "increases"
          ],
          "correctAnswer": 0,
          "explanation": "\\(KE_i = \\tfrac{1}{2}I\\omega_0^2\\); \\(KE_f = \\tfrac{1}{2}(2I)(\\omega_0/2)^2 = \\tfrac{1}{4}I\\omega_0^2\\), half the initial—energy is lost in the inelastic coupling.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "A person stands at the edge of a rotating platform and walks toward the center. The platform's angular velocity",
          "options": [
            "increases, as the system's moment of inertia decreases",
            "decreases",
            "stays constant",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "As the person moves inward, the total moment of inertia decreases, so \\(\\omega\\) increases to conserve angular momentum.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "A torque \\(\\tau(t) = 4t\\) acts on a wheel (\\(I = 2\\ \\text{kg·m}^2\\)) initially at rest. Its angular velocity at \\(t = 3\\ \\text{s}\\) is",
          "options": [
            "\\(9\\ \\text{rad/s}\\)",
            "\\(6\\ \\text{rad/s}\\)",
            "\\(18\\ \\text{rad/s}\\)",
            "\\(3\\ \\text{rad/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Angular impulse \\(= \\int_0^3 4t\\,dt = [2t^2]_0^3 = 18 = \\Delta L = I\\omega\\). So \\(\\omega = 18/2 = 9\\ \\text{rad/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "For objects of the same mass and radius rolling down an incline, the one with the smallest moment of inertia will",
          "options": [
            "reach the bottom first with the greatest speed",
            "reach last",
            "have the least speed",
            "not roll"
          ],
          "correctAnswer": 0,
          "explanation": "A smaller I means less energy goes into rotation and more into translation, so that object accelerates fastest and reaches the bottom first.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "Angular momentum conservation explains why a spinning top or gyroscope",
          "options": [
            "resists changes to its axis orientation",
            "speeds up spontaneously",
            "falls immediately",
            "loses all momentum"
          ],
          "correctAnswer": 0,
          "explanation": "A large angular momentum resists changes in its direction, so a spinning gyroscope maintains its orientation (gyroscopic stability).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "Why does a rolling object accelerate more slowly down an incline than a frictionless sliding object?",
          "options": [
            "Some of the potential energy goes into rotational kinetic energy rather than translation",
            "friction adds energy",
            "it has more mass",
            "gravity is weaker"
          ],
          "correctAnswer": 0,
          "explanation": "For a rolling object, gravitational PE is shared between translational and rotational KE, so less goes into linear speed, giving smaller translational acceleration than pure sliding.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}

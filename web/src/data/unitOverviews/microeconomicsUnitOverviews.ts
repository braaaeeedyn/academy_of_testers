import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

const RAW_MICROECONOMICS = `AP Microeconomics

Unit 1 – Basic Economic Concepts

1.1 Scarcity

Scarcity is the foundational concept in economics. It arises because human wants are virtually unlimited, while the resources available to satisfy those wants (land, labor, capital, and entrepreneurship) are finite. So every individual, firm, and society must choose how to allocate scarce resources among competing uses. These choices always involve trade-offs, because a resource used for one purpose cannot be used for another.

The four factors of production are the inputs every economy uses. Land is all the natural resources used in production, including minerals, water, timber, and arable soil. Labor is human effort, both physical and mental, applied to production. Capital is human-made resources used to produce other goods and services, such as machinery, tools, factories, and infrastructure, and it should not be confused with financial capital or money. Entrepreneurship is the ability to combine the other three factors, take risks, and innovate to create new products or processes. Each factor of production earns a return: land earns rent, labor earns wages, capital earns interest, and entrepreneurship earns profit.

Microeconomics focuses on the decisions of individual consumers and firms and how they interact in specific markets. Macroeconomics, by contrast, studies the economy as a whole. The central question of microeconomics is how the price mechanism allocates scarce resources in markets. In other words, how do prices coordinate the decisions of millions of independent buyers and sellers? Together, those decisions determine what gets produced, how it gets produced, and who gets the output.

Key ideas: Scarcity forces choices and trade-offs because wants are unlimited but resources are finite. The four factors of production are land, labor, capital, and entrepreneurship. Microeconomics studies individual decision-making and market interactions. The price mechanism coordinates resource allocation in market economies.

1.2 Resource Allocation and Economic Systems

Every society must answer three basic economic questions. What goods and services should be produced? How should they be produced, with what combination of resources and technology? For whom should they be produced, meaning how should output be distributed? Different economic systems answer these questions in different ways.

In a command (planned) economy, the government makes most economic decisions: what to produce, how to produce it, and how to distribute it. The Soviet Union was the most prominent example. Command economies can mobilize resources quickly for national priorities. They tend to be inefficient, though, because central planners lack the information and incentives that markets provide. They often produce the wrong goods, in the wrong quantities, using the wrong methods.

In a market (capitalist) economy, individuals and firms make these decisions by interacting in markets. The price mechanism (Adam Smith's "invisible hand") coordinates their decisions through the signals prices send to buyers and sellers. When demand for a good increases, its price rises, which signals producers to make more and consumers to buy less, moving the market toward equilibrium. Market economies tend to be more efficient and innovative, but they can produce inequality, environmental damage, and instability.

In practice, all modern economies are mixed economies that combine elements of market and command systems. Governments in mixed economies provide public goods, regulate markets, redistribute income, and step in to correct market failures. Meanwhile, private enterprise and market forces drive most production and consumption decisions. How much the government is involved varies across countries and over time.

Key ideas: Every society must answer what, how, and for whom to produce. Command economies rely on government planning; market economies rely on the price mechanism. Adam Smith's "invisible hand" describes how self-interested decisions can produce socially beneficial outcomes. All modern economies are mixed, combining market and government elements.

1.3 Production Possibilities Curve (PPC)

The Production Possibilities Curve (PPC) is a model that illustrates scarcity, opportunity cost, efficiency, and economic growth. It shows the maximum combinations of two goods an economy can produce when all its resources are fully and efficiently employed with current technology. The PPC is a frontier. It marks the boundary between what is attainable and what is not.

Points on the curve represent productive efficiency. All resources are in use, and producing more of one good is impossible without producing less of the other. Points inside the curve represent inefficiency, because resources are unemployed or misallocated and the economy could produce more of both goods. Points outside the curve are currently unattainable with existing resources and technology.

The PPC is typically bowed outward (concave to the origin), which reflects the law of increasing opportunity costs. As production of one good increases, the opportunity cost of each additional unit rises. That is because resources are not equally suited to producing all goods. The best resources for a particular good are used first. As production expands, less suitable resources must be pulled away from the other good, which yields diminishing returns.

A straight-line PPC would mean constant opportunity costs, with resources equally productive in both uses, which is possible but unusual in real economies. Economic growth shifts the entire PPC outward and makes previously unattainable combinations achievable. It can come from more resources, improved technology, or better institutions.

Key ideas: The PPC shows maximum output combinations given scarce resources and current technology. Points on the curve are efficient; inside is inefficient; outside is unattainable. The bowed-out shape reflects increasing opportunity costs as resources are reallocated. Economic growth shifts the PPC outward through more resources, better technology, or improved institutions.

1.4 Comparative Advantage and Trade

Specialization and voluntary trade can make all parties better off, even when one party is absolutely more productive at everything. This is one of the most powerful insights in economics. It rests on the concept of comparative advantage. A producer has a comparative advantage in a good if it can produce that good at a lower opportunity cost than another producer.

Absolute advantage means being able to produce more of a good with the same resources. Comparative advantage means producing at a lower opportunity cost. A country can have an absolute advantage in both goods but cannot have a comparative advantage in both, because comparative advantage is always relative. If each party specializes in the good where it has a comparative advantage and then trades, both can consume beyond their individual PPCs.

The terms of trade, the rate at which goods are exchanged, must fall between the opportunity costs of the two trading partners for both to benefit. If the terms of trade equal one partner's opportunity cost, that partner gains nothing from trade while the other captures all the gains. The further the terms of trade are from a partner's opportunity cost, the more that partner benefits.

Output tables and PPC problems are common on the AP exam. To find comparative advantage, calculate each producer's opportunity cost for each good, which is what they give up to produce one more unit. Then compare. The producer with the lower opportunity cost has the comparative advantage in that good. Remember that the opportunity costs are reciprocals. If producing 1 unit of Good A costs 2 units of Good B, then producing 1 unit of Good B costs 0.5 units of Good A.

Key ideas: Comparative advantage means producing at a lower opportunity cost, not necessarily producing more. All parties benefit from specialization and trade based on comparative advantage. Terms of trade must fall between the two partners' opportunity costs. Opportunity costs for two goods are always reciprocals of each other.

1.5 Cost-Benefit Analysis

Rational economic decisions compare the marginal benefits and marginal costs of each action. Take an action if its marginal benefit (the additional benefit from one more unit) exceeds its marginal cost (the additional cost of one more unit). The optimal quantity of any activity is where marginal benefit equals marginal cost (MB = MC).

Cost-benefit analysis applies to every economic decision. Consumers decide how much to buy, firms decide how much to produce, and governments decide whether to take on a public project. A consumer should buy another unit of a good as long as the marginal utility (satisfaction) from that unit exceeds its price. A firm should produce another unit as long as the marginal revenue exceeds the marginal cost. A government should invest in a project if the total social benefits exceed the total social costs.

Sunk costs are costs that have already been paid and cannot be recovered, and they should not affect current decisions. Rational decision-makers consider only marginal costs and benefits from here forward, not past spending. For example, the money already spent on a movie ticket should not influence whether you stay or leave the theater. Only the expected enjoyment (marginal benefit) of continuing to watch, compared with doing something else, matters.

Implicit costs are opportunity costs that involve no direct monetary payment, like the income a business owner gives up by not working for someone else. Explicit costs involve direct monetary payments such as wages, rent, and materials. Economic decisions should include both implicit and explicit costs to capture the true opportunity cost of any choice.

Key ideas: Rational decisions compare marginal benefits and marginal costs. The optimal quantity is where MB = MC. Sunk costs should be ignored in current decision-making. Implicit costs (opportunity costs without monetary payment) must be included alongside explicit costs.

1.6 Marginal Analysis and Consumer Choice

Utility is the satisfaction or benefit a consumer gets from consuming a good or service. Total utility is the total satisfaction from consuming a given quantity. Marginal utility is the additional satisfaction from consuming one more unit. The law of diminishing marginal utility says that as a consumer consumes more of a good, each additional unit adds less satisfaction. The first slice of pizza is delicious, the second is good, the third is okay, and by the fifth, you might feel sick.

The utility-maximizing rule says a consumer maximizes total utility when the marginal utility per dollar spent is equal across all goods. In symbols, MU_A / P_A = MU_B / P_B = ... for all goods A, B, and so on. Suppose the marginal utility per dollar from Good A exceeds what Good B offers. The consumer should then buy more of A and less of B, shifting spending toward the good with higher marginal utility per dollar until the ratios equalize.

This rule connects to the demand curve. The law of diminishing marginal utility explains why the demand curve slopes downward. As a consumer acquires more of a good, its marginal utility decreases, so the consumer is willing to pay less for additional units. The demand curve shows the maximum price a consumer is willing to pay for each additional unit, which corresponds to the marginal utility of that unit.

Consumer surplus is the difference between what a consumer is willing to pay for a good (shown by the demand curve) and the price actually paid. On a graph, consumer surplus is the area between the demand curve and the price line, and it is the net benefit consumers receive from market transactions.

Key ideas: Utility is satisfaction from consumption; marginal utility diminishes with each additional unit. Consumers maximize utility when MU per dollar is equal across all goods. Diminishing marginal utility explains the downward-sloping demand curve. Consumer surplus is the difference between willingness to pay and the actual price.

Unit 2 – Supply and Demand

2.1 Demand

Demand is the relationship between the price of a good and the quantity consumers are willing and able to buy, holding all other factors constant (ceteris paribus). The law of demand says price and quantity demanded are inversely related. As price rises, quantity demanded falls; as price falls, quantity demanded rises. This produces a downward-sloping demand curve.

Two effects explain the law of demand. Under the substitution effect, when a good's price rises, consumers switch to cheaper alternatives. Under the income effect, when a good's price rises, consumers' purchasing power falls, so they buy less of all normal goods. Adding individual demand curves horizontally gives the market demand curve.

A change in price causes a movement along the demand curve, which is a change in quantity demanded. A change in any non-price determinant shifts the entire demand curve, which is a change in demand. The non-price determinants are consumer tastes and preferences, the number of buyers, and consumer income. Demand for normal goods increases with income, and demand for inferior goods decreases with income. The other determinants are prices of related goods (substitutes and complements) and expectations about future prices or income.

A substitute is a good that can replace another, like Coke and Pepsi. When the price of one rises, demand for the other increases. A complement is a good used together with another, like hot dogs and buns. When the price of one rises, demand for the other decreases.

Key ideas: The law of demand: price and quantity demanded are inversely related. Price changes cause movements along the curve; non-price determinants shift the curve. Non-price determinants include tastes, number of buyers, income, related goods' prices, and expectations. Substitutes have positive cross-price relationships; complements have negative ones.

2.2 Supply

Supply is the relationship between the price of a good and the quantity producers are willing and able to offer for sale, ceteris paribus. The law of supply says price and quantity supplied are positively related. As price rises, quantity supplied increases, because higher prices make production more profitable and give firms an incentive to produce more.

A change in price causes a movement along the supply curve (a change in quantity supplied). A change in any non-price determinant shifts the entire curve (a change in supply). Non-price determinants include input prices, since higher input costs reduce supply, and technology, since improvements increase it. They also include the number of sellers, expectations about future prices, and government policies (taxes reduce supply; subsidies increase it). The last is the prices of related goods in production.

An increase in supply (rightward shift) means firms offer more at every price. A decrease in supply (leftward shift) means firms offer less at every price. Telling movements along the curve apart from shifts of the curve is critical for AP exam success. Confusing the two is one of the most common errors.

Producer surplus is the difference between the price a producer actually receives and the minimum price it is willing to accept, which the supply curve shows. On a graph, it is the area between the price line and the supply curve. It is the net benefit producers receive from market transactions.

Key ideas: The law of supply: price and quantity supplied are positively related. Price changes cause movements along the curve; non-price determinants shift the curve. Input prices, technology, number of sellers, expectations, and government policies are key shifters. Producer surplus is the difference between the market price and the minimum acceptable price.

2.3 Price Elasticity of Demand

Price elasticity of demand (PED) measures how strongly quantity demanded responds to a change in price. It equals the percentage change in quantity demanded divided by the percentage change in price (PED = %ΔQd / %ΔP). Because the law of demand makes price and quantity move in opposite directions, PED is technically negative. Economists typically use its absolute value.

If PED > 1, demand is elastic. Quantity demanded is relatively responsive to price, so a small price change causes a large change in quantity demanded. If PED < 1, demand is inelastic. Quantity demanded is relatively unresponsive, so even a large price change causes only a small change in quantity demanded. If PED = 1, demand is unit elastic. At the extremes, if PED = 0, demand is perfectly inelastic (a vertical demand curve). If PED = infinity, demand is perfectly elastic (a horizontal demand curve).

Several things determine elasticity. More available substitutes make demand more elastic, and so does a higher share of income spent on the good. Luxuries are more elastic than necessities. Time matters too: demand is more elastic in the long run, because consumers have more time to adjust their behavior and find substitutes.

Elasticity tells you how a price change will affect total revenue (price times quantity sold). If demand is elastic, a price cut increases total revenue, because the rise in quantity more than makes up for the lower price. If demand is inelastic, a price cut decreases total revenue, because the rise in quantity is too small to make up for the lower price. Total revenue is at its maximum at unit elasticity.

Key ideas: PED = %ΔQd / %ΔP; elastic if > 1, inelastic if < 1, unit elastic if = 1. Determinants include substitute availability, income share, necessity vs. luxury, and time horizon. Elastic demand: price cuts increase total revenue. Inelastic demand: price cuts decrease total revenue. Total revenue is maximized at unit elasticity.

2.4 Price Elasticity of Supply

Price elasticity of supply (PES) measures how strongly quantity supplied responds to a change in price (PES = %ΔQs / %ΔP). PES is positive, unlike demand elasticity, because price and quantity supplied move in the same direction.

If PES > 1, supply is elastic, and firms can easily increase output when prices rise. If PES < 1, supply is inelastic, and firms have trouble increasing output even when prices rise. Perfectly inelastic supply (PES = 0) is a vertical supply curve. Quantity supplied does not change whatever the price (e.g., beachfront land). Perfectly elastic supply (PES = infinity) is a horizontal supply curve.

Time is the main determinant of supply elasticity. In the immediate market period (momentary run), supply is perfectly inelastic because firms cannot change output at all. In the short run, firms can adjust variable inputs (labor, materials) but not fixed inputs (factory size), so supply is somewhat elastic. In the long run, firms can adjust all inputs, enter or exit the industry, and build new facilities, which makes supply most elastic.

Other factors matter as well. If inputs are readily available, supply is more elastic. The production process matters, since handcrafted goods have less elastic supply than mass-produced goods. Firms with spare (unused) capacity can respond more quickly to price increases. Goods that can be stored have more elastic supply.

Key ideas: PES = %ΔQs / %ΔP; elastic if > 1, inelastic if < 1. Time is the primary determinant: supply becomes more elastic over longer time horizons. Input availability, production processes, spare capacity, and storability also affect PES. Perfectly inelastic supply is a vertical curve (fixed quantity regardless of price).

2.5 Other Elasticities

Cross-price elasticity of demand measures how the quantity demanded of one good responds to a change in the price of another (Cross-PED = %ΔQd of Good A / %ΔP of Good B). If cross-price elasticity is positive, the goods are substitutes: when the price of Good B rises, demand for Good A increases. If it is negative, the goods are complements: when the price of Good B rises, demand for Good A decreases. If it is zero or near zero, the goods are unrelated.

Income elasticity of demand measures how quantity demanded responds to a change in consumer income: YED = %ΔQd / %ΔIncome. If income elasticity is positive, the good is a normal good, and demand increases with income. If it is negative, the good is an inferior good. Its demand decreases as income rises, because consumers switch to higher-quality alternatives. Among normal goods, those with income elasticity greater than 1 are luxury goods, whose demand grows faster than income. Those between 0 and 1 are necessities, whose demand grows more slowly than income.

These elasticities have practical uses. Businesses use cross-price elasticity for pricing and marketing. A high positive cross-PED identifies competitors, and a negative cross-PED identifies complementary products. Governments use income elasticity to predict how tax revenues, which depend on spending patterns, will change as the economy grows. During recessions, demand for inferior goods tends to rise while demand for luxury goods falls.

Key ideas: Cross-price elasticity is positive for substitutes, negative for complements. Income elasticity is positive for normal goods, negative for inferior goods. Normal goods with YED > 1 are luxuries; those with 0 < YED < 1 are necessities. These elasticities help businesses and governments predict demand responses to economic changes.

2.6 Market Equilibrium and Consumer and Producer Surplus

Market equilibrium is the price at which quantity demanded equals quantity supplied. At this price, the market clears. Every unit produced finds a buyer, and every buyer willing to pay the equilibrium price can buy the good. There is no surplus (excess supply) or shortage (excess demand).

Consumer surplus is the area between the demand curve and the equilibrium price, the total benefit consumers receive above what they actually pay. Producer surplus is the area between the equilibrium price and the supply curve, the total benefit producers receive above their minimum acceptable price. Total surplus (economic surplus) is consumer surplus plus producer surplus, the total net benefit to society from market transactions.

In a competitive market at equilibrium, total surplus is maximized, so the market achieves allocative efficiency. That is the condition where the marginal benefit to consumers (shown by the demand curve) equals the marginal cost to producers (shown by the supply curve) for the last unit produced. No reallocation of resources could make anyone better off without making someone else worse off. This is Pareto efficiency.

Deadweight loss occurs when the market does not produce the allocatively efficient quantity, so some transactions that would benefit both sides do not happen. Price controls, taxes, monopoly power, or externalities can cause deadweight loss. It is a net loss to society: surplus that is destroyed rather than simply transferred from one group to another.

Key ideas: Equilibrium maximizes total surplus (consumer surplus + producer surplus). Consumer surplus is the area between the demand curve and the price; producer surplus is the area between the price and the supply curve. Allocative efficiency occurs where MB = MC (at competitive equilibrium). Deadweight loss represents surplus destroyed when markets fail to reach the efficient outcome.

2.7 Market Disequilibrium and Changes in Equilibrium

Disequilibrium means the price is not at the equilibrium level. A price above equilibrium creates a surplus, where quantity supplied exceeds quantity demanded. Sellers with unsold goods cut their prices, which raises quantity demanded and lowers quantity supplied, moving the market toward equilibrium. A price below equilibrium creates a shortage, where quantity demanded exceeds quantity supplied. Buyers competing for scarce goods bid the price up, which lowers quantity demanded and raises quantity supplied.

Equilibrium changes when demand, supply, or both shift. When demand increases (shifts right), equilibrium price and quantity both rise. When demand decreases (shifts left), both fall. When supply increases (shifts right), equilibrium price falls and quantity rises. When supply decreases (shifts left), price rises and quantity falls.

When both curves shift at once, the effect on one variable is determinate: you can predict it no matter how big the shifts are. The effect on the other is indeterminate, because it depends on which shift is larger. For example, if demand and supply both increase, quantity definitely increases. The effect on price depends on whether demand or supply shifted more.

Practice identifying the correct shifts from verbal descriptions of economic events, then working out the effects on equilibrium price and quantity. The AP exam tests this skill heavily. You translate real-world events into supply and demand shifts and then predict the outcomes.

Key ideas: Surpluses (price above equilibrium) drive prices down; shortages (price below) drive prices up. Demand shifts change price and quantity in the same direction; supply shifts change them in opposite directions. Simultaneous shifts produce one determinate and one indeterminate effect. Translating events into supply/demand shifts and predicting outcomes is a core AP skill.

2.8 The Effects of Government Intervention in Markets

Governments intervene in markets through price controls, taxes, and subsidies. These interventions change market outcomes. They typically create deadweight loss by keeping the market from reaching the efficient equilibrium.

A price ceiling is a legal maximum price set below the equilibrium price. Rent control is a common example. At the artificially low price, quantity demanded exceeds quantity supplied, so price ceilings create shortages; they also reduce producer surplus and create deadweight loss. They may lead to black markets, lower quality, and inefficient allocation, since the good may not go to the people who value it most.

A price floor is a legal minimum price set above the equilibrium price. The minimum wage is the most common example. At the artificially high price, quantity supplied exceeds quantity demanded, so price floors create surpluses; they also reduce consumer surplus and create deadweight loss. In labor markets, a minimum wage above the equilibrium wage creates a surplus of labor, which is unemployment.

A per-unit tax on producers shifts the supply curve leftward (upward) by the amount of the tax. The price buyers pay rises, the price sellers receive falls, and the quantity traded shrinks. The government collects the tax revenue, but total surplus decreases because of deadweight loss. The burden (incidence) of the tax depends on the relative elasticities of supply and demand. Whichever side is more inelastic bears a larger share of the tax burden.

Subsidies work the reverse of taxes. They shift the supply curve rightward, lowering the price buyers pay, raising the price sellers receive, and increasing quantity. Subsidies create their own deadweight loss, because the government pays out more in subsidies than consumer and producer surplus increase.

Key ideas: Price ceilings below equilibrium create shortages and deadweight loss. Price floors above equilibrium create surpluses and deadweight loss. Taxes reduce quantity traded and create deadweight loss; the more inelastic side bears more of the burden. Subsidies increase quantity but create deadweight loss from overproduction.

2.9 International Trade and Public Policy

International trade lets countries specialize according to comparative advantage and consume beyond their domestic PPCs. When a country opens to trade, it exports goods in which it has a comparative advantage and imports goods in which it does not. The world price, the price at which a good trades internationally, determines whether a country exports or imports a particular good.

If the world price is above the domestic equilibrium price, the country exports. Domestic producers increase output while domestic consumers cut purchases, and the difference is exported. Domestic producer surplus rises and domestic consumer surplus falls. Total surplus still increases, because the gains to producers outweigh the losses to consumers. If the world price is below the domestic equilibrium, the country imports. Domestic consumers benefit from lower prices and domestic producers are hurt, but total surplus increases.

Tariffs are taxes on imports. They raise the domestic price above the world price, which reduces imports, helps domestic producers, and hurts consumers. Tariffs also generate government revenue and create deadweight loss. Import quotas, limits on the quantity of imports, have similar effects but generate no government revenue. Instead, the revenue equivalent goes to whoever holds the quota rights (often foreign producers or domestic importers).

Trade restrictions are often defended as protecting domestic jobs, national security, or infant industries (new industries not yet able to compete). They are also defended as a response to unfair trade practices like dumping, which means selling below cost to drive out competitors. Economists generally argue that trade creates winners and losers, but the gains from trade exceed the losses. In their view, helping the losers through retraining and safety-net programs is more efficient than restricting trade.

Key ideas: Countries export goods where the world price exceeds the domestic price and import where it is lower. Free trade increases total surplus but creates winners (exporters, consumers of imports) and losers (import-competing producers). Tariffs and quotas reduce imports, benefit domestic producers, harm consumers, and create deadweight loss. Economists generally favor free trade with compensation for displaced workers.

Unit 3 – Production, Cost, and the Perfect Competition Model

3.1 The Production Function

The production function describes the relationship between inputs (factors of production) and output. In the short run, at least one input is fixed, typically capital such as the factory and machinery. Other inputs, like labor and raw materials, are variable. In the long run, all inputs are variable. Firms can build new factories, install new equipment, and enter or exit industries.

Total product (TP) is the total output produced. Marginal product (MP) is the extra output from one more unit of a variable input, usually labor (MP = ΔTP / ΔL). Average product (AP) is output per unit of input: AP = TP / L.

The law of diminishing marginal returns says that as more units of a variable input are added to a fixed input, the marginal product of the variable input eventually falls. Adding workers to a fixed-size kitchen at first raises output quickly, thanks to specialization and division of labor. Eventually, though, each additional worker adds less output, because the kitchen gets overcrowded. This law applies only in the short run, when at least one input is fixed, and it is the key to understanding short-run cost curves.

Marginal and average product follow a mathematical rule. When MP > AP, AP is rising. When MP < AP, AP is falling, and when MP = AP, AP is at its maximum. Your GPA works the same way. If your current semester grade (marginal) is above your cumulative GPA (average), your GPA rises.

Key ideas: The production function relates inputs to output; the short run has fixed inputs, the long run does not. Marginal product is the additional output from one more unit of input. The law of diminishing marginal returns: MP eventually declines as variable inputs increase with fixed inputs. When MP > AP, AP rises; when MP < AP, AP falls.

3.2 Short-Run Production Costs

Short-run costs come from the production function and the law of diminishing marginal returns. Fixed costs (FC) do not change with output; examples are rent, insurance, and loan payments. Variable costs (VC) change with output; examples are labor, materials, and energy. Total cost (TC) = FC + VC.

Average fixed cost (AFC = FC / Q) falls steadily as output increases, because fixed costs are spread over more units. Average variable cost (AVC = VC / Q) falls at first, due to increasing marginal returns from specialization. Then it rises, due to diminishing marginal returns. Average total cost (ATC = TC / Q = AFC + AVC) is U-shaped. It falls at first as AFC drops quickly, then rises as AVC increases.

Marginal cost (MC = ΔTC / ΔQ) is the additional cost of producing one more unit. MC is inversely related to marginal product. When MP is rising, each additional worker is more productive, so the cost of each additional unit falls and MC is falling. When MP is falling, MC is rising. The MC curve crosses both the AVC and ATC curves at their minimum points. When MC < ATC, ATC is falling; when MC > ATC, ATC is rising.

These cost curves matter because firms base their production and pricing decisions on how MC, ATC, AVC, and the market price relate. In perfect competition, the part of the MC curve above AVC is the firm's short-run supply curve.

Key ideas: TC = FC + VC; ATC = AFC + AVC; MC = ΔTC / ΔQ. AFC declines continuously; AVC and ATC are U-shaped; MC intersects AVC and ATC at their minimums. MC is inversely related to marginal product: diminishing returns cause MC to rise. The MC curve above AVC is the competitive firm's short-run supply curve.

3.3 Long-Run Production Costs

In the long run, all inputs are variable. Firms can change their scale of operation by building larger or smaller facilities, changing technology, and optimizing all inputs. The long-run average total cost (LRATC) curve is an envelope of all possible short-run ATC curves, each representing a different plant size or scale of production. In other words, it traces the lowest average cost of each output level once the firm can pick any plant size.

Economies of scale exist when a larger scale of production lowers LRATC. Larger firms can spread fixed costs over more units, negotiate bulk discounts on inputs, and specialize labor and equipment. The LRATC curve slopes downward in this region. Diseconomies of scale exist when a larger scale raises LRATC. Very large firms may suffer from coordination problems, bureaucratic inefficiency, and communication breakdowns, and the LRATC curve slopes upward in this region. Constant returns to scale exist when a larger scale leaves LRATC unchanged, so the curve is flat.

The minimum efficient scale (MES) is the lowest level of output at which LRATC is minimized. Industries with a high MES tend to be dominated by a few large firms. Automobile manufacturing is an example, since producing efficiently takes enormous factories. Industries with a low MES, like restaurants and barbershops, tend to have many small firms.

The shape of the LRATC curve helps explain market structure. Some industries have significant economies of scale, such as utilities and telecommunications. There, a single firm (a natural monopoly) can serve the entire market at lower cost than several firms could. In industries with constant returns to scale, firm size matters less, and many firms can compete efficiently.

Key ideas: In the long run, all inputs are variable and firms choose optimal scale. The LRATC is an envelope of short-run ATC curves. Economies of scale lower LRATC; diseconomies raise it; constant returns keep it flat. Minimum efficient scale determines how many firms an industry can efficiently support.

3.4 Types of Profit

Economists distinguish accounting profit from economic profit, and the distinction is critical for understanding how firms behave and how markets turn out. Accounting profit = Total Revenue - Explicit Costs. It includes only the direct monetary costs of production (wages, materials, rent, utilities). Economic profit = Total Revenue - Total Costs (Explicit + Implicit). It includes both explicit costs and implicit costs. Implicit costs are the opportunity costs of resources the firm owns. They include the owner's time, the return the owner's capital could have earned in its next best use, and any other opportunities given up.

Normal profit is the level of profit just high enough to keep a firm in business. It covers all explicit and implicit costs, which means economic profit is zero. Normal profit is counted as part of the firm's total costs, as an implicit cost. A firm earning zero economic profit is earning a normal return on its resources, so it has no incentive to enter or exit the industry.

Positive economic profit (above-normal profit) means the firm earns more than the opportunity cost of its resources. It is doing better in this industry than it could in its next best alternative. In competitive markets, this draws new firms into the industry in the long run. Negative economic profit (an economic loss) means the firm earns less than the opportunity cost of its resources, so those resources would do better in another use. This causes firms to exit the industry in the long run.

Key ideas: Accounting profit includes only explicit costs; economic profit includes both explicit and implicit costs. Normal profit means zero economic profit: the firm covers all opportunity costs. Positive economic profit attracts entry; negative economic profit causes exit. Economic profit, not accounting profit, drives long-run entry and exit decisions.

3.5 Profit Maximization

All firms, whatever the market structure, maximize profit (or minimize losses) by producing the quantity where marginal revenue (MR) equals marginal cost (MC). This holds as long as the price covers the firm's variable costs. Marginal revenue is the additional revenue from selling one more unit: MR = ΔTR / ΔQ.

The logic is straightforward. If MR > MC for the next unit, producing it adds more to revenue than to cost. Profit rises, so the firm should produce it. If MR < MC, producing the next unit adds more to cost than to revenue. Profit falls, so the firm should not produce it. Profit is maximized at the quantity where MR = MC.

A perfectly competitive firm is a price taker, so MR = P (the market price) for every unit. Its profit-maximizing rule becomes P = MC. For firms with market power (monopoly, monopolistic competition, oligopoly), MR is less than price because the demand curve slopes downward. To sell one more unit, the firm must lower the price on all units.

The firm's profit per unit is the difference between price and average total cost (P - ATC). Total profit is (P - ATC) × Q, profit per unit times quantity. If P > ATC, the firm earns positive economic profit. If P = ATC, the firm earns normal profit (zero economic profit). If AVC < P < ATC, the firm takes a loss but should keep producing in the short run. It covers its variable costs and puts something toward its fixed costs. If P < AVC, the firm should shut down, because it cannot even cover its variable costs.

Key ideas: Profit is maximized where MR = MC. For competitive firms, MR = P; for firms with market power, MR < P. Profit per unit = P - ATC; total profit = (P - ATC) × Q. The shutdown rule: produce if P ≥ AVC; shut down if P < AVC.

3.6 Firms' Short-Run and Long-Run Decisions

In the short run, a firm decides whether to produce or shut down, and if it produces, how much. It produces where MR = MC as long as price is at least average variable cost (P ≥ AVC). If price falls below AVC, the firm shuts down, because producing would lose more than stopping. By shutting down, it would lose only its fixed costs.

In the long run, firms decide whether to enter or exit an industry. If firms in an industry earn positive economic profit, new firms enter. Market supply rises, the market price falls, and economic profit shrinks until it reaches zero. If firms earn negative economic profit (losses), some leave the industry. Supply falls, the price rises, and profits for the remaining firms improve until economic profit reaches zero.

Long-run equilibrium in a perfectly competitive market occurs when economic profit is zero, so there is no incentive to enter or exit. At that point, price equals the minimum of the long-run average total cost curve (P = min LRATC), and each firm operates at the most efficient scale. The outcome is productively efficient, meaning output is produced at the lowest possible cost. It is also allocatively efficient: production is where P = MC, so the value consumers place on the last unit equals the cost of producing it.

Key ideas: Short-run decision: produce if P ≥ AVC; shut down if P < AVC. Long-run decision: enter if economic profit > 0; exit if economic profit < 0. Long-run competitive equilibrium: P = MC = min ATC, with zero economic profit. Perfect competition achieves both productive efficiency (min ATC) and allocative efficiency (P = MC).

3.7 Perfect Competition

Perfect competition is a market structure with many small firms selling identical (homogeneous) products. Entry and exit are free, information is perfect, and no single firm can influence the market price. Each firm is a price taker. It takes the market price as given and can sell as much as it wants at that price but nothing above it.

The perfectly competitive firm's demand curve is perfectly elastic (horizontal) at the market price. Since MR = P for every unit, the firm's profit-maximizing quantity is where P = MC. The industry supply curve is the horizontal sum of all the firms' MC curves (above AVC).

In the short run, firms may earn positive or negative economic profit, depending on where the market price falls relative to ATC. In the long run, free entry and exit drive economic profit to zero. If profits are positive, entry increases supply and pushes the price down. If losses occur, exit decreases supply and pushes the price up. In long-run equilibrium, P = MR = MC = min ATC.

Perfect competition is considered the benchmark of market efficiency. It achieves allocative efficiency, since P = MC means the right amount is produced. It also achieves productive efficiency, since production at min ATC means the lowest possible cost. However, perfect competition rarely exists in pure form. Most real markets have some product differentiation, barriers to entry, or market power. The model is the ideal that other market structures are compared against.

Key ideas: Perfect competition features many firms, identical products, free entry/exit, and price-taking behavior. Firms maximize profit where P = MC; the firm's demand curve is perfectly elastic at the market price. Long-run equilibrium: P = MC = min ATC with zero economic profit. Perfect competition achieves both allocative and productive efficiency.

Unit 4 – Imperfect Competition

4.1 Introduction to Imperfectly Competitive Markets

Most real-world markets fall between the extremes of perfect competition and pure monopoly. Imperfectly competitive markets share a key feature: firms have some degree of market power, the ability to influence the price of their product. That means the firm faces a downward-sloping demand curve. A perfectly competitive firm, by contrast, faces a horizontal demand curve at the market price.

When a firm faces a downward-sloping demand curve, marginal revenue is less than price (MR < P) for every unit after the first. To sell one more unit, the firm must lower the price on every unit it sells, including that one. The MR curve lies below the demand curve and, for a linear demand curve, has twice the slope.

There are three main types of imperfect competition. Monopoly is a single seller with no close substitutes and high barriers to entry. Monopolistic competition has many firms selling differentiated products, with low barriers to entry. Oligopoly is a few large firms that are interdependent, with significant barriers to entry. Each structure produces different outcomes for price, quantity, efficiency, and profit.

Market power comes from barriers to entry, such as legal restrictions, economies of scale, control of essential resources, and brand loyalty. It also comes from product differentiation (real or perceived differences between products) and from the number of competitors. With more market power, a firm can charge higher prices and earn economic profit, even in the long run, unlike in perfect competition.

Key ideas: Imperfectly competitive firms face downward-sloping demand curves and have market power. MR < P for firms with market power because lowering price applies to all units sold. The three types are monopoly, monopolistic competition, and oligopoly. Market power arises from barriers to entry, product differentiation, and limited competition.

4.2 Monopolies

A monopoly is a market structure with a single seller, no close substitutes for the product, and high barriers to entry that keep competitors out. Monopolies can arise from legal barriers (patents, copyrights, government licenses, franchises). They can also come from control of essential resources, like De Beers' historical control of diamond supply. Finally, there are natural monopoly conditions. Economies of scale are so large that one firm can serve the entire market at lower cost than several firms could, and utilities are the classic example.

The monopolist faces the whole market demand curve, since it is the only firm, and maximizes profit where MR = MC. Because MR < P, the monopolist produces less and charges more than a perfectly competitive market would. This creates deadweight loss. Some transactions that would benefit both sides, and that would happen in a competitive market, do not happen under monopoly. Consumer surplus falls, and total surplus is lower than under perfect competition.

A monopolist can earn positive economic profit in both the short run and the long run. Barriers to entry stop new firms from competing those profits away. That is a basic difference from perfect competition, where long-run economic profit is zero.

Monopoly is not allocatively efficient. Because P > MC, the monopolist charges more than marginal cost, which means too little is produced from society's point of view. It is not productively efficient either, since the monopolist does not necessarily produce at minimum ATC. Governments respond to monopoly with antitrust regulation, which breaks up monopolies or blocks mergers. They may also use price regulation, setting prices closer to competitive levels, especially for natural monopolies, or public ownership.

Key ideas: Monopolies have a single seller, no close substitutes, and high barriers to entry. The monopolist produces where MR = MC, charging P > MC and creating deadweight loss. Monopolists can earn long-run economic profit because barriers prevent entry. Monopoly is neither allocatively nor productively efficient; government may regulate or break up monopolies.

4.3 Price Discrimination

Price discrimination means a firm charges different consumers different prices for the same good, based on their willingness to pay rather than on differences in production costs. A firm needs three things to do it. It must have market power, the ability to set prices. It must be able to identify consumers with different willingness to pay, which is called segmenting the market. It must also be able to prevent resale (arbitrage) between consumer groups.

There are three degrees of price discrimination. First-degree (perfect) price discrimination charges each consumer exactly their maximum willingness to pay, so the firm captures all consumer surplus. This is rare in practice, though some negotiation-based sales and personalized pricing algorithms come close. Second-degree price discrimination charges different prices based on the quantity consumed. Examples are bulk discounts and two-part pricing (a membership fee plus per-unit charges). Third-degree price discrimination charges different prices to different identifiable groups. Examples are student discounts, senior citizen discounts, different prices in different geographic markets, and peak vs. off-peak pricing.

Price discrimination increases the monopolist's profit. Depending on the type, it can raise or lower total surplus. Perfect price discrimination actually eliminates deadweight loss, because the monopolist produces the same quantity as a competitive market. Every consumer who values the good above MC buys it, but all the surplus goes to the producer. Third-degree discrimination can raise output and reduce deadweight loss. That happens if it lets the firm serve markets that a single price would leave unserved.

Key ideas: Price discrimination charges different prices based on willingness to pay, not cost differences. Requirements: market power, ability to segment the market, and prevention of resale. Three degrees: first (individual pricing), second (quantity-based), third (group-based). Perfect price discrimination eliminates deadweight loss but captures all surplus for the producer.

4.4 Monopolistic Competition

Monopolistic competition is a market structure with many firms and differentiated products, meaning each firm's product differs slightly from its competitors'. Barriers to entry and exit are low. Firms have some market power and are not price takers, because their products are differentiated. Examples include restaurants, clothing brands, hair salons, and mobile apps.

In the short run, a monopolistically competitive firm can earn positive, zero, or negative economic profit, depending on demand conditions. Like a monopolist, it maximizes profit where MR = MC. It also charges a price above marginal cost (P > MC), because it faces a downward-sloping demand curve.

In the long run, free entry and exit drive economic profit to zero, just as in perfect competition. If firms earn positive economic profit, new firms enter, attracted by the profits. Competition increases, and each existing firm loses market share as its demand curve shifts leftward. This continues until economic profit reaches zero. At long-run equilibrium, P = ATC (zero economic profit), but P > MC, which is allocative inefficiency. The firm also does not produce at minimum ATC, which is productive inefficiency. It has excess capacity, producing below the output that would minimize average cost.

Monopolistic competition is less efficient than perfect competition because of this allocative and productive inefficiency. In return, it offers product variety and innovation. Consumers value having choices among differentiated products, and they will pay slightly higher prices for products that better match their preferences. The cost of this variety is excess capacity and slightly higher prices than under perfect competition.

Key ideas: Monopolistic competition has many firms, differentiated products, and low barriers to entry. Short-run behavior resembles monopoly (MR = MC, P > MC). Long-run entry drives economic profit to zero (P = ATC), but excess capacity remains. Monopolistic competition is less efficient than perfect competition but provides product variety.

4.5 Oligopoly and Game Theory

Oligopoly is a market structure dominated by a few large firms whose decisions are interdependent. Each firm must consider how its rivals will react to its pricing, output, and marketing decisions. High barriers to entry protect oligopolists from new competition, including economies of scale, patents, brand loyalty, and control of distribution. Examples include the automobile industry, airlines, telecommunications, and tech platforms.

The key feature that sets oligopoly apart from other market structures is mutual interdependence. A perfectly competitive firm ignores rivals because it is too small to matter, and a monopolist has no rivals. An oligopolist must think strategically about how competitors are likely to respond. This interdependence makes oligopoly the most complex market structure to analyze, and it brings in game theory as a tool.

Game theory models strategic interactions between rational decision-makers. The prisoner's dilemma is the most famous game theory model. Two firms each choose whether to cooperate (keep prices high) or defect (cut prices to gain market share). If both cooperate, both earn moderate profits. If both defect, both earn low profits. If one cooperates while the other defects, the defector earns high profits and the cooperator earns very low profits. A dominant strategy is the best choice no matter what the other player does, and here it is to defect. That leads to a Nash equilibrium where both defect, even though both would be better off cooperating.

This explains why oligopolistic firms often try to collude by forming cartels (like OPEC) that agree to restrict output and keep prices high. Collusion is unstable, though, because each firm has an incentive to cheat by producing more than agreed to capture extra profit. Collusion is also illegal in most countries under antitrust laws. Without collusion, oligopolies may compete through non-price means instead of destructive price wars. These include advertising, product differentiation, and service quality.

Key ideas: Oligopoly features a few large firms with mutual interdependence and high barriers to entry. Game theory analyzes strategic interactions; the prisoner's dilemma shows why cooperation is difficult. The dominant strategy often leads to outcomes worse than mutual cooperation. Collusion (cartels) is profitable but unstable and usually illegal; non-price competition is common.

Unit 5 – Factor Markets

5.1 Introduction to Factor Markets

Factor markets (also called resource markets or input markets) are where the factors of production (land, labor, capital, and entrepreneurship) are bought and sold. In product markets, firms are sellers and households are buyers. In factor markets the roles reverse. Firms are the buyers, demanding labor, capital, and other inputs, and households are the sellers, supplying their labor, land, and savings.

The demand for factors of production is a derived demand: it comes from the demand for the goods and services those factors produce. A car manufacturer's demand for steel workers depends on the demand for cars. If car demand increases, so does the demand for steel workers. This link ties factor markets directly to product markets.

The marginal revenue product (MRP) of a factor is the additional revenue a firm earns from employing one more unit of it. MRP = Marginal Product (MP) × Marginal Revenue (MR). For a competitive firm, where MR = P, MRP = MP × P (marginal product times price). The MRP curve is the firm's demand curve for the factor. The firm keeps hiring more units of the factor as long as MRP ≥ the factor's price (the wage, rental rate, and so on).

A profit-maximizing firm hires a factor up to the point where MRP = Factor Price. If MRP > wage, the additional worker brings in more revenue than they cost, so hire them. If MRP < wage, the additional worker costs more than they bring in, so don't hire. This rule applies to every factor, including labor.

Key ideas: Factor markets are where inputs are bought and sold; firms are buyers, households are sellers. Factor demand is derived from demand for the products factors produce. MRP = MP × MR; the MRP curve is the firm's demand curve for a factor. Profit maximization: hire where MRP = Factor Price.

5.2 Changes in Factor Demand and Factor Supply

Factor demand shifts with changes in demand for the product (derived demand), in the productivity of the factor, or in the prices of other factors. An increase in product demand shifts the MRP curve rightward, so firms want more of the factor at every price. Technological improvements that raise a factor's marginal product also shift its demand rightward. Changes in the price of substitute or complementary inputs can raise or lower demand for a given factor.

Each factor's supply responds to its own determinants. Labor supply depends on the wage rate, working conditions, education and training requirements, geographic mobility, and immigration policy. It also depends on cultural factors, such as labor force participation rates among different demographic groups. The supply of capital depends on savings rates, interest rates, and investment incentives. The total supply of land is essentially fixed (perfectly inelastic), though land can be shifted among uses.

The equilibrium factor price (the wage, rental rate, or interest rate) is set where factor demand and factor supply intersect. Product prices are determined the same way, by product supply and demand. When factor demand increases (a rightward shift), the factor price rises and the quantity employed increases. When factor supply increases (a rightward shift), the factor price falls and the quantity employed increases.

Key ideas: Factor demand shifts with changes in product demand, factor productivity, and prices of other inputs. Labor supply depends on wages, working conditions, education, and demographics. Land supply is essentially fixed; capital supply depends on savings and investment incentives. Equilibrium factor prices are determined by factor supply and demand.

5.3 Perfectly Competitive Labor Markets

In a perfectly competitive labor market, many firms compete for workers and many workers compete for jobs. Workers are homogeneous, meaning interchangeable. Neither firms nor workers have the power to influence the market wage. Each firm takes the market wage as given and hires workers until MRP = Wage.

Market demand for labor is the horizontal sum of all firms' MRP curves. Market supply of labor slopes upward, because higher wages attract more workers (or more hours from existing workers). Market equilibrium sets the wage rate and the total quantity of labor employed. Each individual firm can hire as many workers as it wants at the market wage. So the firm faces a perfectly elastic (horizontal) labor supply curve.

At the profit-maximizing level of employment (where MRP = Wage), each worker is paid exactly what the last unit of labor adds to revenue. Workers whose MRP exceeds the wage generate surplus value for the firm. The area between the MRP curve and the wage line is the firm's surplus from hiring labor, similar to producer surplus.

In competitive labor markets, several things explain why wages differ between occupations. One is differences in MRP, which depend on the demand for the product and the worker's productivity. Another is differences in human capital (education, training, experience, skills). Compensating differentials are higher wages paid for dangerous, unpleasant, or high-stress jobs. Barriers to entry also matter, such as licensing requirements, educational prerequisites, and union restrictions.

Key ideas: In perfectly competitive labor markets, firms are wage takers and hire where MRP = Wage. The market wage is determined by market supply and demand for labor. Wage differentials reflect differences in MRP, human capital, compensating differentials, and barriers to entry. Each worker is paid according to their marginal contribution to revenue.

5.4 Monopsony Markets

A monopsony is a labor market with a single buyer of labor, where one firm is the only employer. A monopolist is the sole seller of a product, and a monopsonist is the sole buyer of a factor, usually labor. Examples include a single large employer in a small town, such as a military base, a mining company, or a hospital in a rural area.

Because the monopsonist is the only employer, it faces the entire upward-sloping market supply curve for labor. To hire more workers, it must raise the wage for every worker it employs, including the ones already hired. So the marginal factor cost (MFC), the additional cost of hiring one more worker, is higher than the wage. The MFC curve lies above the labor supply curve.

The monopsonist maximizes profit by hiring where MFC = MRP. Because MFC > Wage at that point, the monopsonist hires fewer workers and pays a lower wage than a competitive labor market would. This creates deadweight loss. Fewer workers are employed than the efficient quantity, and those employed are paid less than their marginal revenue product.

A minimum wage can actually increase employment in a monopsony market. In a competitive market, by contrast, a minimum wage above equilibrium causes unemployment. Suppose the minimum wage is set between the monopsony wage and the competitive wage. The monopsonist's MFC then becomes the minimum wage, a constant amount. That holds up to the quantity where the supply curve meets the minimum wage. Because MFC is now lower (equal to the minimum wage instead of above the supply curve), the quantity of labor demanded rises. This is one of the few cases where a price floor can increase efficiency.

Key ideas: A monopsonist is a single buyer of labor, facing the upward-sloping market supply curve. MFC > Wage because hiring more requires raising the wage for all workers. The monopsonist hires fewer workers at a lower wage than competitive markets. A minimum wage can increase employment in a monopsony, unlike in competitive markets.

Unit 6 – Market Failure and the Role of Government

6.1 Socially Efficient and Inefficient Market Outcomes

Markets reach socially efficient outcomes when they produce the quantity at which marginal social benefit (MSB) equals marginal social cost (MSC). MSB and MSC count the benefits and costs to everyone in society, including people outside the transaction. When there are no market failures, the demand curve reflects MSB and the supply curve reflects MSC. The competitive equilibrium is then socially optimal: total surplus is maximized and there is no deadweight loss.

Market failure occurs when markets fail to allocate resources efficiently. There are four main types. Externalities are costs or benefits that affect parties not involved in the transaction. Public goods are goods that are non-excludable and non-rivalrous. Imperfect competition is market power that lets firms produce less and charge more than the efficient outcome. Imperfect information is when buyers or sellers lack important information about products, prices, or quality.

When a market fails, its equilibrium quantity differs from the socially optimal quantity, which creates deadweight loss. Government can potentially improve efficiency by correcting the failure. Its tools include taxes, subsidies, regulations, provision of public goods, antitrust enforcement, and information requirements. Government intervention does not always succeed, though. Government failure is also possible, when intervention makes outcomes worse instead of better because of unintended consequences, political pressures, or administrative costs.

Key ideas: Social efficiency requires MSB = MSC; competitive markets achieve this in the absence of market failure. Market failures include externalities, public goods, imperfect competition, and imperfect information. Market failure creates deadweight loss: the market produces too much or too little of a good. Government can correct market failures but may also create government failure.

6.2 Externalities

An externality is a cost or benefit that affects a party not directly involved in a market transaction. When a factory pollutes a river, the people downstream bear costs (health problems, lost recreation) that the factory's production costs do not include. That is a negative externality. When a homeowner keeps up a beautiful garden, neighbors enjoy the pleasant view without paying for it. That is a positive externality.

Negative externalities make markets overproduce. The private cost (what the firm pays) is less than the social cost, which is the private cost plus the external cost imposed on third parties. So the supply curve based on private costs lies to the right of the socially optimal supply curve. Government can correct negative externalities with Pigovian taxes, set equal to the external cost per unit. These taxes internalize the externality, meaning the firm now pays that cost, and they cut production to the socially optimal level. Other tools are regulations (emission standards, pollution permits) and cap-and-trade systems.

Positive externalities make markets underproduce. The private benefit (what the buyer gains) is less than the social benefit, which is the private benefit plus the external benefit to third parties. So the demand curve based on private benefits lies to the left of the socially optimal demand curve. Government can correct positive externalities with subsidies, which lower the price and raise consumption to the socially optimal level. It can also provide the good directly, as with public education and vaccination programs.

The Coase theorem suggests that private parties can negotiate their way to the efficient outcome without government intervention. That works if property rights are well-defined and transaction costs are low, regardless of who holds the property rights at the start. In practice, though, high transaction costs and the involvement of many parties often make private negotiation impractical. That justifies government intervention.

Key ideas: Negative externalities cause overproduction; positive externalities cause underproduction. Pigovian taxes internalize negative externalities; subsidies correct positive externalities. The social cost/benefit differs from the private cost/benefit by the external cost/benefit. The Coase theorem suggests private solutions are possible if property rights are clear and transaction costs are low.

6.3 Public and Private Goods

Goods can be classified by two characteristics. Excludability is whether non-payers can be kept from consuming the good. Rivalry is whether one person's consumption reduces the amount left for others.

Private goods are both excludable and rivalrous, which covers most consumer products like food, clothing, and electronics. Markets provide private goods efficiently. Firms can charge prices because of excludability, and greater demand calls for more production because of rivalry.

Public goods are non-excludable and non-rivalrous. Examples are national defense, public fireworks displays, lighthouses, and flood control. No one can be excluded from benefiting, and one person's use does not reduce what is available to others. Markets underprovide public goods because of the free-rider problem. People can benefit without paying, so they have no incentive to contribute voluntarily, and firms have no way to charge for the good. Government typically provides public goods and pays for them through taxation.

Common resources are rivalrous but non-excludable. Examples are ocean fisheries, clean air, and public grazing land. No one can be excluded, but one person's use reduces what is left for others. As a result, common resources tend to be overused, which is called the "tragedy of the commons." Government can respond with regulation (fishing quotas, emissions limits), by assigning property rights, or with Pigovian taxes.

Club goods are excludable but non-rivalrous: people who don't pay can be kept out, but one person using the good doesn't leave less for anyone else. Examples are cable TV, streaming services, and toll roads when they are not congested. Some club goods, like cable TV, are supplied by natural monopolies. Because non-payers can be kept out, private firms can sell club goods. Pricing them is tricky, though, because the marginal cost of serving one more user is close to zero.

Key ideas: Private goods are excludable and rivalrous: markets provide them efficiently. Public goods are non-excludable and non-rivalrous: markets underprovide them due to the free-rider problem. Common resources are rivalrous but non-excludable; they tend to be overused (tragedy of the commons). Government provides public goods through taxation and manages common resources through regulation.

6.4 The Effects of Government Intervention in Different Market Structures

Government intervention affects market outcomes differently depending on the market structure. In perfectly competitive markets, intervention such as price controls, taxes, and subsidies typically pulls the market away from the efficient equilibrium and creates deadweight loss. When externalities or other market failures are present, however, well-designed intervention can actually increase efficiency.

In monopoly markets, government regulation can improve outcomes. Antitrust laws (like the Sherman Act and Clayton Act in the U.S.) prevent monopolistic practices and promote competition. Natural monopolies are often regulated to keep them from charging monopoly prices. Regulators may impose marginal cost pricing (P = MC). This is allocatively efficient, but if MC < ATC the firm may take losses. Alternatively, regulators may use average cost pricing (P = ATC). It lets the firm break even while still pushing the price below the monopoly level.

In oligopoly markets, antitrust enforcement prevents collusion and anti-competitive practices. The government may block mergers that would reduce competition or punish price-fixing agreements. Telling legitimate competitive behavior apart from anti-competitive practices can be difficult, however.

Government also addresses market failures through information requirements, such as truth-in-lending laws, food labeling, and securities disclosure. Consumer protection regulations and environmental standards serve the same purpose. The goal is to correct specific market failures while keeping as much of the benefit of market competition as possible.

Key ideas: Government intervention can worsen efficiency in competitive markets but improve it when market failures exist. Antitrust laws prevent monopolistic practices and promote competition. Natural monopolies may be regulated through marginal cost or average cost pricing. Information requirements and consumer protections address market failures from imperfect information.

6.5 Inequality

Income and wealth inequality are significant economic and political issues. Income inequality means income is spread unevenly across a population. The Lorenz curve is a graph of income distribution. It plots the cumulative percentage of income received against the cumulative percentage of the population. A perfectly equal distribution would be a 45-degree line, called the line of equality. The further the Lorenz curve bows away from the 45-degree line, the greater the inequality.

The Gini coefficient (or Gini index) is a numerical measure of inequality based on the Lorenz curve. It ranges from 0, perfect equality where everyone has the same income, to 1, perfect inequality where one person has all the income. To calculate it, take the area between the line of equality and the Lorenz curve. Then divide by the total area under the line of equality.

Income inequality has many sources. They include differences in human capital (education, skills, experience) and differences in natural ability and effort. Discrimination based on race, gender, or ethnicity is another, along with inheritance of wealth. Market power plays a role, since some workers have more bargaining power than others. So do government policies, such as the tax structure, social programs, and the minimum wage.

Governments address inequality in several ways. One is progressive taxation, with higher tax rates on higher incomes. Others are transfer payments (Social Security, unemployment insurance, food assistance) and in-kind benefits (public housing, Medicaid). Minimum wage laws, public education, and anti-discrimination legislation are also used. There is an ongoing debate about the trade-off between equity (reducing inequality) and efficiency (keeping incentives for productive activity). Policies that reduce inequality may also weaken incentives to work, save, invest, and innovate, though how large these effects are is debated.

Key ideas: The Lorenz curve graphically displays income distribution; the Gini coefficient numerically measures inequality. Inequality arises from differences in human capital, discrimination, inheritance, and market power. Government addresses inequality through progressive taxes, transfers, education, and anti-discrimination laws. The equity-efficiency trade-off is a central debate: reducing inequality may affect incentives.
`


export const MICROECONOMICS_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Microeconomics',
  units: parseRawOverview(RAW_MICROECONOMICS),
  features: { latex: false, codeExamples: false },
}


import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: This is source-preserving content. Do not edit wording/length unless the source changes.
const RAW_MICROECONOMICS = `AP Microeconomics

Unit 1 – Basic Economic Concepts

1.1 Scarcity

Scarcity is the foundational concept in economics. It arises because human wants are virtually unlimited while the resources available to satisfy those wants, land, labor, capital, and entrepreneurship, are finite. Every individual, firm, and society must therefore make choices about how to allocate scarce resources among competing uses. These choices necessarily involve trade-offs: using a resource for one purpose means it cannot be used for another.

The four factors of production are land (all natural resources used in production, including minerals, water, timber, and arable soil), labor (human effort, both physical and mental, applied to production), capital (human-made resources used to produce other goods and services, machinery, tools, factories, infrastructure, not to be confused with financial capital or money), and entrepreneurship (the ability to combine the other three factors, take risks, and innovate to create new products or processes). Each factor of production earns a return: land earns rent, labor earns wages, capital earns interest, and entrepreneurship earns profit.

Microeconomics focuses on the decisions of individual consumers and firms and how they interact in specific markets, as opposed to macroeconomics, which studies the economy as a whole. The central question of microeconomics is how scarce resources are allocated through the price mechanism in markets, how prices coordinate the decisions of millions of independent buyers and sellers to determine what gets produced, how it gets produced, and who gets the output.

Key ideas: Scarcity forces choices and trade-offs because wants are unlimited but resources are finite. The four factors of production are land, labor, capital, and entrepreneurship. Microeconomics studies individual decision-making and market interactions. The price mechanism coordinates resource allocation in market economies.

1.2 Resource Allocation and Economic Systems

Every society must answer three fundamental economic questions: What goods and services should be produced? How should they be produced (with what combination of resources and technology)? For whom should they be produced (how should output be distributed)? Different economic systems answer these questions in different ways.

In a command (planned) economy, the government makes most economic decisions, determining what to produce, how to produce it, and how to distribute it. The Soviet Union was the most prominent example. Command economies can mobilize resources quickly for national priorities but tend to be inefficient because central planners lack the information and incentives that markets provide. They often produce the wrong goods, in the wrong quantities, using the wrong methods.

In a market (capitalist) economy, these decisions are made by individuals and firms interacting in markets. The price mechanism, Adam Smith's "invisible hand", coordinates decisions through the signals that prices send to buyers and sellers. When demand for a good increases, its price rises, signaling producers to make more and consumers to buy less, moving the market toward equilibrium. Market economies tend to be more efficient and innovative but can produce inequality, environmental damage, and instability.

In practice, all modern economies are mixed economies that combine elements of market and command systems. Governments in mixed economies provide public goods, regulate markets, redistribute income, and intervene to correct market failures, while allowing private enterprise and market forces to drive most production and consumption decisions. The degree of government involvement varies across countries and over time.

Key ideas: Every society must answer what, how, and for whom to produce. Command economies rely on government planning; market economies rely on the price mechanism. Adam Smith's "invisible hand" describes how self-interested decisions can produce socially beneficial outcomes. All modern economies are mixed, combining market and government elements.

1.3 Production Possibilities Curve (PPC)

The Production Possibilities Curve (PPC) is a model that illustrates the concepts of scarcity, opportunity cost, efficiency, and economic growth. It shows the maximum combinations of two goods that an economy can produce when all resources are fully and efficiently employed with current technology. The PPC is a frontier; it represents the boundary between what is attainable and what is not.

Points on the curve represent productive efficiency; all resources are being used, and it is impossible to produce more of one good without producing less of the other. Points inside the curve represent inefficiency, resources are unemployed or misallocated, and the economy could produce more of both goods. Points outside the curve are currently unattainable given existing resources and technology.

The PPC is typically bowed outward (concave to the origin), reflecting the law of increasing opportunity costs. As production of one good increases, the opportunity cost of each additional unit rises because resources are not equally suited to producing all goods. The best resources for producing a particular good are used first; as production expands, less suitable resources must be diverted from the other good, yielding diminishing returns.

A straight-line PPC would indicate constant opportunity costs, resources are equally productive in both uses. This is possible but unusual in real economies. Economic growth, caused by increases in resources, improvements in technology, or better institutions, shifts the entire PPC outward, making previously unattainable combinations achievable.

Key ideas: The PPC shows maximum output combinations given scarce resources and current technology. Points on the curve are efficient; inside is inefficient; outside is unattainable. The bowed-out shape reflects increasing opportunity costs as resources are reallocated. Economic growth shifts the PPC outward through more resources, better technology, or improved institutions.

1.4 Comparative Advantage and Trade

Specialization and voluntary trade can make all parties better off, even when one party is absolutely more productive at everything. This is one of economics' most powerful insights and rests on the concept of comparative advantage, a producer has a comparative advantage in a good if it can produce that good at a lower opportunity cost than another producer.

Absolute advantage means being able to produce more of a good with the same resources. Comparative advantage means producing at a lower opportunity cost. A country can have an absolute advantage in both goods but cannot have a comparative advantage in both, comparative advantage is always relative. By specializing in the good for which each party has a comparative advantage and trading, both parties can consume beyond their individual PPCs.

The terms of trade, the rate at which goods are exchanged, must fall between the opportunity costs of the two trading partners for both to benefit. If the terms of trade equal one partner's opportunity cost, that partner gains nothing from trade while the other captures all the gains. The further the terms of trade are from a partner's opportunity cost, the more that partner benefits.

Output tables and PPC problems are common on the AP exam. To determine comparative advantage, calculate each producer's opportunity cost for each good (what they give up to produce one more unit), then compare. The producer with the lower opportunity cost has the comparative advantage in that good. Remember: the opportunity costs are reciprocals, if producing 1 unit of Good A costs 2 units of Good B, then producing 1 unit of Good B costs 0.5 units of Good A.

Key ideas: Comparative advantage means producing at a lower opportunity cost, not necessarily producing more. All parties benefit from specialization and trade based on comparative advantage. Terms of trade must fall between the two partners' opportunity costs. Opportunity costs for two goods are always reciprocals of each other.

1.5 Cost-Benefit Analysis

Rational economic decision-making involves comparing the marginal benefits and marginal costs of each action. An action should be taken if the marginal benefit (the additional benefit from one more unit) exceeds the marginal cost (the additional cost of one more unit). The optimal quantity of any activity is where marginal benefit equals marginal cost (MB = MC).

Cost-benefit analysis applies to all economic decisions, consumers deciding how much to buy, firms deciding how much to produce, governments deciding whether to undertake a public project. A consumer should buy another unit of a good as long as the marginal utility (satisfaction) from that unit exceeds its price. A firm should produce another unit as long as the marginal revenue exceeds the marginal cost. A government should invest in a project if the total social benefits exceed the total social costs.

Sunk costs, costs that have already been incurred and cannot be recovered, should not affect current decisions. Rational decision-makers consider only marginal costs and benefits going forward, not past expenditures. For example, the money already spent on a movie ticket should not influence the decision to stay or leave the theater, only the expected enjoyment (marginal benefit) of continuing to watch versus doing something else matters.

Implicit costs are opportunity costs that do not involve direct monetary payments, for example, the income a business owner forgoes by not working for someone else. Explicit costs involve direct monetary payments, wages, rent, materials. Economic decision-making should include both implicit and explicit costs to capture the true opportunity cost of any choice.

Key ideas: Rational decisions compare marginal benefits and marginal costs. The optimal quantity is where MB = MC. Sunk costs should be ignored in current decision-making. Implicit costs (opportunity costs without monetary payment) must be included alongside explicit costs.

1.6 Marginal Analysis and Consumer Choice

Utility is the satisfaction or benefit a consumer derives from consuming a good or service. Total utility is the total satisfaction from consuming a given quantity. Marginal utility is the additional satisfaction from consuming one more unit. The law of diminishing marginal utility states that as a consumer consumes more of a good, the additional satisfaction from each additional unit decreases, the first slice of pizza is delicious, the second is good, the third is okay, and by the fifth, you might feel sick.

The utility-maximizing rule states that a consumer maximizes total utility when the marginal utility per dollar spent is equal across all goods: MU_A / P_A = MU_B / P_B = ... for all goods A, B, etc. If the marginal utility per dollar from Good A exceeds that from Good B, the consumer should buy more of A and less of B (shifting spending toward the good with higher marginal utility per dollar) until the ratios equalize.

This rule connects to the demand curve. The law of diminishing marginal utility explains why the demand curve slopes downward: as a consumer acquires more of a good, the marginal utility decreases, so the consumer is willing to pay less for additional units. The demand curve reflects the maximum price a consumer is willing to pay for each additional unit, which corresponds to the marginal utility of that unit.

Consumer surplus is the difference between what a consumer is willing to pay for a good (as reflected by the demand curve) and the actual price paid. Graphically, consumer surplus is the area between the demand curve and the price line. It represents the net benefit consumers receive from market transactions.

Key ideas: Utility is satisfaction from consumption; marginal utility diminishes with each additional unit. Consumers maximize utility when MU per dollar is equal across all goods. Diminishing marginal utility explains the downward-sloping demand curve. Consumer surplus is the difference between willingness to pay and the actual price.

Unit 2 – Supply and Demand

2.1 Demand

Demand represents the relationship between the price of a good and the quantity consumers are willing and able to purchase, holding all other factors constant (ceteris paribus). The law of demand states that price and quantity demanded are inversely related, as price rises, quantity demanded falls; as price falls, quantity demanded rises. This produces a downward-sloping demand curve.

The law of demand is explained by the substitution effect (when a good's price rises, consumers switch to cheaper alternatives) and the income effect (when a good's price rises, consumers' purchasing power decreases, so they buy less of all normal goods). Individual demand curves can be horizontally summed to create market demand curves.

A change in price causes a movement along the demand curve, a change in quantity demanded. A shift in any non-price determinant causes the entire demand curve to shift, a change in demand. The non-price determinants are consumer tastes and preferences, number of buyers, consumer income (demand for normal goods increases with income; demand for inferior goods decreases with income), prices of related goods (substitutes and complements), and expectations about future prices or income.

A substitute is a good that can replace another (Coke and Pepsi), when the price of one rises, demand for the other increases. A complement is a good used together with another (hot dogs and buns), when the price of one rises, demand for the other decreases.

Key ideas: The law of demand: price and quantity demanded are inversely related. Price changes cause movements along the curve; non-price determinants shift the curve. Non-price determinants include tastes, number of buyers, income, related goods' prices, and expectations. Substitutes have positive cross-price relationships; complements have negative ones.

2.2 Supply

Supply represents the relationship between the price of a good and the quantity producers are willing and able to offer for sale, ceteris paribus. The law of supply states that price and quantity supplied are positively related, as price rises, quantity supplied increases because higher prices make production more profitable, incentivizing firms to produce more.

A change in price causes a movement along the supply curve (change in quantity supplied). A shift in any non-price determinant causes the entire curve to shift (change in supply). Non-price determinants include input prices (higher input costs reduce supply), technology (improvements increase supply), number of sellers, expectations about future prices, government policies (taxes reduce supply; subsidies increase it), and prices of related goods in production.

An increase in supply (rightward shift) means firms offer more at every price. A decrease in supply (leftward shift) means firms offer less at every price. The distinction between movements along the curve and shifts of the curve is critical for AP exam success, confusing the two is one of the most common errors.

Producer surplus is the difference between the actual price received and the minimum price a producer is willing to accept (as reflected by the supply curve). Graphically, it is the area between the price line and the supply curve. It represents the net benefit producers receive from market transactions.

Key ideas: The law of supply: price and quantity supplied are positively related. Price changes cause movements along the curve; non-price determinants shift the curve. Input prices, technology, number of sellers, expectations, and government policies are key shifters. Producer surplus is the difference between the market price and the minimum acceptable price.

2.3 Price Elasticity of Demand

Price elasticity of demand (PED) measures the responsiveness of quantity demanded to a change in price. It is calculated as the percentage change in quantity demanded divided by the percentage change in price: PED = %ΔQd / %ΔP. Because the law of demand ensures that price and quantity move in opposite directions, PED is technically negative, but economists typically use the absolute value.

If PED > 1, demand is elastic, quantity demanded is relatively responsive to price changes (a small price change causes a large change in quantity demanded). If PED < 1, demand is inelastic, quantity demanded is relatively unresponsive (a large price change causes only a small change in quantity demanded). If PED = 1, demand is unit elastic. If PED = 0, demand is perfectly inelastic (vertical demand curve). If PED = infinity, demand is perfectly elastic (horizontal demand curve).

Determinants of elasticity include the availability of substitutes (more substitutes = more elastic), the proportion of income spent on the good (higher proportion = more elastic), whether the good is a necessity or luxury (luxuries are more elastic), and the time horizon (demand is more elastic in the long run because consumers have more time to adjust behavior and find substitutes).

The relationship between elasticity and total revenue is crucial. If demand is elastic, a price decrease increases total revenue (the increase in quantity more than offsets the lower price). If demand is inelastic, a price decrease decreases total revenue (the quantity increase is too small to offset the lower price). At unit elasticity, total revenue is maximized.

Key ideas: PED = %ΔQd / %ΔP; elastic if > 1, inelastic if < 1, unit elastic if = 1. Determinants include substitute availability, income share, necessity vs. luxury, and time horizon. Elastic demand: price cuts increase total revenue. Inelastic demand: price cuts decrease total revenue. Total revenue is maximized at unit elasticity.

2.4 Price Elasticity of Supply

Price elasticity of supply (PES) measures the responsiveness of quantity supplied to a change in price: PES = %ΔQs / %ΔP. Unlike demand elasticity, PES is positive because price and quantity supplied move in the same direction.

If PES > 1, supply is elastic, firms can easily increase output when prices rise. If PES < 1, supply is inelastic, firms have difficulty increasing output even when prices rise. Perfectly inelastic supply (PES = 0) is a vertical supply curve, quantity supplied does not change regardless of price (e.g., beachfront land). Perfectly elastic supply (PES = infinity) is a horizontal supply curve.

The primary determinant of supply elasticity is time. In the immediate market period (momentary run), supply is perfectly inelastic, firms cannot change output at all. In the short run, firms can adjust variable inputs (labor, materials) but not fixed inputs (factory size), so supply is somewhat elastic. In the long run, firms can adjust all inputs, enter or exit the industry, and build new facilities, making supply most elastic.

Other determinants include the availability of inputs (if inputs are readily available, supply is more elastic), the nature of the production process (handcrafted goods have less elastic supply than mass-produced goods), spare capacity (firms with unused capacity can respond more quickly to price increases), and the ability to store output (storable goods have more elastic supply).

Key ideas: PES = %ΔQs / %ΔP; elastic if > 1, inelastic if < 1. Time is the primary determinant, supply becomes more elastic over longer time horizons. Input availability, production processes, spare capacity, and storability also affect PES. Perfectly inelastic supply is a vertical curve (fixed quantity regardless of price).

2.5 Other Elasticities

Cross-price elasticity of demand measures how the quantity demanded of one good responds to a change in the price of another good: Cross-PED = %ΔQd of Good A / %ΔP of Good B. If cross-price elasticity is positive, the goods are substitutes (an increase in the price of Good B increases demand for Good A). If it is negative, the goods are complements (an increase in the price of Good B decreases demand for Good A). If it is zero or near zero, the goods are unrelated.

Income elasticity of demand measures how the quantity demanded responds to a change in consumer income: YED = %ΔQd / %ΔIncome. If income elasticity is positive, the good is a normal good (demand increases with income). If it is negative, the good is an inferior good (demand decreases as income rises, consumers switch to higher-quality alternatives). Among normal goods, those with income elasticity greater than 1 are luxury goods (demand grows faster than income), and those between 0 and 1 are necessities (demand grows more slowly than income).

These elasticities have practical applications. Businesses use cross-price elasticity to identify competitors (high positive cross-PED) and complementary products (negative cross-PED) for pricing and marketing strategies. Governments use income elasticity to predict how tax revenues (which depend on spending patterns) will change as the economy grows. During recessions, demand for inferior goods tends to increase while demand for luxury goods decreases.

Key ideas: Cross-price elasticity is positive for substitutes, negative for complements. Income elasticity is positive for normal goods, negative for inferior goods. Normal goods with YED > 1 are luxuries; those with 0 < YED < 1 are necessities. These elasticities help businesses and governments predict demand responses to economic changes.

2.6 Market Equilibrium and Consumer and Producer Surplus

Market equilibrium occurs at the price where quantity demanded equals quantity supplied. At this price, the market clears; every unit produced finds a buyer, and every buyer willing to pay the equilibrium price can purchase the good. There is no surplus (excess supply) or shortage (excess demand).

Consumer surplus is the area between the demand curve and the equilibrium price; it represents the total benefit consumers receive above what they actually pay. Producer surplus is the area between the equilibrium price and the supply curve; it represents the total benefit producers receive above their minimum acceptable price. Total surplus (economic surplus) is the sum of consumer and producer surplus and represents the total net benefit to society from market transactions.

In a competitive market at equilibrium, total surplus is maximized, the market achieves allocative efficiency. This is the condition where the marginal benefit to consumers (reflected by the demand curve) equals the marginal cost to producers (reflected by the supply curve) for the last unit produced. No reallocation of resources could make anyone better off without making someone else worse off; this is Pareto efficiency.

Deadweight loss occurs when the market does not produce at the allocatively efficient quantity; some mutually beneficial transactions do not occur. Deadweight loss can result from price controls, taxes, monopoly power, or externalities. It represents a net loss to society, surplus that is destroyed rather than simply transferred from one group to another.

Key ideas: Equilibrium maximizes total surplus (consumer surplus + producer surplus). Consumer surplus is the area between the demand curve and the price; producer surplus is the area between the price and the supply curve. Allocative efficiency occurs where MB = MC (at competitive equilibrium). Deadweight loss represents surplus destroyed when markets fail to reach the efficient outcome.

2.7 Market Disequilibrium and Changes in Equilibrium

Disequilibrium occurs when the price is not at the equilibrium level. A price above equilibrium creates a surplus, quantity supplied exceeds quantity demanded. Sellers with unsold goods lower their prices, which increases quantity demanded and decreases quantity supplied, moving the market toward equilibrium. A price below equilibrium creates a shortage, quantity demanded exceeds quantity supplied. Buyers competing for scarce goods bid up the price, which decreases quantity demanded and increases quantity supplied.

Changes in equilibrium result from shifts in demand, supply, or both. When demand increases (shifts right), equilibrium price and quantity both rise. When demand decreases (shifts left), both fall. When supply increases (shifts right), equilibrium price falls and quantity rises. When supply decreases (shifts left), price rises and quantity falls.

When both curves shift simultaneously, the effect on one variable is determinate (can be predicted regardless of the magnitude of the shifts) while the effect on the other is indeterminate (depends on which shift is larger). For example, if both demand and supply increase, quantity definitely increases, but the effect on price depends on whether demand or supply shifted more.

Students should practice identifying the correct shifts from verbal descriptions of economic events and then determining the effects on equilibrium price and quantity. This analytical skill, translating real-world events into supply and demand shifts and predicting outcomes, is tested heavily on the AP exam.

Key ideas: Surpluses (price above equilibrium) drive prices down; shortages (price below) drive prices up. Demand shifts change price and quantity in the same direction; supply shifts change them in opposite directions. Simultaneous shifts produce one determinate and one indeterminate effect. Translating events into supply/demand shifts and predicting outcomes is a core AP skill.

2.8 The Effects of Government Intervention in Markets

Governments intervene in markets through price controls, taxes, and subsidies. These interventions alter market outcomes and typically create deadweight loss by preventing the market from reaching the efficient equilibrium.

A price ceiling is a legal maximum price set below the equilibrium price. Rent control is a common example. Price ceilings create shortages (quantity demanded exceeds quantity supplied at the artificially low price), reduce producer surplus, and create deadweight loss. They may also lead to black markets, reduced quality, and inefficient allocation (the good may not go to those who value it most).

A price floor is a legal minimum price set above the equilibrium price. The minimum wage is the most common example. Price floors create surpluses (quantity supplied exceeds quantity demanded at the artificially high price), reduce consumer surplus, and create deadweight loss. In labor markets, a minimum wage above the equilibrium wage creates a surplus of labor, unemployment.

Per-unit taxes imposed on producers shift the supply curve leftward (upward) by the amount of the tax, raising the price buyers pay, lowering the price sellers receive, and reducing the quantity traded. The tax revenue goes to the government, but total surplus decreases because of deadweight loss. The burden (incidence) of the tax depends on the relative elasticities of supply and demand, the more inelastic side bears a larger share of the tax burden.

Subsidies are the reverse of taxes; they shift the supply curve rightward, lowering the price buyers pay, raising the price sellers receive, and increasing quantity. Subsidies create their own deadweight loss because the government pays more in subsidies than the increase in consumer and producer surplus.

Key ideas: Price ceilings below equilibrium create shortages and deadweight loss. Price floors above equilibrium create surpluses and deadweight loss. Taxes reduce quantity traded and create deadweight loss; the more inelastic side bears more of the burden. Subsidies increase quantity but create deadweight loss from overproduction.

2.9 International Trade and Public Policy

International trade allows countries to specialize according to comparative advantage and consume beyond their domestic PPCs. When a country opens to trade, it exports goods in which it has a comparative advantage and imports goods in which it does not. The world price (the price at which a good is traded internationally) determines whether a country is an exporter or importer of a particular good.

If the world price is above the domestic equilibrium price, the country exports, domestic producers increase output while domestic consumers reduce purchases, and the difference is exported. Domestic producer surplus increases, domestic consumer surplus decreases, but total surplus increases, the gains to producers outweigh the losses to consumers. If the world price is below the domestic equilibrium, the country imports, domestic consumers benefit from lower prices, domestic producers are hurt, but total surplus increases.

Tariffs (taxes on imports) raise the domestic price above the world price, reducing imports, benefiting domestic producers, harming consumers, generating government revenue, and creating deadweight loss. Import quotas (limits on the quantity of imports) have similar effects but do not generate government revenue, the revenue equivalent goes to whoever holds the quota rights (often foreign producers or domestic importers).

Trade restrictions are often justified on grounds of protecting domestic jobs, national security, infant industries, or preventing unfair trade practices (like dumping, selling below cost to drive out competitors). Economists generally argue that while trade creates winners and losers, the gains from trade exceed the losses, and that protecting losers through retraining and safety-net programs is more efficient than restricting trade.

Key ideas: Countries export goods where the world price exceeds the domestic price and import where it is lower. Free trade increases total surplus but creates winners (exporters, consumers of imports) and losers (import-competing producers). Tariffs and quotas reduce imports, benefit domestic producers, harm consumers, and create deadweight loss. Economists generally favor free trade with compensation for displaced workers.

Unit 3 – Production, Cost, and the Perfect Competition Model

3.1 The Production Function

The production function describes the relationship between inputs (factors of production) and output. In the short run, at least one input is fixed (typically capital, the factory, machinery), while other inputs (labor, raw materials) are variable. In the long run, all inputs are variable, firms can build new factories, install new equipment, and enter or exit industries.

Total product (TP) is the total output produced. Marginal product (MP) is the additional output produced by one more unit of a variable input (usually labor): MP = ΔTP / ΔL. Average product (AP) is output per unit of input: AP = TP / L.

The law of diminishing marginal returns states that as additional units of a variable input are added to a fixed input, the marginal product of the variable input eventually decreases. Adding workers to a fixed-size kitchen initially increases output rapidly (specialization and division of labor), but eventually each additional worker adds less output because the kitchen becomes overcrowded. This law applies only in the short run (when at least one input is fixed) and is the key to understanding short-run cost curves.

The relationship between marginal and average product follows a mathematical rule: when MP > AP, AP is rising; when MP < AP, AP is falling; when MP = AP, AP is at its maximum. This is analogous to how your GPA works, if your current semester grade (marginal) is above your cumulative GPA (average), your GPA rises.

Key ideas: The production function relates inputs to output; the short run has fixed inputs, the long run does not. Marginal product is the additional output from one more unit of input. The law of diminishing marginal returns: MP eventually declines as variable inputs increase with fixed inputs. When MP > AP, AP rises; when MP < AP, AP falls.

3.2 Short-Run Production Costs

Short-run costs are derived from the production function and the law of diminishing marginal returns. Fixed costs (FC) do not change with output, rent, insurance, loan payments. Variable costs (VC) change with output, labor, materials, energy. Total cost (TC) = FC + VC.

Average fixed cost (AFC = FC / Q) declines continuously as output increases because fixed costs are spread over more units. Average variable cost (AVC = VC / Q) initially declines (due to increasing marginal returns from specialization) then increases (due to diminishing marginal returns). Average total cost (ATC = TC / Q = AFC + AVC) is U-shaped, initially falling (as AFC declines rapidly) then rising (as AVC increases).

Marginal cost (MC = ΔTC / ΔQ) is the additional cost of producing one more unit. MC is inversely related to marginal product, when MP is rising, MC is falling (each additional worker is more productive, so the cost per additional unit decreases); when MP is falling, MC is rising. The MC curve intersects both the AVC and ATC curves at their minimum points. When MC < ATC, ATC is falling; when MC > ATC, ATC is rising.

Understanding these cost curves is essential because firms' production and pricing decisions are based on the relationships among MC, ATC, AVC, and the market price. The MC curve above AVC is the firm's short-run supply curve in perfect competition.

Key ideas: TC = FC + VC; ATC = AFC + AVC; MC = ΔTC / ΔQ. AFC declines continuously; AVC and ATC are U-shaped; MC intersects AVC and ATC at their minimums. MC is inversely related to marginal product, diminishing returns cause MC to rise. The MC curve above AVC is the competitive firm's short-run supply curve.

3.3 Long-Run Production Costs

In the long run, all inputs are variable, and firms can adjust their scale of operation, building larger or smaller facilities, changing technology, and optimizing all inputs. The long-run average total cost (LRATC) curve is an envelope of all possible short-run ATC curves, each representing a different plant size or scale of production.

Economies of scale exist when increasing the scale of production lowers the LRATC, larger firms can spread fixed costs over more units, negotiate bulk input discounts, and specialize labor and equipment. The LRATC curve slopes downward in this region. Diseconomies of scale exist when increasing scale raises LRATC, very large firms may suffer from coordination problems, bureaucratic inefficiency, and communication breakdowns. The LRATC curve slopes upward in this region. Constant returns to scale exist when increasing scale does not change LRATC, the curve is flat.

The minimum efficient scale (MES) is the lowest level of output at which LRATC is minimized. Industries with high MES (like automobile manufacturing, where enormous factories are needed to produce efficiently) tend to be dominated by a few large firms. Industries with low MES (like restaurants, barbershops) tend to have many small firms.

The shape of the LRATC curve helps explain market structure. In industries with significant economies of scale (utilities, telecommunications), a single firm (natural monopoly) can serve the entire market at lower cost than multiple firms. In industries with constant returns to scale, firm size is less important and many firms can compete efficiently.

Key ideas: In the long run, all inputs are variable and firms choose optimal scale. The LRATC is an envelope of short-run ATC curves. Economies of scale lower LRATC; diseconomies raise it; constant returns keep it flat. Minimum efficient scale determines how many firms an industry can efficiently support.

3.4 Types of Profit

Economists distinguish between accounting profit and economic profit, and this distinction is critical for understanding firm behavior and market outcomes. Accounting profit = Total Revenue , Explicit Costs. It includes only the direct monetary costs of production (wages, materials, rent, utilities). Economic profit = Total Revenue , Total Costs (Explicit + Implicit). It includes both explicit costs and implicit costs, the opportunity costs of resources owned by the firm, including the owner's time, the return that could have been earned on the owner's capital in its next best use, and any other forgone opportunities.

Normal profit is the level of profit just sufficient to keep a firm in business; it covers all explicit and implicit costs, meaning economic profit is zero. Normal profit is included as part of the firm's total costs (as an implicit cost). When a firm earns zero economic profit, it is earning a normal return on its resources; there is no incentive to enter or exit the industry.

Positive economic profit (above-normal profit) means the firm is earning more than the opportunity cost of its resources; it is doing better in this industry than it could in its next best alternative. This attracts new firms into the industry (in the long run, in competitive markets). Negative economic profit (economic loss) means the firm is earning less than the opportunity cost of its resources; it would be better off in another use. This causes firms to exit the industry in the long run.

Key ideas: Accounting profit includes only explicit costs; economic profit includes both explicit and implicit costs. Normal profit means zero economic profit, the firm covers all opportunity costs. Positive economic profit attracts entry; negative economic profit causes exit. Economic profit, not accounting profit, drives long-run entry and exit decisions.

3.5 Profit Maximization

All firms, regardless of market structure, maximize profit (or minimize losses) by producing the quantity where marginal revenue (MR) equals marginal cost (MC), as long as the price covers the firm's variable costs. Marginal revenue is the additional revenue from selling one more unit: MR = ΔTR / ΔQ.

The logic is straightforward: if MR > MC for the next unit, producing it adds more to revenue than to cost, increasing profit, the firm should produce it. If MR < MC, producing the next unit adds more to cost than to revenue, decreasing profit, the firm should not produce it. Profit is maximized at the quantity where MR = MC.

For a perfectly competitive firm (which is a price taker), MR = P (the market price) for every unit, so the profit-maximizing rule becomes P = MC. For firms with market power (monopoly, monopolistic competition, oligopoly), MR is less than price because the demand curve is downward-sloping, to sell an additional unit, the firm must lower the price on all units.

The firm's profit per unit is the difference between price and average total cost (P , ATC). Total profit is (P , ATC) × Q. If P > ATC, the firm earns positive economic profit. If P = ATC, the firm earns normal profit (zero economic profit). If AVC < P < ATC, the firm incurs a loss but should continue producing in the short run because it covers its variable costs and contributes to fixed costs. If P < AVC, the firm should shut down because it cannot even cover its variable costs.

Key ideas: Profit is maximized where MR = MC. For competitive firms, MR = P; for firms with market power, MR < P. Profit per unit = P , ATC; total profit = (P , ATC) × Q. The shutdown rule: produce if P ≥ AVC; shut down if P < AVC.

3.6 Firms' Short-Run and Long-Run Decisions

In the short run, a firm decides whether to produce or shut down, and if it produces, what quantity to produce. The firm produces at MR = MC as long as price exceeds average variable cost (P ≥ AVC). If price falls below AVC, the firm shuts down because it loses more by producing than by stopping; it would lose only its fixed costs by shutting down.

In the long run, firms decide whether to enter or exit an industry. If firms in an industry earn positive economic profit, new firms are attracted to enter, increasing market supply, driving down the market price, and reducing economic profit until it reaches zero. If firms earn negative economic profit (losses), some exit the industry, decreasing supply, driving up the price, and increasing profits for remaining firms until economic profit reaches zero.

Long-run equilibrium in a perfectly competitive market occurs when economic profit is zero; there is no incentive for entry or exit. At this point, price equals the minimum of the long-run average total cost curve (P = min LRATC), and each firm operates at the most efficient scale. This is both productively efficient (producing at the lowest possible cost) and allocatively efficient (producing where P = MC, so the value consumers place on the last unit equals the cost of producing it).

Key ideas: Short-run decision: produce if P ≥ AVC; shut down if P < AVC. Long-run decision: enter if economic profit > 0; exit if economic profit < 0. Long-run competitive equilibrium: P = MC = min ATC, with zero economic profit. Perfect competition achieves both productive efficiency (min ATC) and allocative efficiency (P = MC).

3.7 Perfect Competition

Perfect competition is a market structure characterized by many small firms selling identical (homogeneous) products, free entry and exit, perfect information, and no single firm having the ability to influence the market price. Each firm is a price taker; it takes the market price as given and can sell as much as it wants at that price but nothing above it.

The perfectly competitive firm's demand curve is perfectly elastic (horizontal) at the market price. Since MR = P for every unit, the firm's profit-maximizing quantity is where P = MC. The industry supply curve is the horizontal summation of all firms' MC curves (above AVC).

In the short run, firms may earn positive or negative economic profit, depending on where the market price falls relative to ATC. In the long run, free entry and exit ensure that economic profit is driven to zero. If profits are positive, entry increases supply and drives down price. If losses occur, exit decreases supply and drives up price. Long-run equilibrium: P = MR = MC = min ATC.

Perfect competition is considered the benchmark of market efficiency. It achieves allocative efficiency (P = MC, the right amount is produced) and productive efficiency (production at min ATC, at the lowest possible cost). However, perfect competition rarely exists in its pure form; most real markets have some degree of product differentiation, barriers to entry, or market power. The model serves as an ideal against which other market structures are compared.

Key ideas: Perfect competition features many firms, identical products, free entry/exit, and price-taking behavior. Firms maximize profit where P = MC; the firm's demand curve is perfectly elastic at the market price. Long-run equilibrium: P = MC = min ATC with zero economic profit. Perfect competition achieves both allocative and productive efficiency.

Unit 4 – Imperfect Competition

4.1 Introduction to Imperfectly Competitive Markets

Most real-world markets fall between the extremes of perfect competition and pure monopoly. Imperfectly competitive markets share a key feature: firms have some degree of market power, the ability to influence the price of their product. This means the firm faces a downward-sloping demand curve (unlike a perfectly competitive firm, which faces a horizontal demand curve at the market price).

When a firm faces a downward-sloping demand curve, marginal revenue is less than price (MR < P) for all units after the first. This is because to sell an additional unit, the firm must lower the price not just on that unit but on all units it sells. The MR curve lies below the demand curve and has twice the slope (for a linear demand curve).

The three main types of imperfect competition are monopoly (a single seller with no close substitutes and high barriers to entry), monopolistic competition (many firms selling differentiated products with low barriers to entry), and oligopoly (a few large firms that are interdependent, with significant barriers to entry). Each structure produces different outcomes in terms of price, quantity, efficiency, and profit.

Market power comes from barriers to entry (legal restrictions, economies of scale, control of essential resources, brand loyalty), product differentiation (real or perceived differences between products), and the number of competitors. Greater market power means a firm can charge higher prices and earn economic profit, even in the long run, unlike in perfect competition.

Key ideas: Imperfectly competitive firms face downward-sloping demand curves and have market power. MR < P for firms with market power because lowering price applies to all units sold. The three types are monopoly, monopolistic competition, and oligopoly. Market power arises from barriers to entry, product differentiation, and limited competition.

4.2 Monopolies

A monopoly is a market structure with a single seller, no close substitutes for the product, and high barriers to entry that prevent competitors from entering. Monopolies can arise from legal barriers (patents, copyrights, government licenses, franchises), control of essential resources (De Beers' historical control of diamond supply), or natural monopoly conditions (economies of scale so large that one firm can serve the entire market at lower cost than multiple firms, utilities are the classic example).

The monopolist faces the market demand curve (since it is the only firm) and maximizes profit at MR = MC. Because MR < P, the monopolist produces less and charges more than a perfectly competitive market would. This creates deadweight loss; some mutually beneficial transactions that would occur in a competitive market do not occur under monopoly. Consumer surplus decreases, and total surplus is lower than under perfect competition.

A monopolist can earn positive economic profit in both the short run and the long run because barriers to entry prevent new firms from competing away those profits. This is a fundamental difference from perfect competition, where long-run economic profit is zero.

Monopoly is neither allocatively efficient (P > MC, the monopolist charges more than marginal cost, meaning too little is produced from society's perspective) nor productively efficient (the monopolist does not necessarily produce at minimum ATC). Government responses to monopoly include antitrust regulation (breaking up monopolies or preventing mergers), price regulation (setting prices closer to competitive levels, especially for natural monopolies), and public ownership.

Key ideas: Monopolies have a single seller, no close substitutes, and high barriers to entry. The monopolist produces where MR = MC, charging P > MC and creating deadweight loss. Monopolists can earn long-run economic profit because barriers prevent entry. Monopoly is neither allocatively nor productively efficient; government may regulate or break up monopolies.

4.3 Price Discrimination

Price discrimination occurs when a firm charges different prices to different consumers for the same good, based on their willingness to pay rather than differences in production costs. To practice price discrimination, a firm must have market power (ability to set prices), be able to identify consumers with different willingness to pay (segment the market), and be able to prevent resale (arbitrage) between consumer groups.

There are three degrees of price discrimination. First-degree (perfect) price discrimination charges each consumer exactly their maximum willingness to pay, the firm captures all consumer surplus. This is rare in practice but is approached by some negotiation-based sales and personalized pricing algorithms. Second-degree price discrimination charges different prices based on the quantity consumed, bulk discounts, two-part pricing (a membership fee plus per-unit charges). Third-degree price discrimination charges different prices to different identifiable groups, student discounts, senior citizen discounts, different prices in different geographic markets, peak vs. off-peak pricing.

Price discrimination increases the monopolist's profit and can increase or decrease total surplus depending on the type. Perfect price discrimination actually eliminates deadweight loss because the monopolist produces the same quantity as a competitive market (every consumer who values the good above MC purchases it), but all surplus goes to the producer. Third-degree discrimination can increase output (and reduce deadweight loss) if it allows the firm to serve markets that would otherwise be unserved at a single price.

Key ideas: Price discrimination charges different prices based on willingness to pay, not cost differences. Requirements: market power, ability to segment the market, and prevention of resale. Three degrees: first (individual pricing), second (quantity-based), third (group-based). Perfect price discrimination eliminates deadweight loss but captures all surplus for the producer.

4.4 Monopolistic Competition

Monopolistic competition is a market structure with many firms, differentiated products (each firm's product is slightly different from competitors'), low barriers to entry and exit, and some degree of market power (firms are not price takers because their products are differentiated). Examples include restaurants, clothing brands, hair salons, and mobile apps.

In the short run, a monopolistically competitive firm can earn positive, zero, or negative economic profit, depending on demand conditions. Like a monopolist, it maximizes profit where MR = MC and charges a price above marginal cost (P > MC) because it faces a downward-sloping demand curve.

In the long run, free entry and exit drive economic profit to zero, just as in perfect competition. If firms earn positive economic profit, new firms enter (attracted by profits), increasing competition and shifting each existing firm's demand curve leftward (each firm loses market share) until economic profit reaches zero. At long-run equilibrium, P = ATC (zero economic profit), but P > MC (allocative inefficiency) and the firm does not produce at minimum ATC (productive inefficiency, the firm has excess capacity, producing below the output that would minimize average cost).

Monopolistic competition is less efficient than perfect competition (due to allocative and productive inefficiency) but offers benefits in the form of product variety and innovation. Consumers value having choices among differentiated products; they are willing to pay slightly higher prices for products that better match their preferences. The cost of this variety is the excess capacity and slightly higher prices compared to perfect competition.

Key ideas: Monopolistic competition has many firms, differentiated products, and low barriers to entry. Short-run behavior resembles monopoly (MR = MC, P > MC). Long-run entry drives economic profit to zero (P = ATC), but excess capacity remains. Monopolistic competition is less efficient than perfect competition but provides product variety.

4.5 Oligopoly and Game Theory

Oligopoly is a market structure dominated by a few large firms whose decisions are interdependent; each firm must consider how its rivals will react to its pricing, output, and marketing decisions. High barriers to entry (economies of scale, patents, brand loyalty, control of distribution) protect oligopolists from new competition. Examples include the automobile industry, airlines, telecommunications, and tech platforms.

The key feature distinguishing oligopoly from other market structures is mutual interdependence. A perfectly competitive firm ignores rivals (it's too small to matter); a monopolist has no rivals. An oligopolist must strategically consider competitors' likely responses. This interdependence makes oligopoly the most complex market structure to analyze and introduces game theory as an analytical tool.

Game theory models strategic interactions between rational decision-makers. The prisoner's dilemma is the most famous game theory model: two firms each have the option to cooperate (maintain high prices) or defect (cut prices to gain market share). If both cooperate, both earn moderate profits. If both defect, both earn low profits. If one cooperates while the other defects, the defector earns high profits while the cooperator earns very low profits. The dominant strategy (the best choice regardless of what the other player does) is to defect, leading to a Nash equilibrium where both defect, even though both would be better off cooperating.

This explains why oligopolistic firms often try to collude, forming cartels (like OPEC) that agree to restrict output and maintain high prices. However, collusion is unstable because each firm has an incentive to cheat (produce more than agreed to capture extra profit). Collusion is also illegal in most countries (antitrust laws). Without collusion, oligopolies may engage in non-price competition (advertising, product differentiation, service quality) rather than destructive price wars.

Key ideas: Oligopoly features a few large firms with mutual interdependence and high barriers to entry. Game theory analyzes strategic interactions; the prisoner's dilemma shows why cooperation is difficult. The dominant strategy often leads to outcomes worse than mutual cooperation. Collusion (cartels) is profitable but unstable and usually illegal; non-price competition is common.

Unit 5 – Factor Markets

5.1 Introduction to Factor Markets

Factor markets (also called resource markets or input markets) are the markets in which the factors of production, land, labor, capital, and entrepreneurship, are bought and sold. In product markets, firms are sellers and households are buyers. In factor markets, the roles reverse: firms are buyers (they demand labor, capital, and other inputs) and households are sellers (they supply their labor, land, and savings).

The demand for factors of production is a derived demand; it derives from the demand for the goods and services that the factors produce. A car manufacturer's demand for steel workers depends on the demand for cars. If car demand increases, the demand for steel workers increases. This connection between product markets and factor markets is fundamental.

The marginal revenue product (MRP) of a factor is the additional revenue a firm earns from employing one more unit of that factor: MRP = Marginal Product (MP) × Marginal Revenue (MR). For a competitive firm (where MR = P), MRP = MP × P. The MRP curve is the firm's demand curve for the factor, the firm hires additional units of the factor as long as MRP ≥ the factor's price (wage, rental rate, etc.).

A profit-maximizing firm hires a factor up to the point where MRP = Factor Price. If MRP > wage, the additional worker generates more revenue than they cost, hire them. If MRP < wage, the additional worker costs more than they generate, don't hire. This rule applies to all factors, not just labor.

Key ideas: Factor markets are where inputs are bought and sold; firms are buyers, households are sellers. Factor demand is derived from demand for the products factors produce. MRP = MP × MR; the MRP curve is the firm's demand curve for a factor. Profit maximization: hire where MRP = Factor Price.

5.2 Changes in Factor Demand and Factor Supply

Factor demand shifts when there are changes in the demand for the product (derived demand), changes in the productivity of the factor, or changes in the prices of other factors. An increase in product demand shifts the MRP curve rightward (firms want more of the factor at every price). Technological improvements that increase the marginal product of a factor also shift demand rightward. Changes in the price of substitute or complementary inputs can increase or decrease demand for a given factor.

Factor supply responds to different determinants depending on the factor. The supply of labor depends on the wage rate, working conditions, education and training requirements, geographic mobility, immigration policy, and cultural factors (such as labor force participation rates among different demographic groups). The supply of capital depends on savings rates, interest rates, and investment incentives. The supply of land is essentially fixed (perfectly inelastic) in total, though land can be reallocated among uses.

The equilibrium factor price (wage, rental rate, interest rate) is determined by the intersection of factor demand and factor supply, just as product prices are determined by product supply and demand. When factor demand increases (rightward shift), the factor price rises and the quantity employed increases. When factor supply increases (rightward shift), the factor price falls and the quantity employed increases.

Key ideas: Factor demand shifts with changes in product demand, factor productivity, and prices of other inputs. Labor supply depends on wages, working conditions, education, and demographics. Land supply is essentially fixed; capital supply depends on savings and investment incentives. Equilibrium factor prices are determined by factor supply and demand.

5.3 Perfectly Competitive Labor Markets

In a perfectly competitive labor market, many firms compete for workers, many workers compete for jobs, workers are homogeneous (interchangeable), and neither firms nor workers have the power to influence the market wage. Each firm takes the market wage as given and hires workers until MRP = Wage.

The market demand for labor is the horizontal sum of all firms' MRP curves. The market supply of labor is upward-sloping, higher wages attract more workers (or more hours from existing workers). Market equilibrium determines the wage rate and the total quantity of labor employed. Each individual firm can hire as many workers as it wants at the market wage, so the firm faces a perfectly elastic (horizontal) labor supply curve.

At the profit-maximizing level of employment (where MRP = Wage), each worker is paid exactly what their last unit of labor contributes to revenue. Workers whose MRP exceeds the wage generate surplus value for the firm. The area between the MRP curve and the wage line represents the firm's economic rent from labor, analogous to producer surplus.

In competitive labor markets, wage differentials between occupations reflect differences in MRP (which depend on the demand for the product and the worker's productivity), differences in human capital (education, training, experience, skills), compensating differentials (higher wages for dangerous, unpleasant, or high-stress jobs), and barriers to entry (licensing requirements, educational prerequisites, union restrictions).

Key ideas: In perfectly competitive labor markets, firms are wage takers and hire where MRP = Wage. The market wage is determined by market supply and demand for labor. Wage differentials reflect differences in MRP, human capital, compensating differentials, and barriers to entry. Each worker is paid according to their marginal contribution to revenue.

5.4 Monopsony Markets

A monopsony is a labor market with a single buyer of labor, one firm is the only employer in the market. Just as a monopolist is the sole seller of a product, a monopsonist is the sole buyer of a factor (usually labor). Examples include a single large employer in a small town (a military base, a mining company, a hospital in a rural area).

Because the monopsonist is the only employer, it faces the entire upward-sloping market supply curve for labor. To hire additional workers, it must raise the wage for all workers, not just the marginal one. This means the marginal factor cost (MFC), the additional cost of hiring one more worker, exceeds the wage. The MFC curve lies above the labor supply curve.

The monopsonist maximizes profit by hiring where MFC = MRP. Because MFC > Wage at this point, the monopsonist hires fewer workers and pays a lower wage than would prevail in a competitive labor market. This creates deadweight loss, fewer workers are employed than the efficient quantity, and those who are employed are paid less than their marginal revenue product.

A minimum wage can actually increase employment in a monopsony market, unlike in a competitive market, where a minimum wage above equilibrium causes unemployment. If the minimum wage is set between the monopsony wage and the competitive wage, the monopsonist's MFC becomes the minimum wage (constant) up to the quantity where the supply curve intersects the minimum wage. This increases the quantity of labor demanded because MFC is now lower (equal to the minimum wage rather than above the supply curve). This is one of the few cases where a price floor can increase efficiency.

Key ideas: A monopsonist is a single buyer of labor, facing the upward-sloping market supply curve. MFC > Wage because hiring more requires raising the wage for all workers. The monopsonist hires fewer workers at a lower wage than competitive markets. A minimum wage can increase employment in a monopsony, unlike in competitive markets.

Unit 6 – Market Failure and the Role of Government

6.1 Socially Efficient and Inefficient Market Outcomes

Markets achieve socially efficient outcomes when they produce the quantity at which marginal social benefit (MSB) equals marginal social cost (MSC). In the absence of market failures, the demand curve reflects MSB and the supply curve reflects MSC, and the competitive equilibrium is socially optimal, total surplus is maximized with no deadweight loss.

Market failure occurs when markets fail to allocate resources efficiently. The four main types of market failure are externalities (costs or benefits that affect parties not involved in the transaction), public goods (goods that are non-excludable and non-rivalrous), imperfect competition (market power that allows firms to produce less and charge more than the efficient outcome), and imperfect information (when buyers or sellers lack important information about products, prices, or quality).

When market failure occurs, the market equilibrium quantity differs from the socially optimal quantity, creating deadweight loss. The government can potentially improve efficiency by correcting the market failure through taxes, subsidies, regulations, provision of public goods, antitrust enforcement, or information requirements. However, government intervention is not always successful, government failure (when government intervention makes outcomes worse rather than better due to unintended consequences, political pressures, or administrative costs) is also possible.

Key ideas: Social efficiency requires MSB = MSC; competitive markets achieve this in the absence of market failure. Market failures include externalities, public goods, imperfect competition, and imperfect information. Market failure creates deadweight loss, the market produces too much or too little of a good. Government can correct market failures but may also create government failure.

6.2 Externalities

An externality is a cost or benefit that affects a party not directly involved in a market transaction. When a factory pollutes a river, the downstream residents bear costs (health problems, lost recreation) that are not reflected in the factory's production costs; this is a negative externality. When a homeowner maintains a beautiful garden, neighbors benefit from the pleasant view without paying for it; this is a positive externality.

Negative externalities cause markets to overproduce because the private cost (what the firm pays) is less than the social cost (private cost plus the external cost imposed on third parties). The supply curve based on private costs lies to the right of the socially optimal supply curve. Government can correct negative externalities through Pigovian taxes (taxes equal to the external cost per unit, which internalize the externality and reduce production to the socially optimal level), regulations (emission standards, pollution permits), or cap-and-trade systems.

Positive externalities cause markets to underproduce because the private benefit (what the buyer gains) is less than the social benefit (private benefit plus the external benefit to third parties). The demand curve based on private benefits lies to the left of the socially optimal demand curve. Government can correct positive externalities through subsidies (which lower the price and increase consumption to the socially optimal level) or direct provision (public education, vaccination programs).

The Coase theorem suggests that if property rights are well-defined and transaction costs are low, private parties can negotiate to reach the efficient outcome without government intervention, regardless of who initially holds the property rights. However, in practice, high transaction costs and the involvement of many parties often make private negotiation impractical, justifying government intervention.

Key ideas: Negative externalities cause overproduction; positive externalities cause underproduction. Pigovian taxes internalize negative externalities; subsidies correct positive externalities. The social cost/benefit differs from the private cost/benefit by the external cost/benefit. The Coase theorem suggests private solutions are possible if property rights are clear and transaction costs are low.

6.3 Public and Private Goods

Goods can be classified by two characteristics: excludability (whether non-payers can be prevented from consuming the good) and rivalry (whether one person's consumption reduces the amount available for others).

Private goods are both excludable and rivalrous; most consumer products like food, clothing, and electronics. Markets efficiently provide private goods because firms can charge prices (excludability) and increased demand raises the need for more production (rivalry).

Public goods are non-excludable and non-rivalrous, national defense, public fireworks displays, lighthouses, flood control. No one can be excluded from benefiting, and one person's consumption does not reduce availability for others. Markets underprovide public goods because of the free-rider problem, individuals can benefit without paying, so they have no incentive to voluntarily contribute, and firms have no way to charge for the good. Government typically provides public goods, financed through taxation.

Common resources are rivalrous but non-excludable, ocean fisheries, clean air, public grazing land. Because no one can be excluded but use by one reduces availability for others, common resources tend to be overused, the "tragedy of the commons." Government can address this through regulation (fishing quotas, emissions limits), property rights assignment, or Pigovian taxes.

Club goods (natural monopolies) are excludable but non-rivalrous, cable TV, streaming services, toll roads (when not congested). These can be provided privately because non-payers can be excluded, but pricing is complex because the marginal cost of an additional user is essentially zero.

Key ideas: Private goods are excludable and rivalrous, markets provide them efficiently. Public goods are non-excludable and non-rivalrous, markets underprovide them due to the free-rider problem. Common resources are rivalrous but non-excludable; they tend to be overused (tragedy of the commons). Government provides public goods through taxation and manages common resources through regulation.

6.4 The Effects of Government Intervention in Different Market Structures

Government intervention affects market outcomes differently depending on the market structure. In perfectly competitive markets, government intervention (price controls, taxes, subsidies) typically moves the market away from the efficient equilibrium, creating deadweight loss. However, when externalities or other market failures are present, well-designed intervention can actually increase efficiency.

In monopoly markets, government regulation can improve outcomes. Antitrust laws (like the Sherman Act and Clayton Act in the U.S.) prevent monopolistic practices and promote competition. Natural monopolies are often regulated to prevent them from charging monopoly prices, regulators may impose marginal cost pricing (P = MC, which is allocatively efficient but may result in losses for the firm if MC < ATC) or average cost pricing (P = ATC, which allows the firm to break even while still reducing price below the monopoly level).

In oligopoly markets, antitrust enforcement prevents collusion and anti-competitive practices. The government may block mergers that would reduce competition or punish price-fixing agreements. However, distinguishing between legitimate competitive behavior and anti-competitive practices can be difficult.

Government also addresses market failures through information requirements (truth-in-lending laws, food labeling, securities disclosure), consumer protection regulations, and environmental standards. The goal is to correct specific market failures while preserving the benefits of market competition as much as possible.

Key ideas: Government intervention can worsen efficiency in competitive markets but improve it when market failures exist. Antitrust laws prevent monopolistic practices and promote competition. Natural monopolies may be regulated through marginal cost or average cost pricing. Information requirements and consumer protections address market failures from imperfect information.

6.5 Inequality

Income and wealth inequality are significant economic and political issues. Income inequality refers to the uneven distribution of income across a population. The Lorenz curve is a graphical representation of income distribution; it plots the cumulative percentage of income received against the cumulative percentage of the population. A perfectly equal distribution would be a 45-degree line (the line of equality). The further the Lorenz curve bows away from the 45-degree line, the greater the inequality.

The Gini coefficient (or Gini index) is a numerical measure of inequality derived from the Lorenz curve. It ranges from 0 (perfect equality, everyone has the same income) to 1 (perfect inequality, one person has all the income). The Gini coefficient is calculated as the area between the line of equality and the Lorenz curve, divided by the total area under the line of equality.

Sources of income inequality include differences in human capital (education, skills, experience), differences in natural ability and effort, discrimination (based on race, gender, ethnicity), inheritance of wealth, market power (some workers have more bargaining power than others), and government policies (tax structure, social programs, minimum wage).

Government policies to address inequality include progressive taxation (higher tax rates on higher incomes), transfer payments (Social Security, unemployment insurance, food assistance), in-kind benefits (public housing, Medicaid), minimum wage laws, public education, and anti-discrimination legislation. There is an ongoing debate about the trade-off between equity (reducing inequality) and efficiency (maintaining incentives for productive activity). Policies that reduce inequality may also reduce incentives to work, save, invest, and innovate, though the magnitude of these effects is debated.

Key ideas: The Lorenz curve graphically displays income distribution; the Gini coefficient numerically measures inequality. Inequality arises from differences in human capital, discrimination, inheritance, and market power. Government addresses inequality through progressive taxes, transfers, education, and anti-discrimination laws. The equity-efficiency trade-off is a central debate, reducing inequality may affect incentives.
`


export const MICROECONOMICS_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Microeconomics',
  units: parseRawOverview(RAW_MICROECONOMICS),
  features: { latex: false, codeExamples: false },
}


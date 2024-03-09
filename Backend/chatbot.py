import os
import openai
# from dotenv import load_dotenv, find_dotenv
# _ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = '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'

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
    )
#     print(str(response.choices[0].message))
    return response.choices[0].message["content"]

def collect_messages(_):
    prompt = inp.value_input
    inp.value = ''
    context.append({'role':'user', 'content':f"{prompt}"})
    response = get_completion_from_messages(context)
    context.append({'role':'assistant', 'content':f"{response}"})
    panels.append(
        pn.Row('User:', pn.pane.Markdown(prompt, width=600)))
    panels.append(
        pn.Row('Assistant:', pn.pane.Markdown(response, width=600, styles={'background-color': '#F6F6F6'})))

        # pn.Row('Assistant:', pn.pane.Markdown(response, width=600, styles={'background-color': '#F6F6F6'}))

    return pn.Column(*panels)

details="""
Let’s delve deeper into each of the strategies for raising funds for an NGO, providing more context and actionable steps where possible:

1. Leverage Corporate Matching Gifts: Many companies offer matching gift programs to match the charitable contributions made by their employees. To leverage this, communicate with your donors about checking with their employers about such programs. Provide easy instructions or tools on your website that help donors initiate the matching gift process.

2. Engage in Cause-Related Marketing Partnerships: Partner with businesses that align with your mission for a campaign where a portion of their product sales is donated to your NGO. This not only provides funding but also increases awareness. It’s important to choose partners wisely to ensure their values align with your organization's mission.

3. Utilize Social Media Fundraising: Platforms like Facebook and Instagram have built-in fundraising tools that allow nonprofits to collect donations directly. Create compelling content that highlights the impact of donations and encourages followers to contribute directly through these platforms. Live events or challenges can also boost engagement and donations.

4. Implement a “Donate Your Birthday” Campaign: Encourage supporters to dedicate their birthdays to your cause by asking friends and family to donate instead of giving gifts. This personal approach to fundraising can be particularly effective on social media platforms, where users can easily set up and share fundraising campaigns.

5. Create a Legacy Giving Program: Legacy giving or planned giving involves donors making arrangements to leave a financial gift in their will or estate planning. Educating your supporters about the benefits and the impact of such gifts can encourage them to consider your NGO in their long-term financial planning.

6. Host Virtual Fundraisers: With the increasing accessibility of online platforms, virtual events such as webinars, virtual concerts, or online auctions can attract a wide audience. These events reduce the need for physical space and can be less costly to organize while still offering engaging experiences for participants.

7. Sell Branded Merchandise: Offering merchandise that carries your NGO's branding can not only raise funds but also increase visibility and awareness. Ensure the products are of good quality and align with your organization’s values (e.g., sustainability). Setting up an online store can simplify the sales process.

8. Launch a Challenge Campaign: Encourage supporters to engage in a personal challenge (running a certain distance, giving up coffee for a month, etc.) and seek sponsorships from their network. These campaigns can go viral, especially if they are tied to a compelling story or cause.

9. Utilize Amazon Smile: By registering with Amazon Smile, a portion of the purchase price from your supporters’ eligible Amazon purchases is donated to your NGO. Promote this option to your network through newsletters, social media, and your website to maximize participation.

10. Offer Named Sponsorship Opportunities: Recognize significant contributions by offering to name programs, scholarships, buildings, or rooms after the donor. This not only provides a tangible acknowledgment of their support but also encourages larger donations.

11. Engage in Community Fundraising: Organize community events that resonate with your local community, such as bake sales, yard sales, or cultural fairs. These events can foster a sense of community while raising funds and awareness for your cause.

12. Start a YouTube Channel: Create engaging content related to your NGO’s mission and activities. As your channel grows, you can monetize it through ads, Super Chats during live streams, or channel memberships, providing a steady stream of income over time.

13. Implement a "Round Up" Campaign: Partner with retail businesses to offer customers the option to round up their purchase amount to the nearest dollar, with the difference donated to your NGO. This micro-donation strategy can add up to significant amounts over time.

14. Host Educational Workshops: Offer workshops, seminars, or courses that are in line with your NGO's expertise. Charge a fee for attendance. These events can be educational for participants while also serving as a fundraising opportunity for your organization.

15. Launch an Annual Giving Campaign: An annual giving campaign is a focused effort to raise funds over a specific period each year. It can be tied to a particular theme or need within your organization. The campaign should include a mix of communication strategies, including direct mail, email marketing, and social media, to engage potential donors.

Implementing these strategies requires careful planning and execution. Tailoring each approach to fit your organization’s unique context and needs will help maximize the effectiveness of your fundraising efforts.


"""
import panel as pn  # GUI
pn.extension()
few_Shot= """
        User: Hi I work with Ayuda NGO we raise funds for orphanage children 
YOU : Hi Great to hear, to raise funds for orphanage children you can contact 
schools via email and appeal to the social responsibility they have, you can say that you'll help 
out by making handmade candles or some dias for diwali that can sell in the school and the price goes to 
donations.. This will help school maintain a good image. 
User: Thats great , can you give some more? 
YOU: sure! you can also reach out to Corporates and appeal to CSR for some donations. 
Relating to the cause their company stands for and what your ngo stands for. 
User: Thanks!     
 """

panels = [] # collect display 

context = [ {'role':'system', 'content':f"""

You're an NGO expert, now in India there are hundreds of NGOs that are facing issues in how to 
raise funding and get the required equipments or needs fulfilled for the causes they re part of 
so your task is to advice them on ways they can raise funding? 
You can refer {details} for some pointers on how to raise funding for NGO and then tailor those 
points to the user's ngo needs.
Be welcoming and nice to the users and motivate and help them. 
The following is an example of such a conversation:  
{few_Shot}
Now Take the example, similarly 
greet user liek u dont know anything about their ngo and are eager to know
then wait for the user to respond 
then give advice on how their ngo can raise funds to support their cause, 
really put on your thinking hat to do it 
motivate and support them too!
dont give too lengthy replies make it in 80 words
"""} ]  # accumulate messages


inp = pn.widgets.TextInput(value="Hi", placeholder='Enter text here…')
button_conversation = pn.widgets.Button(name="Chat!")

interactive_conversation = pn.bind(collect_messages, button_conversation)

dashboard = pn.Column(
    inp,
    pn.Row(button_conversation),
    pn.panel(interactive_conversation, loading_indicator=True, height=300),
)

dashboard
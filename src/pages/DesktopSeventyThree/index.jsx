import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text, RatingBar } from "../../components";

const data = [{ present: "2016-present" }, { present: "2010-2015" }];
const data1 = [
  {
    description:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    consultedfor: "Consulted for Skin care",
  },
  {
    description:
      "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods",
    consultedfor: "Consulted for Pregnancy",
  },
];

export default function DesktopSeventyThreePage() {
  return (
    <>
      <Helmet>
        <title>Dr. Bruce Willis - Experienced Gynecologist in Surat</title>
        <meta
          name="description"
          content="Meet Dr. Bruce Willis, a renowned Gynecologist with over 7 years of experience at Sanjivni Hospital, Surat. Specializing in women's health, skin care, immunity, and more. Book an appointment today to address your concerns with a trusted expert."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col items-center gap-[61px] bg-white-A700_01 pb-[85px] md:pb-5 sm:gap-[30px]">
        {/* header section */}
        <header className="flex items-end justify-center self-stretch bg-orange-50 py-[15px]">
          <div className="mx-auto mt-2 flex w-full max-w-[1232px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="flex w-[54%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <Img
                src="images/img_image_45.png"
                alt="imagefortyfive"
                className="h-[49px] w-[39%] object-cover sm:w-full"
              />
              <ul className="flex flex-wrap gap-10">
                <li>
                  <a href="#" className="cursor-pointer self-end">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-dinpro capitalize !text-gray-800_01 hover:font-bold hover:!text-green-800_01"
                    >
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Heading as="h5" className="!font-dinprobold !font-bold capitalize !text-green-800_01">
                      find doctors
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer self-end">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-dinpro capitalize !text-gray-800_01 hover:font-bold hover:!text-green-800_01"
                    >
                      About us{" "}
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button
                color="orange_50"
                size="3xl"
                className="min-w-[118px] rounded-[11px] border border-solid border-green-800_01 font-dinpro font-medium sm:px-5"
              >
                Login
              </Button>
              <Button
                color="green_800_01"
                size="3xl"
                className="min-w-[163px] rounded-[11px] font-dinpro font-medium sm:px-5"
              >
                Sign-up
              </Button>
            </div>
          </div>
        </header>

        {/* profile section */}
        <div className="mx-auto flex w-full max-w-[1243px] flex-col gap-[41px] md:p-5">
          <div className="relative h-[279px] md:h-auto">
            <div className="w-full">
              <div className="h-[197px] self-start rounded-[12px] bg-green-50 bg-[url(/public/images/img_frame_29.png)] bg-cover bg-no-repeat md:h-auto">
                <div className="h-[197px] rounded-[12px] bg-green-50 bg-[url(/public/images/img_frame_29.png)] bg-cover bg-no-repeat pb-[31px] md:h-auto sm:pb-5">
                  <Img
                    src="images/img_image_160.png"
                    alt="image160_one"
                    className="h-[166px] w-full object-cover md:h-auto"
                  />
                </div>
              </div>
              <div className="relative mt-[-69px] flex justify-end self-end border border-solid border-blue_gray-100 bg-yellow-50 p-[33px] sm:p-5">
                <div className="mr-[15px] flex w-[85%] items-center justify-between gap-5 md:mr-0 md:w-full md:flex-col">
                  <div className="flex w-[60%] items-center justify-between gap-5 md:w-full">
                    <div className="flex w-[31%] flex-col gap-1.5">
                      <div className="flex items-start">
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xl" as="p" className="!font-poppins !text-gray-900_02">
                            Dr. Bruce Willis
                          </Text>
                          <Text size="s" as="p" className="!font-poppins !text-green-800_01">
                            Gynecologist
                          </Text>
                        </div>
                        <Img
                          src="images/img_checkmark.svg"
                          alt="checkmark_one"
                          className="relative ml-[-10px] mt-1 h-[23px] w-[23px]"
                        />
                      </div>
                      <div className="flex flex-wrap items-center">
                        <Heading size="xs" as="h1" className="h-[21px] self-start tracking-[-0.15px] !text-gray-700_03">
                          4.2
                        </Heading>
                        <Img src="images/img_signal.svg" alt="signal_one" className="h-[22px]" />
                        <Img src="images/img_signal.svg" alt="signal_three" className="relative ml-[-1px] h-[22px]" />
                        <Img src="images/img_signal.svg" alt="signal_five" className="h-[22px]" />
                        <Img src="images/img_signal.svg" alt="signal_seven" className="h-[22px]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Text size="xs" as="p" className="text-center !font-poppins !text-green-800_01">
                        Followers
                      </Text>
                      <Heading as="h2" className="text-center !font-poppins !text-gray-900_02">
                        850
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center">
                      <Text size="xs" as="p" className="text-center !font-poppins !text-green-800_01">
                        Following
                      </Text>
                      <Heading as="h3" className="text-center !font-poppins !text-gray-900_02">
                        18K
                      </Heading>
                    </div>
                    <div className="flex flex-col">
                      <Text size="xs" as="p" className="text-center !font-poppins !text-green-800_01">
                        Posts
                      </Text>
                      <Heading as="h4" className="text-center !font-poppins !text-gray-900_02">
                        250
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="green_800_01"
                    size="4xl"
                    className="mb-2.5 min-w-[274px] self-end rounded-lg font-inter font-medium sm:px-5"
                  >
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_ellipse_727.png"
              alt="circleimage"
              className="absolute bottom-[25.00px] left-[30.00px] m-auto h-[159px] w-[159px] rounded-[50%]"
            />
          </div>

          {/* about section */}
          <div className="flex items-start gap-[29px] md:flex-col">
            {/* specialization section */}
            <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
              <div className="flex flex-col items-start gap-[33px] rounded-[18px] border border-solid border-gray-300_05 bg-white-A700_01">
                <div className="flex items-center justify-between gap-5 self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient p-[13px]">
                  <Heading size="xl" as="h2" className="ml-[22px] self-start !text-blue_gray-900 md:ml-0">
                    A Little About me
                  </Heading>
                  <Button
                    color="white_A700_01"
                    size="xs"
                    rightIcon={<Img src="images/img_plus.svg" alt="plus" className="h-[14px] w-[14px]" />}
                    className="mr-[22px] min-w-[113px] gap-[7px] rounded-[10px] border border-solid border-green-800_01 font-poppins font-medium !text-gray-700_01 md:mr-0"
                  >
                    Follow
                  </Button>
                </div>
                <div className="flex w-[85%] flex-col gap-1.5 self-center md:w-full md:p-5">
                  <Text as="p" className="w-[97%] !font-poppins leading-[27px] !text-blue_gray-800_7f md:w-full">
                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my
                    hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the{" "}
                  </Text>
                  <div className="flex items-center gap-2.5 sm:flex-col">
                    <div className="h-px flex-1 bg-gray-600_01 sm:self-stretch" />
                    <a href="#" className="self-end">
                      <Text as="p" className="!font-poppins !text-blue_gray-900_03 underline">
                        Read More
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="ml-[39px] flex w-[84%] items-center gap-[15px] md:ml-0 md:w-full md:p-5 sm:flex-col">
                  <Text size="xl" as="p" className="self-end tracking-[-0.20px]">
                    Language Spoken{" "}
                  </Text>
                  <Button
                    color="indigo_700_0a"
                    size="sm"
                    className="w-full flex-1 rounded-[16px] font-medium tracking-[-0.20px] sm:self-stretch"
                  >
                    English{" "}
                  </Button>
                  <Button
                    color="indigo_700_0a"
                    size="sm"
                    className="min-w-[83px] rounded-[16px] font-medium tracking-[-0.20px]"
                  >
                    Hindi
                  </Button>
                  <Button
                    color="indigo_700_0a"
                    size="sm"
                    className="w-full flex-1 rounded-[16px] font-medium tracking-[-0.20px] sm:self-stretch"
                  >
                    Telugu
                  </Button>
                </div>
                <div className="mb-8 ml-[35px] flex gap-[15px] md:ml-0">
                  <Button
                    size="md"
                    shape="circle"
                    className="w-[40px] !rounded-[20px] border border-solid border-blue_gray-400"
                  >
                    <Img src="images/img_facebook.svg" />
                  </Button>
                  <Button
                    size="md"
                    shape="circle"
                    className="w-[40px] !rounded-[20px] border border-solid border-blue_gray-400"
                  >
                    <Img src="images/img_info.svg" />
                  </Button>
                  <Button
                    size="md"
                    shape="circle"
                    className="w-[40px] !rounded-[20px] border border-solid border-blue_gray-400"
                  >
                    <Img src="images/img_clock.svg" />
                  </Button>
                  <Button
                    size="md"
                    shape="circle"
                    className="w-[40px] !rounded-[20px] border border-solid border-blue_gray-400"
                  >
                    <Img src="images/img_trash.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[31px] rounded-[18px] border border-solid border-gray-300_05 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient1 p-3">
                  <Heading size="xl" as="h3" className="ml-6 self-end !text-blue_gray-900 md:ml-0">
                    I Specialize In
                  </Heading>
                </div>
                <div className="mb-[33px] ml-[31px] flex w-[76%] gap-3.5 md:ml-0 md:w-full md:flex-row md:p-5 sm:flex-col">
                  <div className="flex w-[27%] flex-col items-center gap-[5px] sm:w-full">
                    <div className="flex w-[83%] justify-center rounded-[9px] border border-solid border-gray-200_01 bg-gray-50_05 p-2 md:w-full">
                      <Img
                        src="images/img_user_black_900_01.png"
                        alt="womens_health"
                        className="h-[77px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <Text as="p" className="capitalize">
                      women’s health
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1">
                    <Img
                      src="images/img_frame_1000006269.svg"
                      alt="image"
                      className="h-[96px] w-full rounded-[9px] md:h-auto"
                    />
                    <Text as="p" className="capitalize">
                      Skin Care
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-[5px]">
                    <Img
                      src="images/img_floating_icon.svg"
                      alt="floatingicon"
                      className="h-[96px] w-full rounded-[9px] md:h-auto"
                    />
                    <Text as="p" className="capitalize">
                      Immunity
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="self-stretch rounded-[9px] border border-solid border-gray-200_01 bg-gray-50_05 p-2">
                      <Img src="images/img_globe.svg" alt="globe_one" className="h-[78px] w-full md:h-auto" />
                    </div>
                    <Text as="p" className="capitalize">
                      Hair care
                    </Text>
                  </div>
                </div>
              </div>

              {/* treatment section */}
              <div className="flex flex-col items-center gap-6 rounded-[18px] border border-solid border-gray-300_05 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient2 p-[13px]">
                  <Heading size="xl" as="h4" className="ml-3.5 self-start !text-blue_gray-900 md:ml-0">
                    The Concerns I Treat
                  </Heading>
                </div>
                <div className="mb-[29px] flex w-[91%] flex-col gap-[18px] md:w-full md:p-5">
                  <div className="flex items-center gap-[11px] sm:flex-col">
                    <Button size="xl" className="min-w-[154px] rounded-[19px] font-poppins font-medium">
                      Skin Treatment
                    </Button>
                    <Button size="xl" className="min-w-[113px] rounded-[18px] font-poppins font-medium">
                      Pregnancy
                    </Button>
                    <Button size="xl" className="w-full flex-1 rounded-[18px] font-poppins font-medium sm:self-stretch">
                      Period Doubts
                    </Button>
                    <Button size="xl" className="w-full flex-1 rounded-[18px] font-poppins font-medium sm:self-stretch">
                      Endometriosis
                    </Button>
                  </div>
                  <div className="flex w-[73%] md:w-full sm:flex-col">
                    <Button
                      size="xl"
                      className="w-full flex-1 rounded-[18px] font-poppins font-medium sm:self-stretch sm:px-5"
                    >
                      Pelvic Pain
                    </Button>
                    <Button
                      size="xl"
                      className="ml-4 w-full flex-1 rounded-[18px] font-poppins font-medium sm:ml-0 sm:self-stretch"
                    >
                      Ovarian Cysts
                    </Button>
                    <Button
                      color="gray_300"
                      size="xl"
                      variant="outline"
                      className="ml-[11px] min-w-[119px] rounded-[18px] font-poppins font-medium sm:ml-0 sm:px-5"
                    >
                      + 5 More
                    </Button>
                  </div>
                </div>
              </div>

              {/* experience section */}
              <div className="flex flex-col items-start gap-[35px] rounded-[18px] border border-solid border-gray-300_05 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient3 p-3">
                  <Heading size="xl" as="h5" className="ml-3.5 self-end !text-blue_gray-900 md:ml-0">
                    My Work Experience
                  </Heading>
                </div>
                <div className="ml-7 flex md:ml-0">
                  <Heading size="md" as="h6" className="!font-poppins !font-semibold uppercase !text-green-800_01">
                    I have been in practice for : 7+ Years
                  </Heading>
                </div>
                <div className="mb-10 ml-[31px] flex w-[79%] flex-col gap-[18px] md:ml-0 md:w-full md:p-5">
                  {data.map((d, index) => (
                    <div key={"listuserone" + index} className="flex flex-1 items-start gap-2.5 sm:flex-col">
                      <Button size="2xl" className="w-[48px] rounded-md">
                        <Img src="images/img_user.svg" />
                      </Button>
                      <div className="flex flex-1 items-start justify-between gap-5 pr-[18px] sm:self-stretch">
                        <div className="flex flex-col items-start gap-1.5">
                          <Text as="p" className="!font-poppins !text-blue_gray-800">
                            Midtown Medical Clinic
                          </Text>
                          <Text as="p" className="!font-poppins !text-blue_gray-800_7f">
                            Senior doctor
                          </Text>
                        </div>
                        <Text as="p" className="!font-poppins !text-blue_gray-800_b5">
                          <span className="font-normal text-blue_gray-800_b5">2016-</span>
                          <span className="font-normal uppercase text-blue_gray-800_b5">present</span>
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* reviews section */}
              <div className="flex flex-col items-center gap-[21px] rounded-[18px] border border-solid border-gray-300_05 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient4 p-[15px]">
                  <Heading size="xl" as="h4" className="ml-[15px] self-end !text-blue_gray-900 md:ml-0">
                    Featured Reviews (102)
                  </Heading>
                </div>
                <div className="mb-9 flex w-[87%] flex-col gap-6 md:w-full md:p-5">
                  {data1.map((d, index) => (
                    <div
                      key={"listalicent" + index}
                      className="flex flex-1 flex-col items-center gap-3.5 rounded-[17px] bg-gray-50 p-[13px]"
                    >
                      <div className="flex w-[91%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex w-[54%] items-center justify-center gap-2 sm:w-full">
                          <Img
                            src="images/img_frame_2608514.png"
                            alt="alicent"
                            className="h-[56px] w-[22%] self-end rounded-[27px] object-cover"
                          />
                          <div className="flex flex-col items-start justify-center">
                            <Heading as="h5" className="!text-blue_gray-900_01">
                              Alicent Hightower
                            </Heading>
                            <Text as="p" className="!text-gray-500_01">
                              {d.consultedfor}
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="!font-normal tracking-[-0.16px] !text-gray-500">
                          20 January 2023
                        </Text>
                      </div>
                      <div className="mb-[9px] flex w-[92%] flex-col gap-[5px] md:w-full">
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#f79624"
                          activeColor="#f79624"
                          size={20}
                          className="flex justify-between"
                        />
                        <Text as="p" className="!font-normal leading-6 tracking-[-0.16px] !text-blue_gray-900_02">
                          {d.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* appointment section */}
            <div className="flex w-[48%] flex-col items-center rounded-[29px] border border-solid border-gray-200 bg-white-A700_01 p-[18px] md:w-full">
              <div className="mt-4 flex flex-wrap items-center justify-between gap-5 self-stretch rounded-[15px] border border-solid border-gray-300_01 bg-white-A700_01 p-3.5">
                <Heading as="h5" className="ml-[13px] self-end text-center tracking-[0.20px] md:ml-0">
                  Appointment Fee
                </Heading>
                <Heading
                  as="h5"
                  className="mr-[13px] text-center !font-inter tracking-[0.20px] !text-green-800_01 md:mr-0"
                >
                  ₹699.00
                </Heading>
              </div>
              <div className="mt-[45px] flex items-center gap-[21px] self-stretch sm:flex-col">
                <Heading as="h5" className="text-center !font-bold tracking-[0.50px]">
                  Select your mode of session
                </Heading>
                <div className="h-px w-[46%] bg-blue_gray-100_01" />
              </div>
              <div className="mt-10 flex gap-[22px] self-stretch md:flex-row sm:flex-col">
                <div className="flex w-full flex-col items-center gap-1 rounded-[10px] border border-solid border-gray-300_04 bg-white-A700_01 p-3 sm:w-full">
                  <Text
                    as="p"
                    className="mt-1.5 text-center !font-gothamrounded !font-normal tracking-[0.50px] !text-gray-900_01"
                  >
                    In-Clinic
                  </Text>
                  <Text as="p" className="text-center !font-normal tracking-[0.50px] !text-gray-700_02">
                    45 Mins
                  </Text>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-[3px] rounded-[10px] border border-solid border-green-800_84 bg-gray-100_01 p-3 sm:w-full">
                  <div className="mr-6 flex items-center gap-2 self-end md:mr-0">
                    <Text
                      size="lg"
                      as="p"
                      className="self-start text-center !font-gothamrounded tracking-[0.50px] !text-green-800_01"
                    >
                      Video
                    </Text>
                    <Img
                      src="images/img_checkmark_green_800_01.svg"
                      alt="checkmark_one"
                      className="h-[21px] w-[20px] self-end"
                    />
                  </div>
                  <Text as="p" className="text-center !font-normal tracking-[0.50px] !text-gray-700_02">
                    45 Mins
                  </Text>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-gray-300_04 bg-white-A700_01 p-[13px] sm:w-full">
                  <Text
                    as="p"
                    className="mt-1 text-center !font-gothamrounded !font-normal tracking-[0.50px] !text-gray-900"
                  >
                    Chat
                  </Text>
                  <Text as="p" className="text-center !font-normal tracking-[0.50px] !text-gray-700_02">
                    10 Mins
                  </Text>
                </div>
              </div>
              <div className="mt-[33px] flex flex-col gap-[33px] self-stretch pt-[5px]">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex items-center sm:flex-col">
                    <Heading as="h5" className="mt-[5px] self-start text-center !font-bold tracking-[0.20px]">
                      <span className="text-black-900_01">Pick a&nbsp;</span>
                      <span className="lowercase text-black-900_01">Time slot</span>
                    </Heading>
                    <div className="ml-[27px] h-px flex-1 bg-blue_gray-100_01 sm:ml-0 sm:self-stretch" />
                    <Button
                      color="white_A700_01"
                      size="lg"
                      className="ml-[9px] w-[44px] rounded-[21px] border border-solid border-blue_gray-400_01 sm:ml-0"
                    >
                      <Img src="images/img_calendar.svg" />
                    </Button>
                  </div>
                  <div className="flex rounded-[21px] border border-solid border-gray-300_02 bg-white-A700_01 p-[19px]">
                    <div className="flex items-center gap-[18px] self-end sm:flex-col">
                      <Img
                        src="images/img_arrow_left.svg"
                        alt="arrowleft_one"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                      <div className="flex gap-2.5">
                        <div className="flex flex-col items-center justify-center gap-[5px] rounded-[11px] border border-solid border-green-800_01 bg-gray-100 p-3.5">
                          <Heading
                            size="s"
                            as="h6"
                            className="text-center !font-inter !font-semibold tracking-[0.20px] !text-green-800_01"
                          >
                            Mon, 10 Oct
                          </Heading>
                          <Heading size="s" as="h6" className="text-center !text-gray-600_02">
                            10 slots
                          </Heading>
                        </div>
                        <div className="flex flex-col items-center gap-[5px] rounded-[11px] border border-solid border-gray-300_01 bg-white-A700_01 p-4">
                          <Text
                            as="p"
                            className="text-center !font-inter !font-normal tracking-[0.20px] !text-gray-900"
                          >
                            Tue, 11 Oct
                          </Text>
                          <Heading size="s" as="h6" className="text-center !text-deep_orange-700">
                            02 slots{" "}
                          </Heading>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[5px] rounded-[11px] border border-solid border-gray-300_01 bg-white-A700_01 p-3.5">
                          <Text
                            as="p"
                            className="text-center !font-inter !font-normal tracking-[0.20px] !text-black-900"
                          >
                            Wed, 12 Oct
                          </Text>
                          <Heading size="s" as="h6" className="text-center !text-yellow-700">
                            05 slots{" "}
                          </Heading>
                        </div>
                      </div>
                      <Img
                        src="images/img_arrow_left.svg"
                        alt="arrowleft_three"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading size="md" as="h6" className="ml-[17px] text-center tracking-[0.20px] md:ml-0">
                      Morning
                    </Heading>
                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex gap-3 sm:flex-col">
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[106px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          09:00 AM
                        </Button>
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[105px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          09:30 AM
                        </Button>
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[106px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          10:00 AM
                        </Button>
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[105px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          10:15 AM
                        </Button>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[106px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          10:45 AM
                        </Button>
                        <Button
                          color="green_800_01"
                          shape="round"
                          className="min-w-[92px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          11:00 AM
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Heading size="md" as="h6" className="ml-[17px] text-center tracking-[0.20px] md:ml-0">
                      Evening
                    </Heading>
                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex gap-3 sm:flex-col">
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[104px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          04:00 PM
                        </Button>
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[104px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          04:15 PM
                        </Button>
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[103px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          04:30 PM
                        </Button>
                        <Button
                          color="white_A700_01"
                          shape="round"
                          className="min-w-[104px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                        >
                          04:45 PM
                        </Button>
                      </div>
                      <Button
                        color="white_A700_01"
                        size="5xl"
                        shape="round"
                        className="min-w-[104px] border border-solid border-gray-200_01 font-inter tracking-[0.20px]"
                      >
                        05:15 PM
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                color="green_800_01"
                size="4xl"
                className="mb-[27px] mt-[45px] min-w-[476px] rounded-lg font-inter font-medium capitalize sm:px-5"
              >
                Make an appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

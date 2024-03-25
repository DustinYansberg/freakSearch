﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace freakSearch.Migrations
{
    [DbContext(typeof(MyContext))]
    partial class MyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("freakSearch.Models.Episode", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("EpisodeNumber")
                        .IsRequired()
                        .HasColumnType("longtext")
                        .HasColumnName("NUMBER");

                    b.Property<string>("Link")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Summary")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Transcript")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Episodes");
                });

            modelBuilder.Entity("freakSearch.Models.PresentedBy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("EpisodeId")
                        .HasColumnType("int");

                    b.Property<int>("PresenterId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EpisodeId");

                    b.HasIndex("PresenterId");

                    b.ToTable("PresentedBys");
                });

            modelBuilder.Entity("freakSearch.Models.Presenter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Presenters");
                });

            modelBuilder.Entity("freakSearch.Models.PresentedBy", b =>
                {
                    b.HasOne("freakSearch.Models.Episode", "Episode")
                        .WithMany()
                        .HasForeignKey("EpisodeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("freakSearch.Models.Presenter", "Presenter")
                        .WithMany()
                        .HasForeignKey("PresenterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Episode");

                    b.Navigation("Presenter");
                });
#pragma warning restore 612, 618
        }
    }
}

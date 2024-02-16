﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace freakSearch.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20240215213312_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("freakSearch.Models.Episode", b =>
                {
                    b.Property<int>("EpisodeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("EpisodeNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

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

                    b.HasKey("EpisodeId");

                    b.ToTable("Episodes");
                });
#pragma warning restore 612, 618
        }
    }
}
